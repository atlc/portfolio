import React from "react";
import styled from "styled-components";
import { LinkProps } from "../../types/props";

const StyledLink = styled.a`
    margin: 20px;
`;

const Link: React.FC<LinkProps> = ({ href, children }) => {
    return <StyledLink href={href}>{children}</StyledLink>;
};

export default Link;
