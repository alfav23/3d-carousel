import { useState } from 'react';
import Car from "../Car/Car";
import Container from "../Container/Container";

export default function Carousel(){
    const [active, setActive] = useState(0);

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <ol style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', listStyle: 'none', padding: 0, zIndex: 10 }}>
                <li onClick={() => setActive(0)} style={{ width: '15px', height: '15px', borderRadius: '50%', background: active === 0 ? 'white' : 'black', margin: '0 10px', cursor: 'pointer', border: `2px solid ${active === 0 ? 'black' : 'white'}` }}></li>
                <li onClick={() => setActive(1)} style={{ width: '15px', height: '15px', borderRadius: '50%', background: active === 1 ? 'white' : 'black', margin: '0 10px', cursor: 'pointer', border: `2px solid ${active === 1 ? 'black' : 'white'}` }}></li>
                <li onClick={() => setActive(2)} style={{ width: '15px', height: '15px', borderRadius: '50%', background: active === 2 ? 'white' : 'black', margin: '0 10px', cursor: 'pointer', border: `2px solid ${active === 2 ? 'black' : 'white'}` }}></li>
            </ol>
            <Container active={active}>
                <Car />
                <Car />
                <Car />
            </Container>
        </div>
    )
}