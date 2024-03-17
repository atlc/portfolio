import React from "react";
import styled from "styled-components";
import { NavlinkProps } from "../../types";

const StyledNavlink = styled.a`
    text-decoration: none;
    color: inherit;
`;

const Navlink: React.FC<NavlinkProps> = ({ link, text }) => {
    return <StyledNavlink href={link}>{text}</StyledNavlink>;
};

export default Navlink;
