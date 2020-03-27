import styled from "styled-components";

export const StyledProjectDetails = styled.div`
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
        margin-right: calc(-4em + 2vw);
        display: block !important;
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
