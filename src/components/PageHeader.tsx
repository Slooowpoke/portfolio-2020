import * as React from "react";
import styled from "styled-components";

type Props = {
    text: string,
    align?: string
};

const StyledPageHeader = styled.h1`
    text-transform: uppercase;
    font-size: 2.5em;
    text-align: ${props => props.align ? props.align: "center"};
    -webkit-text-stroke: 1px #fff;
    font-weight: bold;
    font-family: Helvetica;
    white-space: nowrap;
    position: relative;
    margin-top: 1em;
    margin-bottom: 2em;
    .header{
        z-index: 5;
        position: relative;
    }
    span:not(.header){
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        -webkit-text-stroke: 1px #fff;
        color: #1D1D1D;
        width: 100%;
    }
`;

const PageHeader: React.FunctionComponent<Props> = ({ text, align }) => (
    <StyledPageHeader align={align}>
        <span className={"header"}>{text}</span>
        {[1, 2, 3].map(index => (
            <span style={{ top: `0.${3 * index}em`, zIndex: 3-index}}>
                {text}
            </span>
        ))}
    </StyledPageHeader>
);

export default PageHeader
