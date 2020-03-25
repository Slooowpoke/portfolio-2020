import React, { FunctionComponent } from "react";
import { FadeInOnLoadProps } from "./FadeInOnLoad.models";
import { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import StyledFadeInOnLoad from "./StyledFadeInOnLoad";

const FadeInOnLoad: FunctionComponent<FadeInOnLoadProps> = ({ children }) => {
    let ref = useRef(null);

    useEffect(() => {
        gsap
            .timeline({ delay: 0.4 })
            .to(ref.current, 0.6, { opacity: 1, ease: Power3.easeInOut })
    });

    return (
        <StyledFadeInOnLoad ref={ref}>
            {children}
        </StyledFadeInOnLoad>
    )
};

export default FadeInOnLoad
