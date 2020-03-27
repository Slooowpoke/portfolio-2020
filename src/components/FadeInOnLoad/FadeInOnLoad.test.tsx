import React from "react";
import { render } from "@testing-library/react";
import FadeInOnLoad from "./FadeInOnLoad";
import { axe } from "jest-axe";

describe('Given a FadeInOnLoad component', () => {
    describe('when it is rendered', () => {
        test('it should render correctly with no a11y violations', async () => {
            const { container } = render(<FadeInOnLoad>{"Test"}</FadeInOnLoad>);
            const results = await axe(container);
            expect(results).toHaveNoViolations()
        });
    });
});
