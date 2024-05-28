import React from 'react';
import planeScene from '../assets/3d/plane.glb'
import {useGLTF} from "@react-three/drei";

const Plane = () => {
    const plane = useGLTF(planeScene)
    return (
        <mesh>
            <primitive object={plane.scene}/>
        </mesh>
    );
};

export default Plane;