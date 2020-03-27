import React, { FunctionComponent } from "react";
import { ProjectPageDetailsProps } from "./ProjectPageDetails.models";
import ProjectHeader from "../Layout/ProjectHeader";
import OutlinedHeader from "../Layout/OutlinedHeader";
import SnippetText from "../Layout/SnippetText";
import ProjectDetailsLayout from "../ProjectDetailsLayout/ProjectDetailsLayout";

const ProjectPageDetails: FunctionComponent<ProjectPageDetailsProps> = ({
    title,
    date,
    tools,
    html,
    mobileImage,
    desktopImage,
    additionalImages = []
}) => (
    <>
        <div>
            <ProjectHeader>
                {title}
            </ProjectHeader>
        </div>

        <ProjectDetailsLayout thumb={mobileImage} desktopImage={desktopImage} images={[...additionalImages]}>
            <OutlinedHeader align={"right"}>
                {tools}
            </OutlinedHeader>
            <hr />
            <SnippetText dangerouslySetInnerHTML={{__html: html}} />
        </ProjectDetailsLayout>
    </>
);

export default ProjectPageDetails;
