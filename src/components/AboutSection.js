import React from "react";
import aboutPic from "../media/gallery/mountains/4.jpg";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            <span id="name">Karim Bounekhla</span>
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            Photographer based in Calgary, Canada.
                        </motion.h2>
                    </Hide>
                </motion.div>
                <Link to="/gallery">
                    <motion.button id="home-button" variants={fade}>
                        My Work
                    </motion.button>
                </Link>
            </Description>
            <Image>
                <motion.img
                    variants={photoAnim}
                    src={aboutPic}
                    alt="previewpic"
                />
            </Image>
            <Wave />
        </About>
    );
};

export default AboutSection;
