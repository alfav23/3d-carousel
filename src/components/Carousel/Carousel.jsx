import { useState } from 'react';
import Car from "../Car/Car";
import Container from "../Container/Container";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import Modal from '../Modal';

export default function Carousel(){
    const [active, setActive] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [carName, setCarName] = useState('');
    const [carDescription, setCarDescription] = useState('')
    const [ src, setSrc ] = useState('')

    //function to display modal
    const handleOpenModal = (active) => {
        setShowModal(true);
        if(active === 0){
            setCarName('Sports Car');
            setCarDescription('A black muscle car')
            setSrc('/https://www.cgtrader.com/free-3d-models/vehicle/other/stylized-muscular-car')
        }
        if(active === 1){
            setCarName('Maruti Suzuki Zen Custom');
            setCarDescription('A red hatchback')
            setSrc('/https://www.cgtrader.com/free-3d-models/car/sport-car/maruti-suzuki-zen-custom')
        }
        if(active === 2){
            setCarName('Legend Drift Car');
            setCarDescription('Custom drift car with dragon design. No wheels. Good luck.')
            setSrc('/https://www.cgtrader.com/free-3d-models/car/racing-car/legend-drift-car-legendary-80s-coupe-low-poly-pbr-game-ready')
        }
        if(active === 3){
            setCarName('Legend Drift Car');
            setCarDescription('Custom drift car with dragon design')
            setSrc('/https://www.cgtrader.com/free-3d-models/car/racing-car/legend-drift-car-legendary-80s-coupe-low-poly-pbr-game-ready')
        }
        if(active === 4){
            setCarName('Nissan Skyline');
            setCarDescription('White with blue accents')
            setSrc('/https://www.cgtrader.com/free-3d-models/car/racing-car/nissan-skyline-low-poly-game-ready-3d-model-low-poly-3d-model')
        } else {
            setCarName('E24');
            setCarDescription('Default car');
            setSrc('');
        }
        
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setCarName('');
        setCarDescription('');
    }


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
            <button onClick={(e) => handleOpenModal(e, active)} style={{position: 'absolute', top: '50%', left: '50%', padding: 0, zIndex: 10, background: 'none', border: '2px solid green', width: '100px', height: '100px', cursor: 'pointer'}}></button>
            <Container active={active}>
                <Car url='sports+car+model+fiver.glb'/>
                <Car url='/zenfullon(1).glb'/>
                <Car url='/LegendDriftCarBase.glb'/>
                <Car url='/car4.glb'/>
                <Car url='Nissan+Skyline.glb'/>
            </Container>
            <Modal show={showModal} onClose={handleCloseModal} name = {carName} description={carDescription} src={src}/>
        </div>
    )
}