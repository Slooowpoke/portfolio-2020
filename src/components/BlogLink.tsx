import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

type Props = {
    children: React.ReactNode,
    to: string,
};

const StyledBlogLink = styled.span`
    color: #fff;
    font-weight: bold;
    font-family: neue-haas-grotesk-display, sans-serif;
    color: #FBFF39;
    text-decoration: underline;
    margin: 0.8em auto;
`;

const BlogLink: React.FunctionComponent<Props> = ({ children, to }) => (
    <Link to={to}>
        <StyledBlogLink>
            {children}
        </StyledBlogLink>
    </Link>
);

export default BlogLink
