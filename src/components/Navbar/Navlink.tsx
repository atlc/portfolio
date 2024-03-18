import React from "react";
import styled from "styled-components";
import { NavlinkProps } from "../../types/props";

const StyledNavlink = styled.a`
    text-decoration: none;
    color: inherit;
`;

const Navlink: React.FC<NavlinkProps> = ({ onClick, link, text }) => {
    return (
        <StyledNavlink onClick={onClick} href={link}>
            {text}
        </StyledNavlink>
    );
};

export default Navlink;
