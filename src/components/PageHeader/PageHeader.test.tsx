import React from "react";
import { render } from "@testing-library/react";
import PageHeader from "./PageHeader";
import { axe } from "jest-axe";

describe('Given a PageHeader component', () => {
    describe('when it is rendered', () => {
        test('it should render correctly with no a11y violations', async () => {
            const { container } = render(
                <PageHeader text={"HOME"} />
            );
            const results = await axe(container);
            expect(results).toHaveNoViolations()
        });
    });
});
