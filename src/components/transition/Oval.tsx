import React from "react";
import styled from "styled-components";

const StyledOval = styled.div`
    position: fixed;
    top: ${props => `calc(20% - (${props.initialHeight}vh / 4))`};
    border: 2px solid #fff;
    width: ${props => `${props.initialWidth}vw`};
    height: ${props => `${props.initialHeight}vh`};
    border-radius: 100%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    background: #121212;
`;

export default StyledOval;
