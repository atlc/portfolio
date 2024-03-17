import React from "react";
import styled from "styled-components";
import { SectionProps } from "../types";

const StyledSection = styled.section``;

const Section: React.FC<SectionProps> = ({ parentId, children }) => {
    return (
        <div id={parentId} style={{ paddingBottom: "20px" }}>
            <StyledSection>{children}</StyledSection>
        </div>
    );
};

export default Section;
