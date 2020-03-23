import * as React from "react";
import styled from "styled-components";

const Header = styled.h1`
    font-size: ${props => props.fontSize ? props.fontSize : "2em"};
    color: #fff;
    font-weight: bold;
    font-family: Helvetica;
`;

export default Header;
