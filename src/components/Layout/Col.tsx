import React from "react";
import styled from "styled-components";
import { ColProps } from "../../types/props";

const StyledCol = styled.div<{ $tenths?: number }>`
    min-width: 100%;
    margin: auto;
    margin-top: 10px;

    @media (min-width: 576px) {
        min-width: 100%;
    }

    @media (min-width: 768px) {
        min-width: ${(props) => (props.$tenths ? `${10 * props.$tenths}%` : "auto")};
        max-width: ${(props) => (props.$tenths ? `${10 * props.$tenths}%` : "auto")};
    }

    @media (min-width: 992px) {
        min-width: ${(props) => (props.$tenths ? `${10 * props.$tenths}%` : "auto")};
        max-width: ${(props) => (props.$tenths ? `${10 * props.$tenths}%` : "auto")};
    }

    @media (min-width: 1200px) {
        min-width: ${(props) => (props.$tenths ? `${10 * props.$tenths}%` : "auto")};
        max-width: ${(props) => (props.$tenths ? `${10 * props.$tenths}%` : "auto")};
    }
`;

const Col: React.FC<ColProps> = ({ children, tenths }) => {
    return <StyledCol $tenths={tenths}>{children}</StyledCol>;
};

export default Col;
