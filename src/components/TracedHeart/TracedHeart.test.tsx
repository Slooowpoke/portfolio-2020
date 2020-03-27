import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import TracedHeart from "./TracedHeart";

describe('Given a TraceHeart component', () => {
    describe('when it is rendered', () => {
        test('it should render correctly with no a11y viloations', async () => {
            const { container } = render(
                <TracedHeart />
            );
            const results = await axe(container);
            expect(results).toHaveNoViolations()
        });
    });
});
