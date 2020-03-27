import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import NavigationLink from "./NavigationLink";
import InternalProvider from "gatsby-plugin-transition-link/context/InternalProvider";

describe('Given a NavigationLink component', () => {
    describe('when it is rendered', () => {
        test('it should render correctly with no a11y violations', async () => {
            const { container } = render(
                <InternalProvider>
                    <NavigationLink to={"/projects/beardinator"}>
                        {"NEXT.JS AND JWT"}
                    </NavigationLink>
                </InternalProvider>
            );
            const results = await axe(container);
            expect(results).toHaveNoViolations()
        });
    });
});
