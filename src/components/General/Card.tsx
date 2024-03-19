import React from "react";
import { CardProps } from "../../types/props";
import styled from "styled-components";
import useDarkMode from "../../hooks/useDarkMode";

const StyledCard = styled.article<{ $bg: string; $contrast: string }>`
    margin-bottom: 20px;
    border-radius: 12px;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    background-color: ${(props) => props.$bg};
    backdrop-filter: blur(2px) saturate(100%) brightness(130%) contrast(${(props) => props.$contrast});
    padding: 5px 20px;
    color: inherit;
`;

const Card: React.FC<CardProps> = ({ children }) => {
    const { isDark } = useDarkMode()!;

    const $bg = isDark ? `rgba(30, 41, 59, 0.75)` : `rgba(56,189,248, 0.1)`;
    const $contrast = isDark ? "85%" : "95%";

    return (
        <StyledCard $contrast={$contrast} $bg={$bg}>
            {children}
        </StyledCard>
    );
};

export default Card;
