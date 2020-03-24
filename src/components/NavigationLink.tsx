import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

type Props = {
    children: React.ReactNode,
    to: string,
    align?: string,
    marginY?: string
};

const StyledNavigationLink = styled.div`
    font-size: 2em;
    text-align: ${props => props.align ? props.align: "center"};
    -webkit-text-stroke: 1px #fff;
    color: transparent;
    width: auto;
    font-weight: bold;
    font-family: neue-haas-grotesk-display, sans-serif;
    margin: ${props => props.marginY ? props.marginY : "1em"} auto;
    transition: 0.2s ease all;
    cursor: pointer;
    position: relative;
    line-height: 1.5;
    &:hover{
        color: #fff;
        &:before{
            content: "";
            width: 1em;
            height: 3px;
            background-color: #FF3939;
            display: block;
            top: 50%;
            position: absolute;
            left:0;
        }
        ${props => {
            if(props.align === "left") {
                return `
                    padding-left: 1.5em;
                `;
            } else if (props.align === "center") {
                return `
                    &:after{
                        content: "";
                        width: 10%;
                        height: 3px;
                        background-color: #FF3939;
                        display: block;
                        top: 50%;
                        position: absolute;
                        right: 0;
                    }
                `;
            }
        }};
    }
`;

const NavigationLink: React.FunctionComponent<Props> = ({ children, to, align = "center",  marginY }) => (
    <Link to={to}>
        <StyledNavigationLink align={align} marginY={marginY}>
            {children}
        </StyledNavigationLink>
    </Link>
);

export default NavigationLink
