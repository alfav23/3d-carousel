import { useEffect, useState } from 'react';
import Car from "../Car/Car";
import Container from "../Container/Container";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import Modal from '../Modal';
import Cars from  '../../data.json';

export default function Carousel(){
    const [cars, setCars] = useState([])
    const [active, setActive] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [carName, setCarName] = useState('');
    const [carDescription, setCarDescription] = useState('')
    const [ src, setSrc ] = useState('')

    //fetch json data
    const getCars = () => {
        fetch('/src/data.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setCars(myJson)
      });
  }

    //function to display modal
    const handleOpenModal = (active) => {
        getCars();
        setShowModal(true);
        Cars.forEach(car => {
            if(active === car.id) {
                setCarName(car.name);
                setCarDescription(car.description);
                setSrc(car.src);
            } else {
                setCarName('E24');
                setCarDescription('Default car');
                setSrc(null);
            }
        });     
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCarName('');
        setCarDescription('');
        setSrc(null)
    }


    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <ol 
                style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', listStyle: 'none', padding: 0, zIndex: 10, background: 'black', display: `${showModal ? 'none' : 'flex'}`}}
            >
                <button 
                    onClick={() => setActive(active-1)}
                    style={{background: 'none', border: 'none', color: 'white', display: `${active<=0 ? 'none' : 'block'}`}}
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
                    style={{background: 'none', border: 'none', color: 'white', display: `${active>=4 ? 'none' : 'block'}`}}
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