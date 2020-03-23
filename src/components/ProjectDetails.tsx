import React from "react";
import styled from "styled-components";

const StyledProjectDetails = styled.div`
    width: 300px;
    margin-left: 4em;
`;

const ProjectDetails = ({ children }) => (
    <StyledProjectDetails>
        {children}
    </StyledProjectDetails>
);

export default ProjectDetails;
