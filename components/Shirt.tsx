"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Decal, OrbitControls, Float, ContactShadows } from "@react-three/drei";

const SHIRT_IVORY = "#efe7d2";

/** Remove the cream paper background from the scanned print by
 *  flood-filling transparency in from the borders (keeps cream
 *  pixels *inside* the artwork, like the cornhole boards). */
function keyOutBackground(img: HTMLImageElement): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = img.naturalWidth;
  c.height = img.naturalHeight;
  const ctx = c.getContext("2d")!;
  ctx.drawImage(img, 0, 0);
  const { width, height } = c;
  const imageData = ctx.getImageData(0, 0, width, height);
  const d = imageData.data;

  const isBg = (idx: number) => {
    const r = d[idx], g = d[idx + 1], b = d[idx + 2];
    // distance to the cream paper tone (247, 240, 221)
    return (
      Math.abs(r - 247) < 24 && Math.abs(g - 240) < 26 && Math.abs(b - 221) < 34
    );
  };

  const visited = new Uint8Array(width * height);
  const stack: number[] = [];
  for (let x = 0; x < width; x++) {
    stack.push(x, x + (height - 1) * width);
  }
  for (let y = 0; y < height; y++) {
    stack.push(y * width, width - 1 + y * width);
  }
  while (stack.length) {
    const p = stack.pop()!;
    if (visited[p]) continue;
    visited[p] = 1;
    if (!isBg(p * 4)) continue;
    d[p * 4 + 3] = 0;
    const x = p % width;
    const y = (p / width) | 0;
    if (x > 0) stack.push(p - 1);
    if (x < width - 1) stack.push(p + 1);
    if (y > 0) stack.push(p - width);
    if (y < height - 1) stack.push(p + width);
  }
  ctx.putImageData(imageData, 0, 0);
  return c;
}

/** Small red ΦΚΨ chest print, drawn on a canvas. */
function makeChestPrint(): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 256;
  const ctx = c.getContext("2d")!;
  ctx.clearRect(0, 0, 512, 256);
  ctx.fillStyle = "#bf1e2e";
  ctx.font = "600 130px Georgia, 'Times New Roman', serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("ΦΚΨ", 256, 138);
  return c;
}

function toTexture(canvas: HTMLCanvasElement): THREE.CanvasTexture {
  const tex = new THREE.CanvasTexture(canvas);
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
  const [backTex, setBackTex] = useState<THREE.CanvasTexture | null>(null);
  const [frontTex, setFrontTex] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    materials.lambert1.color.set(SHIRT_IVORY);
    setFrontTex(toTexture(makeChestPrint()));
    const img = new Image();
    img.onload = () => setBackTex(toTexture(keyOutBackground(img)));
    img.src = "/shirt/print-back.png";
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
            position={[-0.085, 0.09, 0.13]}
            rotation={[0, 0, 0]}
            scale={[0.13, 0.065, 0.08]}
            map={frontTex}
          />
        )}
        {backTex && (
          <Decal
            position={[0, 0.01, -0.1]}
            rotation={[0, Math.PI, 0]}
            scale={[0.29, 0.3625, 0.25]}
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
      <ambientLight intensity={0.75} />
      <hemisphereLight intensity={0.5} color="#ffffff" groundColor="#d9cdb2" />
      <directionalLight position={[2, 2.5, 3]} intensity={1.6} castShadow />
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
