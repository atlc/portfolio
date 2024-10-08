import React from "react";

export interface ContainerProps {
    fluid?: boolean;
    children: React.ReactNode;
}

export interface RowProps {
    children: React.ReactNode;
    layout?: "start" | "center" | "end" | "space-between";
    reverse?: boolean;
}

export interface ColProps {
    tenths?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    children: React.ReactNode;
}

export interface NavlinkProps {
    onClick?: () => void;
    link: string;
    text: string;
}

export interface SectionProps {
    parentId: string;
    children: React.ReactNode;
    noBottomBorder?: boolean;
}

export interface CardProps {
    children: React.ReactNode;
    hasBorder?: {
        border: string;
        radius: string;
    };
}

export interface HamburgerProps {
    isDark?: boolean;
}

export interface LinkProps {
    children: React.ReactNode;
    href: string;
}

export interface ButtonProps {
    children: React.ReactNode;
}

export interface ParagraphProps {
    text: string;
}
