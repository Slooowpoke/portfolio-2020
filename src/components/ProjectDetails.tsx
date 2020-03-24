import React from "react";
import styled from "styled-components";

const StyledProjectDetails = styled.div`
    .mobile {
        display: block;
        @media (min-width: 768px) {
            display: none;
        }
        .details{
            margin-right: 0;
            margin-left: auto;
        }
    }
    .details {
        max-width: 300px;
    }
    .gallery {
        margin-left: 4em;
    }
    .desktop {
        display: none;
        .details{
            margin-left: 4em;
        }
        @media (min-width: 768px) {
            flex-direction: column;
            display: flex;
            flex-direction: row;
        }
    }
    .thumb{
        margin-left: auto;
        margin-right: calc(-6em + 2vw);
        display: block;
    }
    .large-image{
        width: 100%;
    }
    .smaller-images{
        display: flex;
    }
    .small-image + .small-image{
        margin-left: 1em;
    }
`;

const ProjectDetails = ({ children, thumb, images }) => (
    <StyledProjectDetails>
        <div className={"mobile"}>
            <img src={thumb} className={"thumb"} />
            <div className={"details"}>
                {children}
            </div>
        </div>
        <div className={"desktop"}>
            <div className={"details"}>
                {children}
            </div>
            {images.length > 0 &&
                <div className={"gallery"}>
                    <img src={images[0]} className={"large-image"}/>
                    <div className={"smaller-images"}>
                        {images.length > 1 && images.slice(1, images.length).map((image, index) => (
                            <div className={"small-image"}>
                                <img src={image} key={index} />
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    </StyledProjectDetails>
);

export default ProjectDetails;
