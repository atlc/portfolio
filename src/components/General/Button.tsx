import React from "react";
import styled from "styled-components";
import { ButtonProps } from "../../types/props";
import useDarkMode from "../../hooks/useDarkMode";

const StyledButton = styled.button<{ $bg: string; $color: string }>`
    padding: 0px 10px;
    margin: 0px 20px;
    background-color: ${(props) => props.$bg};
    border: 2px solid ${(props) => props.$bg};
    font-size: large;
    font-weight: bold;
    border-radius: 12px;
    color: ${(props) => props.$color};
`;

const Button: React.FC<ButtonProps> = ({ children }) => {
    const { isDark } = useDarkMode()!;

    const $bg = isDark ? `rgb(56,189,248)` : `rgb(30, 41, 59)`;
    const $color = isDark ? `rgb(30, 41, 59)` : `#cbd5e1`;

    return (
        <StyledButton $color={$color} $bg={$bg}>
            {children}
        </StyledButton>
    );
};

export default Button;
