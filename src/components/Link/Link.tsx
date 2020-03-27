import * as React from "react";
import Link from 'gatsby-plugin-transition-link'
import { LinkProps } from "./Link.models";
import { StyledLink } from "./Link.styles";

const StandardLink: React.FunctionComponent<LinkProps> = ({ children, to }) => (
    <Link to={to}>
        <StyledLink>
            {children}
        </StyledLink>
    </Link>
);

export default StandardLink
