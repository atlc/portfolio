import React from "react";
import styled from "styled-components";
import { RowProps } from "../../types/props";

const StyledRow = styled.div<{ $justify: string; $direction: string }>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${(props) => props.$direction};
    justify-content: ${(props) => props.$justify};
`;

const Row: React.FC<RowProps> = ({ children, layout, reverse }) => {
    const justify = layout || "center";
    const direction = reverse ? "row-reverse" : "row";

    return (
        <StyledRow $justify={justify} $direction={direction}>
            {children}
        </StyledRow>
    );
};

export default Row;
