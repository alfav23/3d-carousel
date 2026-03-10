import Car from "../Car/Car";
import Container from "../Container/Container";
import { useState } from "react";

export default function Carousel(){
    
    const [ isActive, setIsActive ] = useState(0);
    return (
        <div id="carouselExampleIndicators" data-bs-ride="carousel" className="carousel slide">
            <ol className="carousel-indicators">
                <li onClick={() => setIsActive(0)} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"></li>
                <li onClick={() => setIsActive(1)} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li onClick={() => setIsActive(2)} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className={`active carousel-item`}>
                    <Container active={isActive}>
                        <Car />
                    </Container>
                </div>
                <div className={`carousel-item`}>
                    <Container active={isActive}>
                        <Car />
                    </Container>
                </div>
                <div className={`carousel-item`}>
                    <Container active={isActive}>
                        <Car />
                    </Container>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span> 
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}