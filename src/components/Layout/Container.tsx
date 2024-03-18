import React from "react";
import { ContainerProps } from "../../types/props";
import styled from "styled-components";

const StyledContainer = styled.div<{ $fluid?: boolean }>`
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 576px) {
        max-width: ${(props) => (props.$fluid ? "100%" : "540px")};
    }

    @media (min-width: 768px) {
        max-width: ${(props) => (props.$fluid ? "100%" : "720px")};
    }

    @media (min-width: 992px) {
        max-width: ${(props) => (props.$fluid ? "100%" : "960px")};
    }

    @media (min-width: 1200px) {
        max-width: ${(props) => (props.$fluid ? "100%" : "1140px")};
    }

    @media (min-width: 1400px) {
        max-width: ${(props) => (props.$fluid ? "100%" : "1320px")};
    }
`;

const Container: React.FC<ContainerProps> = ({ children, fluid }) => {
    return <StyledContainer $fluid={fluid}>{children}</StyledContainer>;
};

export default Container;
