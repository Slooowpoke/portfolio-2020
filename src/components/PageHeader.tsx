import * as React from "react";
import styled from "styled-components";
import {useEffect, useRef} from "react";
import {Power3, TimelineLite} from "gsap";

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

const PageHeader: React.FunctionComponent<Props> = ({ text, align }) => {
    let pageHeaderRef = useRef(null);
    let firstOutlineRef = useRef(null), secondOutlineRef = useRef(null);
    let timeline = new TimelineLite();

    useEffect(() => {
        timeline
            .to(pageHeaderRef, 0.8, { opacity: 1, top: 0, ease: Power3.easeInOut}, "first-anim")
            .to(firstOutlineRef, 1.0, { opacity: 1,  ease: Power3.easeInOut}, "first-anim")
            .to(secondOutlineRef, 1.0, { opacity: 1,  ease: Power3.easeInOut}, "first-anim")
    });

    return (
        <StyledPageHeader align={align}>
            <span className={"header"} ref={el => pageHeaderRef = el}>{text}</span>
            <span style={{ top: `0.3em`, zIndex: 3}} ref={el => firstOutlineRef = el}>
                {text}
            </span>
            <span style={{ top: `0.6em`, zIndex: 2}} ref={el => secondOutlineRef = el}>
                {text}
            </span>
        </StyledPageHeader>
    )
};

export default PageHeader
