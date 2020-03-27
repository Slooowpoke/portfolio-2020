import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import projectImages from "../../../__mocks__/projectImages";
import { PortfolioListLink } from "./PortfolioListLink";
import InternalProvider from "gatsby-plugin-transition-link/context/InternalProvider";

describe('Given a PageHeader component', () => {
    describe('when it is rendered', () => {
        test('it should render correctly with no a11y violations', async () => {
            const { container } = render(
                <InternalProvider>
                    <PortfolioListLink
                        to={"/pretend-url"}
                        projectDesktopImage={projectImages.desktopImage}
                        title={"Title"}
                    />
                </InternalProvider>
            );
            const results = await axe(container);
            expect(results).toHaveNoViolations()
        });
    });
});
