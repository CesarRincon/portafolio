import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/*
 * Polvo en suspensión: dos capas de partículas con mezcla aditiva y niebla,
 * más una cámara que se inclina siguiendo al puntero. Es el "aire" del hero.
 * Se carga con React.lazy para no pesar en el bundle inicial y se congela
 * cuando sale de pantalla.
 */

const makeSprite = () => {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.3, "rgba(255,255,255,0.6)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
};

const Layer = ({ count, size, opacity, color, speed, spread, sprite }) => {
  const points = useRef(null);

  const data = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocity = new Float32Array(count);
    const phase = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * spread[0];
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread[1];
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread[2];
      velocity[i] = speed * (0.35 + Math.random());
      phase[i] = Math.random() * Math.PI * 2;
    }
    return { positions, velocity, phase };
  }, [count, speed, spread]);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    const time = state.clock.elapsedTime;
    const attribute = points.current.geometry.attributes.position;
    const array = attribute.array;
    const half = spread[1] / 2;

    for (let i = 0; i < count; i += 1) {
      array[i * 3 + 1] += data.velocity[i] * dt;
      array[i * 3] += Math.sin(time * 0.35 + data.phase[i]) * 0.0022;
      if (array[i * 3 + 1] > half) array[i * 3 + 1] = -half;
    }
    attribute.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={data.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={sprite}
        size={size}
        color={color}
        transparent
        opacity={opacity}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
};

const Rig = ({ pointer }) => {
  useFrame((state) => {
    const camera = state.camera;
    camera.position.x += (pointer.current.x * 0.8 - camera.position.x) * 0.045;
    camera.position.y += (-pointer.current.y * 0.5 - camera.position.y) * 0.045;
    camera.lookAt(0, 0, 0);
  });
  return null;
};

const NEAR = [15, 9, 8];
const FAR = [15, 9, 6];

export default function DustField() {
  const host = useRef(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [running, setRunning] = useState(true);
  const sprite = useMemo(makeSprite, []);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const onMove = (event) => {
      pointer.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    if (fine) window.addEventListener("pointermove", onMove, { passive: true });

    const observer = new IntersectionObserver(([entry]) => setRunning(entry.isIntersecting), {
      threshold: 0.05,
    });
    if (host.current) observer.observe(host.current);

    return () => {
      window.removeEventListener("pointermove", onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={host} style={{ position: "absolute", inset: 0 }}>
      <Canvas
        frameloop={running ? "always" : "never"}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 6], fov: 55 }}
      >
        <fog attach="fog" args={["#0a0908", 3, 11]} />
        <Rig pointer={pointer} />
        <Layer count={900} size={0.05} opacity={0.5} color="#f5b544" speed={0.12} spread={NEAR} sprite={sprite} />
        <Layer count={140} size={0.18} opacity={0.22} color="#ffd9a0" speed={0.05} spread={FAR} sprite={sprite} />
      </Canvas>
    </div>
  );
}
