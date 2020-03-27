import { GatsbyImageProps } from "gatsby-image";

export default interface PortfolioListLinkProps{
    title: string,
    projectDesktopImage: {
        childImageSharp: GatsbyImageProps
    },
    to: string
}
