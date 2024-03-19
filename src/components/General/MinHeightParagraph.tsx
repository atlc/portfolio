import React from "react";
import { ParagraphProps } from "../../types/props";
import styled from "styled-components";

const StyledParagraph = styled.p`
    min-height: 7.2rem;
`;

const MinHeightParagraph: React.FC<ParagraphProps> = ({ text }) => {
    return <StyledParagraph>{text}</StyledParagraph>;
};

export default MinHeightParagraph;
