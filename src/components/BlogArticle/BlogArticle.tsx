import React, { FunctionComponent } from "react";
import { BlogArticleProps } from "./BlogArticle.models";
import { StyledBlogArticle } from "./BlogArticle.styles";

export const BlogArticle: FunctionComponent<BlogArticleProps> = ({
    html,
    date
}) => (
    <StyledBlogArticle>
        <article>
            <h2>
                {date}
            </h2>
        </article>
        <article dangerouslySetInnerHTML={{__html: html}}/>
    </StyledBlogArticle>
);
