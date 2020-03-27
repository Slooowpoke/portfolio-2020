import React from "react";
import { render } from "@testing-library/react";
import Link from "./Link";
import InternalProvider from 'gatsby-plugin-transition-link/context/InternalProvider';
import { axe } from "jest-axe";

describe('Given a Link component', () => {
    describe('when it is rendered', () => {
        test('it should render correctly with no a11y violations', async () => {
            const { container } = render(
                <InternalProvider>
                    <Link to={"/"}>
                        {"Link"}
                    </Link>
                </InternalProvider>
            );
            const results = await axe(container);
            expect(results).toHaveNoViolations()
        });
    });
});
