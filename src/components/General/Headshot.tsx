import React from "react";
import styled from "styled-components";
import headshot_full from "../../assets/headshot_full.png";

const StyledImage = styled.img`
    width: 50%;
    /* margin: auto; */
    margin-top: 0px;

    @media (min-width: 768px) {
        width: 100%;
        margin-top: 20px;
    }
`;

const Headshot: React.FC = () => {
    // const handleBackgroundHover = (e: React.MouseEvent<HTMLDivElement>) => {
    //     e.stopPropagation();

    //     const card = e.currentTarget;

    //     if (e.type === "mouseenter") {
    //         card.style.boxShadow = "12px 8px 4px 2px #0c4a6e";
    //     }

    //     if (e.type === "mouseout") {
    //         card.style.boxShadow = "";
    //     }
    // };

    return <StyledImage src={headshot_full}></StyledImage>;
};

export default Headshot;
