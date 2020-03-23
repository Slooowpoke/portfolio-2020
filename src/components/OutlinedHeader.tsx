import * as React from "react";
import styled from "styled-components";

const OutlinedHeader = styled.h3`
    font-size: 2em;
    text-align: ${props => props.align ? props.align: "center"};
    -webkit-text-stroke: 1px #fff;
    color: transparent;
    width: auto;
    font-weight: bold;
    font-family: Helvetica;
    margin: ${props => props.marginY ? props.marginY : "1em"} auto;
    transition: 0.2s ease all;
`;

export default OutlinedHeader;
