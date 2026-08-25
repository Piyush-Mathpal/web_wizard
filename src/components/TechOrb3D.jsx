import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const TechOrb3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let scene, camera, renderer, animationFrameId;
    let coreSphere, outerRing1, outerRing2, particleGroup;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // 1. Scene setup
    scene = new THREE.Scene();

    // 2. Camera setup
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    // 3. Renderer setup
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Geometries & Materials
    // Core glowing sphere
    const coreGeo = new THREE.IcosahedronGeometry(1.3, 3);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    coreSphere = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreSphere);

    // Inner glowing sphere
    const innerGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xec4899,
      transparent: true,
      opacity: 0.6,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerSphere);

    // Outer Cyber Ring 1
    const ring1Geo = new THREE.TorusGeometry(2.1, 0.03, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
    });
    outerRing1 = new THREE.Mesh(ring1Geo, ring1Mat);
    outerRing1.rotation.x = Math.PI / 3;
    scene.add(outerRing1);

    // Outer Cyber Ring 2
    const ring2Geo = new THREE.TorusGeometry(2.4, 0.025, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
    });
    outerRing2 = new THREE.Mesh(ring2Geo, ring2Mat);
    outerRing2.rotation.y = Math.PI / 4;
    scene.add(outerRing2);

    // Orbiting Cyber Particles
    particleGroup = new THREE.Group();
    const particleCount = 60;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f0ff);
    const magentaColor = new THREE.Color(0xec4899);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.6 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixColor = Math.random() > 0.5 ? cyanColor : magentaColor;
      colors[i * 3] = mixColor.r;
      colors[i * 3 + 1] = mixColor.g;
      colors[i * 3 + 2] = mixColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    particleGroup.add(particles);
    scene.add(particleGroup);

    // Mouse Interaction
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      targetRotationX = y * 0.5;
      targetRotationY = x * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize listener
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Render loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth rotations
      coreSphere.rotation.y = elapsedTime * 0.3;
      coreSphere.rotation.x = elapsedTime * 0.2;

      innerSphere.scale.setScalar(1 + Math.sin(elapsedTime * 3) * 0.08);

      outerRing1.rotation.z = elapsedTime * 0.4;
      outerRing1.rotation.y = elapsedTime * 0.2;

      outerRing2.rotation.x = -elapsedTime * 0.3;
      outerRing2.rotation.z = elapsedTime * 0.5;

      particleGroup.rotation.y = elapsedTime * 0.15;

      // Parallax smooth interpolation
      scene.rotation.x += (targetRotationX - scene.rotation.x) * 0.05;
      scene.rotation.y += (targetRotationY - scene.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full max-w-[420px] h-[340px] md:h-[400px] mx-auto select-none pointer-events-none">
      {/* Background radial cyan/magenta ambient glow */}
      <div className="absolute inset-0 bg-radial-gradient rounded-full blur-3xl opacity-60 animate-pulse-glow" />
      {/* Outer spinning energy circle ring */}
      <div className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full border border-cyan-500/20 border-dashed animate-ring-slow" />
      <div className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full border border-magenta-500/20 animate-ring-reverse" />
      
      {/* 3D WebGL Three.js Canvas Container */}
      <div ref={mountRef} className="relative z-10 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing" />
    </div>
  );
};
