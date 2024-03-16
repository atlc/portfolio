import React from "react";
import styled from "styled-components";
import { ColProps } from "../../types";

const StyledCol = styled.div<{ $tenths: number }>`
    min-width: 100%;

    @media (min-width: 576px) {
        min-width: 90%;
    }

    @media (min-width: 768px) {
        min-width: 80%;
    }

    @media (min-width: 992px) {
        min-width: ${(props) => 8 * props.$tenths}%;
    }

    @media (min-width: 1200px) {
        min-width: ${(props) => 10 * props.$tenths}%;
    }
`;

const Col: React.FC<ColProps> = ({ children, tenths = 5 }) => {
    return <StyledCol $tenths={tenths}>{children}</StyledCol>;
};

export default Col;
