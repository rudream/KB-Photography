import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import mountainsPreview from "../media/gallery/preview-pics/mountains.jpg";
import lakesPreview from "../media/gallery/preview-pics/lakes.jpg";
import internationalPreview from "../media/gallery/preview-pics/international.jpg";
import winterPreview from "../media/gallery/preview-pics/winter.jpg";
import citiesPreview from "../media/gallery/preview-pics/cities.jpg";
//Animations
import { motion } from "framer-motion";
import {
    sliderContainer,
    slider,
    pageAnimation,
    fade,
    photoAnim,
    lineAnim,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const Gallery = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();
    const [element4, controls4] = useScroll();
    return (
        <Work
            style={{ background: "#fff" }}
            exit="exit"
            variants={pageAnimation}
            initial="hidden"
            animate="show"
        >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>

            <Collection>
                <motion.h2 variants={fade}>Mountains</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/gallery/mountains">
                    <Hide>
                        <motion.img
                            variants={photoAnim}
                            src={mountainsPreview}
                            alt="mountains"
                        />
                    </Hide>
                </Link>
            </Collection>

            <Collection
                ref={element}
                variants={fade}
                animate={controls}
                initial="hidden"
            >
                <h2>Lakes</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/gallery/lakes">
                    <img id="lakes-preview" src={lakesPreview} alt="lakes" />
                </Link>
            </Collection>

            <Collection
                ref={element2}
                variants={fade}
                animate={controls2}
                initial="hidden"
            >
                <h2>International</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/gallery/international">
                    <img
                        id="international-preview"
                        src={internationalPreview}
                        alt="international"
                    />
                </Link>
            </Collection>

            <Collection
                ref={element3}
                variants={fade}
                animate={controls3}
                initial="hidden"
            >
                <h2>Winter</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/gallery/winter">
                    <img id="winter-preview" src={winterPreview} alt="winter" />
                </Link>
            </Collection>
            <Collection
                ref={element4}
                variants={fade}
                animate={controls4}
                initial="hidden"
            >
                <h2>Cities</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/gallery/cities">
                    <img id="cities-preview" src={citiesPreview} alt="cities" />
                </Link>
            </Collection>
            <ScrollTop />
        </Work>
    );
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    @media (max-width: 1300px) {
        padding: 2rem 2rem;
    }

    h2 {
        padding: 1rem 0rem;
    }
`;
const Collection = styled(motion.div)`
    padding-bottom: 10rem;

    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
    #international-preview {
        object-position: 50% 55%;
    }
    #lakes-preview {
        object-position: 50% 40%;
    }
    #winter-preview {
        object-position: 50% 40%;
    }
    #cities-preview {
        object-position: 50% 85%;
    }
`;
const Hide = styled.div`
    overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;
const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

export default Gallery;
