import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CollectionsData from "../CollectionsData";
import { SRLWrapper } from "simple-react-lightbox";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const Collection = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [collections, setCollections] = useState(CollectionsData);
    const [collection, setCollection] = useState(null);

    useEffect(() => {
        const currentCollection = collections.filter(
            (stateCollection) => stateCollection.url === url
        );
        setCollection(currentCollection[0]);
    }, [collections, url]);

    return (
        <div>
            {collection && (
                <StyledCollection
                    exit="exit"
                    variants={pageAnimation}
                    initial="hidden"
                    animate="show"
                >
                    <Title>
                        <h2>{collection.title}</h2>
                        <img
                            id={collection.title}
                            src={collection.preview}
                            alt={`${collection.title} preview`}
                        />
                    </Title>
                    <SRLWrapper>
                        <div className="collection">
                            {collection.images.map((image) => {
                                return (
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        key={image.id}
                                    />
                                );
                            })}
                        </div>
                    </SRLWrapper>
                    <ScrollTop />
                </StyledCollection>
            )}
        </div>
    );
};

const StyledCollection = styled(motion.div)`
    color: white;
    margin-bottom: 20vh;
    .collection {
        max-width: 90vw;
        margin: 5vh auto 5vh auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 3% 3%;
        img {
            max-width: 100%;
            cursor: pointer;
            border-radius: 1rem;
            :hover {
                box-shadow: 0 0 30px rgba(197, 197, 197, 0.1);
            }
        }
    }
    @media screen and (max-width: 768px) {
        .collection {
            grid-template-columns: 1fr;
            gap: 1% 0%;
        }
        margin-bottom: 35vh;
    }
`;

const Title = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
    #Cities {
        object-position: 50% 80%;
    }
    #Mountains {
        object-position: 50% 55%;
    }
    #Lakes {
        object-position: 50% 40%;
    }
    #International {
        object-position: 50% 50%;
    }
    #Winter {
        object-position: 50% 40%;
    }
`;

export default Collection;
