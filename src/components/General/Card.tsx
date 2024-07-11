import React from "react";
import { CardProps } from "../../types/props";
import styled from "styled-components";
import useDarkMode from "../../hooks/useDarkMode";

const StyledCard = styled.article<{ $bg: string; $contrast: string; $border: string; $borderRadius: string; $shadow: string }>`
    margin-bottom: 20px;
    border-radius: 12px;
    box-shadow: ${(props) => props.$shadow};
    border: ${(props) => props.$border};
    border-radius: ${(props) => props.$borderRadius};
    background-color: ${(props) => props.$bg};
    backdrop-filter: blur(2px) saturate(100%) brightness(130%) contrast(${(props) => props.$contrast});
    padding: 5px 20px;
    color: inherit;
`;

const Card: React.FC<CardProps> = ({ children, hasBorder }) => {
    const { isDark } = useDarkMode()!;

    const $bg = isDark ? `rgba(30, 41, 59, 0.75)` : `rgba(56,189,248, 0.1)`;
    const $contrast = isDark ? "85%" : "95%";
    const $shadow = "0 0 1rem 0 rgba(0, 0, 0, 0.2)";
    const $border = hasBorder ? hasBorder.border : "";
    const $borderRadius = hasBorder ? hasBorder.radius : "";

    return (
        <StyledCard
            $contrast={$contrast}
            $bg={$bg}
            $shadow={$shadow}
            $border={$border}
            $borderRadius={$borderRadius}
        >
            {children}
        </StyledCard>
    );
};

export default Card;
