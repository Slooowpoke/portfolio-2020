import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import StandardLink from "../Link/Link";
import { StyledLink } from "../Link/Link.styles";

const SnippetText = styled.p`
    font-size: 1.2em;
    color: #fff;
    font-weight: 100;
    font-family: neue-haas-grotesk-display, sans-serif;
    margin: 0.8em auto;
    a { 
        color: #fff;
        font-weight: bold;
        font-family: neue-haas-grotesk-display, sans-serif;
        color: #FBFF39;
        text-decoration: underline;
        margin: 0.8em auto;
        transition: 0.2s ease all;
        background-size: 200% 200%;
        transition: background-position 0.2 ease;
        background-image: linear-gradient(to left, #fff 50%, transparent 0);
        background-position: left;
        display: inline-block;
        padding: 0 2px;
        &:hover{
            color: #111111;
            background-position: right;
        }
    }
`;

export default SnippetText
