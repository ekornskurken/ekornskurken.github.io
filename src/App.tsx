import React, { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import Model from './Scene';
import {
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Stars,
} from '@react-three/drei';

function App() {
  return (
    <>
      <div className="bg" />
      <Canvas dpr={[1.5, 2]} linear shadows>
        {/* <fog attach="fog" args={['#272730', 16, 30]} /> */}
        <ambientLight intensity={0.75} />
        <PerspectiveCamera makeDefault position={[150, 0, 200]} fov={75}>
          <pointLight intensity={1} position={[51.64, 0, -129.1]} />
          <spotLight
            castShadow
            intensity={2.25}
            angle={0.2}
            penumbra={1}
            position={[-25, 20, -15]}
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls
          autoRotate={true}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stars radius={500} depth={50} count={1000} factor={10} />
      </Canvas>
      <div className="layer" />
      <Loader />
      <h1>
        starberry <span style={{ fontSize: '0.4em' }}>by</span>
        <br />
        <span>nic</span>
      </h1>
      <a
        href="mailto:nic@starberry.no"
        className="sub-header"
        children="nic@starberry.no"
        target="_blank"
        rel="noreferrer"
      />
      <a
        href="https://github.com/czd"
        className="bottom-left"
        children="github/czd"
        target="_blank"
        rel="noreferrer"
      />
      <a
        href="https://sketchfab.com/bastienBGR"
        className="bottom-right"
        children="Art by Bastien Genbrugge"
        target="_blank"
        rel="noreferrer"
      />
      {/* <a href="https://github.com/pmndrs/react-three-fiber" className="bottom-left" children="@react-three/fiber" /> */}
    </>
  );
}

export default App;
