import { useState } from 'react';
import Car from "../Car/Car";
import Container from "../Container/Container";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

export default function Carousel(){
    const [active, setActive] = useState(0);

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <ol 
                style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', listStyle: 'none', padding: 0, zIndex: 10, background: 'black'}}
            >
                <button 
                    onClick={() => setActive(active-1)}
                    style={{background: 'none', border: 'none', color: 'white', disabled: `${active<=0 ? 'true' : 'false'}`}}
                >
                    <FaAnglesLeft />
                </button>

                <li 
                    onClick={() => setActive(0)} 
                    style={{ fontSize: '15px', margin: '0 10px', cursor: 'pointer', color: `${active === 0 ? 'green' : 'white'}` }}
                >
                    1
                </li>

                <li 
                    onClick={() => setActive(1)} 
                    style={{ fontSize: '15px', margin: '0 10px', cursor: 'pointer', color: `${active === 1 ? 'green' : 'white'}` }}
                >
                    2
                </li>

                <li 
                    onClick={() => setActive(2)} 
                    style={{ fontSize: '15px', margin: '0 10px', cursor: 'pointer', color: `${active === 2 ? 'green' : 'white'}` }}
                >
                    3
                </li>

                <li 
                    onClick={() => setActive(3)} 
                    style={{ fontSize: '15px', margin: '0 10px', cursor: 'pointer', color: `${active === 3 ? 'green' : 'white'}` }}
                >
                    4
                </li>

                <li 
                    onClick={() => setActive(4)} 
                    style={{ fontSize: '15px', margin: '0 10px', cursor: 'pointer', color: `${active === 4 ? 'green' : 'white'}`}}
                >
                    5
                </li>

                <button 
                    onClick={() => setActive(active+1)}
                    style={{background: 'none', border: 'none', color: 'white', disabled: `${active>=4 ? 'true' : 'false'}`}}
                >
                    <FaAnglesRight />
                </button>
            </ol>
            
            <Container active={active}>
                <Car url='sports+car+model+fiver.glb'/>
                <Car url='/zenfullon(1).glb'/>
                <Car url='/LegendDriftCarBase.glb'/>
                <Car url='/car4.glb'/>
                <Car url='Nissan+Skyline.glb'/>
            </Container>
        </div>
    )
}