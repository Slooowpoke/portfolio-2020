import { GatsbyImageProps } from "gatsby-image";

export interface ProjectPageDetailsProps {
    title: string,
    date: string,
    tools: string,
    html: string,
    mobileImage: {
        childImageSharp: GatsbyImageProps
    },
    desktopImage: {
        childImageSharp: GatsbyImageProps
    },
    additionalImages?: Array<{
        childImageSharp: GatsbyImageProps
    }>
}
