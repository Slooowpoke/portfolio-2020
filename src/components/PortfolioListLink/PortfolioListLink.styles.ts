import NavigationLink from "../NavigationLink/NavigationLink";
import styled from "styled-components";

export const StyledPortfolioListLink = styled(NavigationLink)`
    margin:0 auto;
    padding: 1em 0;
    text-transform: uppercase;
    .image {
        position: fixed;
        top: 2em;
        right: 1em;
        transition: 0.2 ease all;
        z-index: -1;
        display: none;
    }
    @media (min-width: 1240px) {
        &:hover{
            .image {
                display: block;
            }
        }
    }
`;
