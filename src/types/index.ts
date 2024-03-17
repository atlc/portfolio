import React from "react";

export interface ContainerProps {
    fluid?: boolean;
    children: React.ReactNode;
}

export interface RowProps {
    children: React.ReactNode;
    layout?: "start" | "center" | "end";
    reverse?: boolean;
}

export interface ColProps {
    tenths?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    children: React.ReactNode;
}

export interface NavlinkProps {
    link: string;
    text: string;
}

export interface SectionProps {
    parentId: string;
    children: React.ReactNode;
}
