"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Decal, OrbitControls, Float, ContactShadows } from "@react-three/drei";

/** Comfort Colors 6030 pocket tee — White (matches the Fresh Prints store). */
const SHIRT_WHITE = "#f3f3f0";

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/** Chest pocket with the ΦΚΨ "Parent's Weekend" print centred on it,
 *  drawn on a canvas so the pocket stitching reads on the white tee. */
function makePocketPrint(design: HTMLImageElement): HTMLCanvasElement {
  const W = 640;
  const H = 800;
  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const ctx = c.getContext("2d")!;
  ctx.clearRect(0, 0, W, H);

  // pocket outline: square top, chamfered bottom corners
  const pad = 40;
  const chamfer = 110;
  const path = new Path2D();
  path.moveTo(pad, pad);
  path.lineTo(W - pad, pad);
  path.lineTo(W - pad, H - pad - chamfer);
  path.lineTo(W / 2 + 60, H - pad);
  path.lineTo(W / 2 - 60, H - pad);
  path.lineTo(pad, H - pad - chamfer);
  path.closePath();

  // soft shadow under the pocket edge, then the pocket fabric itself
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.28)";
  ctx.shadowBlur = 18;
  ctx.shadowOffsetY = 8;
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.fill(path);
  ctx.restore();

  // double stitch line
  ctx.strokeStyle = "rgba(0,0,0,0.16)";
  ctx.lineWidth = 6;
  ctx.stroke(path);
  ctx.strokeStyle = "rgba(255,255,255,0.9)";
  ctx.lineWidth = 2;
  ctx.stroke(path);

  // design centred in the pocket at ~80% of pocket width
  const pocketW = W - 2 * pad;
  const dw = pocketW * 0.8;
  const dh = dw * (design.naturalHeight / design.naturalWidth);
  const dx = (W - dw) / 2;
  const dy = pad + (H - 2 * pad - chamfer * 0.6 - dh) / 2;
  ctx.drawImage(design, dx, dy, dw, dh);
  return c;
}

function toTexture(source: HTMLCanvasElement | HTMLImageElement): THREE.Texture {
  const tex =
    source instanceof HTMLCanvasElement
      ? new THREE.CanvasTexture(source)
      : new THREE.Texture(source);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 16;
  tex.needsUpdate = true;
  return tex;
}

function Tee({ side }: { side: "front" | "back" }) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/shirt/shirt_baked.glb") as unknown as {
    nodes: { T_Shirt_male: THREE.Mesh };
    materials: { lambert1: THREE.MeshStandardMaterial };
  };
  const [backTex, setBackTex] = useState<THREE.Texture | null>(null);
  const [frontTex, setFrontTex] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    materials.lambert1.color.set(SHIRT_WHITE);
    let cancelled = false;
    loadImage("/shirt/front-print.png").then((img) => {
      if (!cancelled) setFrontTex(toTexture(makePocketPrint(img)));
    });
    loadImage("/shirt/back-print.png").then((img) => {
      if (!cancelled) setBackTex(toTexture(img));
    });
    return () => {
      cancelled = true;
    };
  }, [materials]);

  useFrame((_, delta) => {
    if (!group.current) return;
    const target = side === "back" ? Math.PI : 0;
    group.current.rotation.y +=
      (target - group.current.rotation.y) * Math.min(delta * 4, 1);
  });

  return (
    <group ref={group}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        position={[0, 0.06, 0]}
        scale={1.6}
      >
        {frontTex && (
          <Decal
            position={[-0.085, 0.05, 0.13]}
            rotation={[0, 0, 0]}
            scale={[0.104, 0.13, 0.08]}
            map={frontTex}
          />
        )}
        {backTex && (
          <Decal
            position={[0, 0.03, -0.1]}
            rotation={[0, Math.PI, 0]}
            scale={[0.26, 0.2676, 0.25]}
            map={backTex}
          />
        )}
      </mesh>
    </group>
  );
}

export default function Shirt({ side }: { side: "front" | "back" }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 1.9], fov: 30 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      shadows
      className="!touch-none"
    >
      <ambientLight intensity={0.7} />
      <hemisphereLight intensity={0.5} color="#ffffff" groundColor="#c9c9c4" />
      <directionalLight position={[2, 2.5, 3]} intensity={1.5} castShadow />
      <directionalLight position={[-2, 1, -3]} intensity={0.9} />
      <Float speed={1.6} rotationIntensity={0.12} floatIntensity={0.4}>
        <Tee side={side} />
      </Float>
      <ContactShadows position={[0, -0.55, 0]} opacity={0.35} scale={2.4} blur={2.4} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.7}
        maxPolarAngle={Math.PI / 1.7}
      />
    </Canvas>
  );
}

useGLTF.preload("/shirt/shirt_baked.glb");
