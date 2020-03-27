import React, { FunctionComponent } from "react";
import NavigationLink from "../NavigationLink/NavigationLink";
import Subtitle from "../Layout/Subtitle";
import SnippetText from "../Layout/SnippetText";
import Link from "../Link/Link";
import { StyledBlogSnippet } from "./BlogSnippet.styles";
import { BlogSnippetProps } from "./BlogSnippet.models";

const BlogSnippet: FunctionComponent<BlogSnippetProps> = ({
    title,
    date,
    excerpt,
    to
}) => (
    <>
        <StyledBlogSnippet>
            <NavigationLink to={to} align={"left"}  marginY={"0.5em"}>
                {title}
            </NavigationLink>
            <Subtitle>
                {date}
            </Subtitle>
            <SnippetText>
                {excerpt}
            </SnippetText>
            <Link to={to}>
                {"READ MORE"}
            </Link>
        </StyledBlogSnippet>
        <hr />
    </>
);

export default BlogSnippet;
