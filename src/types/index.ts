import { ReactElement } from "react";

export interface Job {
    name: string;
    is_relevant: boolean;
    location: string;
    description: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
}

export interface Project {
    name: string;
    description: string;
    repo_url: string;
    youtube_links: { title: string; url: string }[];
    demo_url?: string;
    images: string[];
    badges: ReactElement[];
    uses: string[];
}
