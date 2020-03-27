import Img from "gatsby-image";
import React, { FunctionComponent } from "react";
import { StyledProjectDetails } from "./ProjectDetailsLayout.styles";
import { ProjectDetailsLayoutProps } from "./ProjectDetailsLayout.models";

const ProjectDetailsLayout: FunctionComponent<ProjectDetailsLayoutProps> = ({
    children,
    desktopImage,
    thumb,
    images
}) => (
    <StyledProjectDetails>
        <div className={"mobile"}>
            <div>
                <Img fixed={thumb.childImageSharp.fixed} className={"thumb"}/>
            </div>
            <div className={"details"}>
                {children}
            </div>
        </div>
        <div className={"desktop"}>
            <div className={"details"}>
                {children}
            </div>
            <div className={"gallery"}>
                <Img fixed={desktopImage.childImageSharp.fixed} className={"large-thumb"}/>
                <div className={"smaller-images"}>
                    {images.length > 0 && images.map((image, index) => (
                        <div className={"small-image"} key={index}>
                            <Img fixed={image.childImageSharp.fixed} className={"large-thumb"}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </StyledProjectDetails>
);

export default ProjectDetailsLayout;
