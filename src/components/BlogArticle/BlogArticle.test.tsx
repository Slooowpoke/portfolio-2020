import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { BlogArticle } from "./BlogArticle";

describe('Given a BlogArticle component', () => {
    describe('when it is rendered', () => {
        test('it should render correctly with no a11y violations', async () => {
            const { container } = render(
                <BlogArticle
                    title={"Blog Post"}
                    date={"20-20-2020"}
                    html={"Some generic HTML <p>Wow</p><strong>Test</strong>"}
                />
            );
            const results = await axe(container);
            expect(results).toHaveNoViolations()
        });
    });
});
