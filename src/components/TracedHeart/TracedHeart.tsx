import * as React from "react";
import { StyledTracedHeart } from "./TracedHeart.styles";

const TracedHeart: React.FunctionComponent = () => (
    <StyledTracedHeart>
        <img src={"/heart.svg"} alt={"Heart Outlines"} data-id={"heart.svg"}/>
    </StyledTracedHeart>
);

export default TracedHeart
