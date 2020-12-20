import React from "react";
//Import Icons
import calendar from "../media/icons/calendar.svg";
import devices from "../media/icons/devices.svg";
import poster from "../media/icons/poster.svg";
import portrait from "../media/icons/portrait.svg";
import previewPic2 from "../media/gallery/lakes/3.jpg";
//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <Services
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
        >
            <Description>
                <h2>
                    <span id="services-text">My Services</span>
                </h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={portrait} />
                            <h3>Photoshoots</h3>
                        </div>
                        <p>Private, personal photoshoots for any occasion.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={poster} />
                            <h3>Posters/Frames</h3>
                        </div>
                        <p>
                            Full-size, high resolution printed posters and
                            frames of my work.
                        </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={calendar} />
                            <h3>Calendars</h3>
                        </div>
                        <p>High quality calendars with stunning images.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={devices} />
                            <h3>Wallpapers</h3>
                        </div>
                        <p>High resolution wallpapers for any device.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img alt="preview pic" src={previewPic2} />
            </Image>
        </Services>
    );
};

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
    #services-text {
        font-size: 3rem;
    }
`;
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1300px) {
        justify-content: center;
    }
`;
const Card = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        img {
            height: 50px;
        }
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
    @media (max-width: 1300px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export default ServicesSection;
