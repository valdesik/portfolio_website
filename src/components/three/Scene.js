import React, {useEffect, useRef} from 'react'
import {Canvas, useFrame} from "@react-three/fiber";
import * as THREE from 'three';
import { OrbitControls, useGLTF} from '@react-three/drei'


const Model = () => {
    const { scene, animations } = useGLTF('./three-models/robot2.glb');
    let mixer = new THREE.AnimationMixer(scene);

    const action = mixer.clipAction(animations[0]);
    // const animationIndex = Math.floor(Math.random() * animations.length);
    // const action = mixer.clipAction(animations[animationIndex]);

    action.play()
    useFrame((state, delta) => {
        mixer.update(delta);
    });
    return (
        <>
            <primitive
                object={scene}
                scale={0.15}
                rotation={[0, Math.PI/6, 0]}
                position={[0, -2, -2]}
                children-0-castShadow
            />
        </>
    );
};




const Scene = (props) => {
    return (
        <Canvas className={props.className}
                shadowMap
        >
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.8} position={[50, 50, 50]} castShadow />
            <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
            <Model />
            <OrbitControls
                enableZoom={false}
                enableDamping={false}
                minAzimuthAngle={-Math.PI / 24}
                maxAzimuthAngle={Math.PI / 24}
                minPolarAngle={Math.PI / 24}
                maxPolarAngle={Math.PI - Math.PI / 24}
            />
        </Canvas>
    );
};

export default Scene;