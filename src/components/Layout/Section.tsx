import React from "react";
import styled from "styled-components";
import { SectionProps } from "../../types/props";

const StyledSection = styled.section<{ $noBottomBorder?: boolean }>`
    /* border-bottom: ${(props) => (props.$noBottomBorder ? "" : `1px solid ${document.body.style.color}`)}; */
    padding-bottom: 100px;
`;

const Section: React.FC<SectionProps> = ({ parentId, children, noBottomBorder }) => {
    return (
        <div id={parentId} style={{ padding: "100px 20px" }}>
            <StyledSection $noBottomBorder={noBottomBorder}>{children}</StyledSection>
        </div>
    );
};

export default Section;
