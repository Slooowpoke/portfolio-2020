import React from "react";
import { render } from "@testing-library/react";
import ProjectPageDetails from "./ProjectPageDetails";
import { axe } from "jest-axe";
import projectImages from "../../../__mocks__/projectImages";

describe('Given a ProjectPageDetails component', () => {
    describe('when it is rendered', () => {

        // TODO Figure out how to test images?
        const project = {
            title: "Project Title",
            date: "2017-07-02",
            tools: "TOOL AND TOOL",
            // Excerpt from a project, writing it manually would evade the output of markdown
            html: `
                "<p>A little joke website built for a friend at work. You can vote on beards, 
                shave his face and then submit your own suggestion.</p>
                <p>Built with Laravel and HTML5 Canvas.</p>
                <p><a href="http://beardinator.malicoxon.co.uk">VISIT WEBSITE</a></p>"
            `,
            mobileImage: projectImages.mobileImage,
            desktopImage: projectImages.desktopImage
        };

        test('it should render correctly with no a11y violations', async () => {
            const { container } = render(
                <ProjectPageDetails
                    {...project}
                />
            );
            const results = await axe(container);
            expect(results).toHaveNoViolations()
        });
    });
});
