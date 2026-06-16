import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.45, 7.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xffffff, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ambient = new THREE.AmbientLight(0xffffff, 2.1);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 3.2);
    key.position.set(3.5, 4, 4);
    scene.add(key);

    const rim = new THREE.PointLight(0x5fe7dd, 38, 12);
    rim.position.set(-3, 1.5, 2.2);
    scene.add(rim);

    const warm = new THREE.PointLight(0xffb86b, 22, 10);
    warm.position.set(2.8, -1.6, 3);
    scene.add(warm);

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xe9fbff,
      roughness: 0.08,
      metalness: 0.02,
      transparent: true,
      opacity: 0.58,
      transmission: 0.78,
      thickness: 1.1,
      ior: 1.45,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      iridescence: 0.42,
      iridescenceIOR: 1.35,
      sheen: 0.4,
      sheenColor: new THREE.Color(0x79e8ff),
    });

    const blueMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x68a8ff,
      roughness: 0.2,
      metalness: 0.08,
      transparent: true,
      opacity: 0.42,
      clearcoat: 1,
      clearcoatRoughness: 0.07,
      iridescence: 0.22,
    });

    const coralMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xff8b71,
      roughness: 0.25,
      metalness: 0.03,
      transparent: true,
      opacity: 0.36,
      clearcoat: 0.8,
      clearcoatRoughness: 0.08,
    });

    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.08, 0.18, 180, 18),
      glassMaterial,
    );
    knot.position.set(1.55, 0.22, -0.55);
    knot.rotation.set(0.45, 0.15, 0.72);
    group.add(knot);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.25, 0.035, 14, 180),
      blueMaterial,
    );
    ring.position.set(0.95, -0.05, -0.9);
    ring.rotation.set(1.1, 0.2, -0.28);
    group.add(ring);

    const innerRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.52, 0.025, 12, 150),
      coralMaterial,
    );
    innerRing.position.set(1.12, -0.02, -0.75);
    innerRing.rotation.set(1.38, -0.08, 0.44);
    group.add(innerRing);

    const crystal = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.46, 1),
      glassMaterial.clone(),
    );
    crystal.position.set(-1.25, 0.92, -0.35);
    crystal.rotation.set(0.32, 0.58, 0.2);
    group.add(crystal);

    const capsule = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.18, 1.35, 10, 22),
      blueMaterial.clone(),
    );
    capsule.position.set(-1.88, -0.72, 0.18);
    capsule.rotation.set(1.2, 0.16, -0.55);
    group.add(capsule);

    const pointsGeometry = new THREE.BufferGeometry();
    const pointCount = 120;
    const positions = new Float32Array(pointCount * 3);
    for (let i = 0; i < pointCount; i += 1) {
      const radius = 1.3 + Math.random() * 2.4;
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius + 0.35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2.7;
      positions[i * 3 + 2] = Math.sin(angle) * radius - 1.2;
    }
    pointsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    const points = new THREE.Points(
      pointsGeometry,
      new THREE.PointsMaterial({
        color: 0x226bff,
        size: 0.025,
        transparent: true,
        opacity: 0.42,
      }),
    );
    group.add(points);

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove);

    const resize = () => {
      const width = mount.clientWidth || window.innerWidth;
      const height = mount.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      group.rotation.y = elapsed * 0.09 + pointer.x * 0.16;
      group.rotation.x = Math.sin(elapsed * 0.38) * 0.05 + pointer.y * 0.08;
      knot.rotation.x += 0.003;
      knot.rotation.y += 0.004;
      ring.rotation.z = elapsed * 0.08;
      innerRing.rotation.z = -elapsed * 0.11;
      crystal.rotation.y += 0.006;
      capsule.rotation.y -= 0.004;
      points.rotation.y = elapsed * 0.03;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", resize);
      mount.removeChild(renderer.domElement);
      pointsGeometry.dispose();
      knot.geometry.dispose();
      ring.geometry.dispose();
      innerRing.geometry.dispose();
      crystal.geometry.dispose();
      capsule.geometry.dispose();
      glassMaterial.dispose();
      blueMaterial.dispose();
      coralMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="hero-scene" aria-hidden="true" />;
}
