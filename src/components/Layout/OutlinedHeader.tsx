import * as React from "react";
import styled from "styled-components";

const OutlinedHeader = styled.h2`
    font-size: 2em;
    text-align: ${props => props.align ? props.align: "center"};
    -webkit-text-stroke: 1px #fff;
    color: transparent;
    width: auto;
    font-weight: bold;
    font-family: neue-haas-grotesk-display, sans-serif;
    margin: ${props => props.marginY ? props.marginY : "1em"} auto;
    transition: 0.2s ease all;
`;

export default OutlinedHeader;
