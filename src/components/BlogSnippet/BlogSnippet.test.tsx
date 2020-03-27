import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import BlogSnippet from "./BlogSnippet";
import InternalProvider from "gatsby-plugin-transition-link/context/InternalProvider";

describe('Given a BlogSnippet component', () => {
    describe('when it is rendered', () => {
        test('it should render correctly with no a11y violations', async () => {
            const { container } = render(
                <InternalProvider>
                    <BlogSnippet
                        title={"Blog Post"}
                        to={"/blog-post"}
                        date={"20-20-2020"}
                        excerpt={"This is a blog snippet and a piece of text that is a snippet of the original blog"}
                    />
                </InternalProvider>
            );
            const results = await axe(container);
            expect(results).toHaveNoViolations()
        });
    });
});
