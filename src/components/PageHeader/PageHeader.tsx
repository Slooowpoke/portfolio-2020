import * as React from "react";
import { useRef } from "react";
import { Power3, TimelineLite } from "gsap";
import { useEffect } from "react";
import { PageHeaderProps } from "./PageHeader.models";
import { StyledPageHeader } from "./PageHeader.styles";

const PageHeader: React.FunctionComponent<PageHeaderProps> = ({ text, align }) => {
    let pageHeaderRef = useRef(null);
    let firstOutlineRef = useRef(null), secondOutlineRef = useRef(null);
    let timeline = new TimelineLite();

    useEffect(() => {
        timeline
            .to(pageHeaderRef.current, 0.8, { opacity: 1, top: 0, ease: Power3.easeInOut}, "first-anim")
            .to(firstOutlineRef.current, 1.0, { opacity: 1,  ease: Power3.easeInOut}, "first-anim")
            .to(secondOutlineRef.current, 1.0, { opacity: 1,  ease: Power3.easeInOut}, "first-anim")
    });

    return (
        <StyledPageHeader align={align}>
            <span className={"header"} ref={pageHeaderRef} aria-label={text}>{text}</span>
            <div data-testid={"outlines"}>
                <span style={{ top: `0.3em`, zIndex: 3}} ref={firstOutlineRef}>
                    {text}
                </span>
                <span style={{ top: `0.6em`, zIndex: 2}} ref={secondOutlineRef}>
                    {text}
                </span>
            </div>
        </StyledPageHeader>
    )
};

export default PageHeader
