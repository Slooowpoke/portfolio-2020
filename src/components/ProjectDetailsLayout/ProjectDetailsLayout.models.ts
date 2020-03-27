import React from "react";
import { GatsbyImageProps } from "gatsby-image";

export interface ProjectDetailsLayoutProps {
    children: React.ReactNode,
    thumb: {
        childImageSharp: GatsbyImageProps
    },
    desktopImage: {
        childImageSharp: GatsbyImageProps
    },
    images: Array<{
        childImageSharp: GatsbyImageProps
    }>,
}
