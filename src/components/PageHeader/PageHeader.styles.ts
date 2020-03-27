import React from "react";
import styled from "styled-components";

export const StyledPageHeader = styled.h1`
    text-transform: uppercase;
    font-size: 2.5em;
    text-align: ${props => props.align ? props.align: "center"};
    -webkit-text-stroke: 1px #fff;
    font-weight: bold;
    font-family: neue-haas-grotesk-display, sans-serif;
    white-space: nowrap;
    position: relative;
    margin-top: 1em;
    margin-bottom: 2em;
    .header{
        z-index: 5;
        position: relative;
        opacity: 0;
        top: 1em;
    }
    span:not(.header){
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        -webkit-text-stroke: 1px #fff;
        color: #1D1D1D;
        width: 100%;
        opacity: 0;
    }
`;
