import * as React from "react";
import styled from "styled-components";
import { TimelineLite, Power3, Back } from "gsap";
import Oval from "./transition/Oval";
import {useEffect, useRef} from "react";

const StyledTransitionAnimation = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 20;
    .backdrop {
        width: 100%;
        height: 100vh;
        background: #121212;
    }
    .circle {
        background: #121212;
        border-radius: 100%;
        border: 2px solid #fff;
        position: fixed;
        z-index: 21;
        top: 30%;
        left: 50%;
        opacity: 1;
        transform: translate(-50%, -50%);
    }
`;

const TransitionAnimation = ({ transitionStatus }) => {
    let backdropRef = useRef(null), circleRef = useRef(null);

    const ovals = [];
    let initialOvalWidth = 30, initialOvalHeight = 90;
    let totalOvalSizeIncrement = 30;
    let totalOvals = 4;
    for(let index = 0 ; index < totalOvals; index++){
        ovals.push({
            initialWidth: initialOvalWidth + (totalOvalSizeIncrement * index),
            initialHeight: initialOvalHeight + (totalOvalSizeIncrement * index),
            ref: useRef(null)
        });
    }

    let timeline = new TimelineLite();

    useEffect(() => {
        console.log(transitionStatus);
        if (transitionStatus === "entered" || transitionStatus === "entering"){
            timeline
                .to(circleRef, 0.8, { width: "40px", height: "40px",  ease: Back.easeInOut})
                .to(circleRef, 0.8, { opacity: 0, width: "0", height: "0",  ease: Back.easeInOut})
                .to(backdropRef, 0.5, { opacity: 0,  ease: Power3.easeIn});
        }

        //
        // ovals.map((oval, index) => {
        //     timeline.to(oval.ref, 0.1, { opacity: 1, ease: Back.easeIn})
        // });
        // ovals.map((oval, index) => {
        //     timeline.to(oval.ref, 0.1, { opacity: 0, ease: Back.easeIn})
        // });

        // timeline
        //     .to(circleRef, 0.2, { opacity: 0, width: "0", height: "0",  ease: Back.easeInOut})
        //     .to(backdropRef, 0.2, { opacity: 0,  ease: Power3.easeIn})
    });

    return (
        <StyledTransitionAnimation>
            <div className={"backdrop"} ref={el => backdropRef = el}/>
            <div className={"circle"} ref={el => circleRef = el}/>
            {ovals.map((oval, index) => (
                <Oval style={{zIndex: ovals.length - index}}
                      initialWidth={oval.initialWidth}
                      initialHeight={oval.initialHeight}
                      ref={el => oval.ref = el}
                />
            ))}

            {/*<Oval initialWidth="50vw" initialHeight={"120vh"}/>*/}
            {/*<Oval initialWidth="80vw" initialHeight={"150vh"}/>*/}
            {/*<Oval initialWidth="110vw" initialHeight={"180vh"}/>*/}
            {/*<Oval initialWidth="140vw" initialHeight={"220vh"}/>*/}
            {/*<div className={"ovalBase"} ref={el => ovalRef = el} />*/}
        </StyledTransitionAnimation>
    )
};

export default TransitionAnimation;