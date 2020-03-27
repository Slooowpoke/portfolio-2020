import * as React from "react";
import Link from "gatsby-plugin-transition-link/AniLink";
import { StyledNavigationLink } from "./NavigationLink.styles";
import { NavigationLinkProps } from "./NavigationLink.models";

const NavigationLink: React.FunctionComponent<NavigationLinkProps>
    = ({
           children,
           to,
           align = "center",
           marginY,
           className = ""
       }) => (
    <Link to={to}
          cover
          bg="#FF3939"
          duration={0.8}>
        <StyledNavigationLink align={align} marginY={marginY} className={className}>
            {children}
        </StyledNavigationLink>
    </Link>
);

export default NavigationLink
