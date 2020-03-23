import * as React from "react";
import styled from "styled-components";



const StyledTracedHeart = styled.div`
    margin-top: 2em;
    img {
        margin: 0 auto;
        display: block;
    }
`;

const TracedHeart: React.FunctionComponent = () => (
    <StyledTracedHeart>
        <img src={"/heart.svg"} alt={"Heart Outlines"}/>
    </StyledTracedHeart>
);

export default TracedHeart
