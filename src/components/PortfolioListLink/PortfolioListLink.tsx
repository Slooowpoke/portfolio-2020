import React, { FunctionComponent } from "react";
import Img from "gatsby-image";
import PortfolioListLinkProps from "./PortfolioListLinkProps.models";
import { StyledPortfolioListLink } from "./PortfolioListLink.styles";

export const PortfolioListLink: FunctionComponent<PortfolioListLinkProps> = ({
    title,
    projectDesktopImage,
    to
}) => (
    <StyledPortfolioListLink to={to} align={"left"}>
        {title}
        <div className={"image"}>
            <Img fixed={projectDesktopImage.childImageSharp.fixed}/>
        </div>
    </StyledPortfolioListLink>
);

