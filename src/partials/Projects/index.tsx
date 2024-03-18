import React, { useEffect } from "react";
import Section from "../../components/Layout/Section";
import Row from "../../components/Layout/Row";
import { Project } from "../../types";
import ProjectCard from "./ProjectCard";
import Badges from "../../components/Icons";

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            name: "PetMed",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam magni harum ex, ipsum saepe vitae repellendus enim sint",
            repo_url: "https://github.com/atlc/PetMed",
            images: [],
            badges: [<Badges.Postgres />, <Badges.Node />, <Badges.ReactIcon />, <Badges.TypeScript />],
        },
        {
            name: "Connections",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam magni harum ex, ipsum saepe vitae repellendus enim sint",
            repo_url: "https://github.com/atlc/connections",
            demo_url: "https://cartwright-connections-957c809c9a0a.herokuapp.com",
            images: [
                "https://raw.githubusercontent.com/atlc/connections/main/media/Boards_Wide.png",
                "https://raw.githubusercontent.com/atlc/connections/main/media/Boards_Responsive.png",
            ],
            badges: [<Badges.MySQL />, <Badges.Node />, <Badges.ReactIcon />, <Badges.TypeScript />],
        },
        {
            name: "Video Stats",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam magni harum ex, ipsum saepe vitae repellendus enim sint",
            repo_url: "https://github.com/atlc/connections",
            images: [],
            badges: [<Badges.NextJS />, <Badges.ReactIcon />, <Badges.TypeScript />],
        },
        {
            name: "Anti-Scam",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam magni harum ex, ipsum saepe vitae repellendus enim sint",
            repo_url: "https://github.com/atlc/connections",
            images: [],
            badges: [<Badges.Node />, <Badges.Selenium />, <Badges.TypeScript />],
        },
        {
            name: "World's Worst AIM",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam magni harum ex, ipsum saepe vitae repellendus enim sint",
            repo_url: "https://github.com/atlc/connections",
            images: [],
            badges: [<Badges.Node />, <Badges.TypeScript />],
        },
        {
            name: "Arduino",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam magni harum ex, ipsum saepe vitae repellendus enim sint",
            repo_url: "https://github.com/atlc/connections",

            images: [],
            badges: [<Badges.Arduino />],
        },
    ];

    useEffect(() => {
        // const demo_urls = projects.map((proj) => proj.demo_url).filter((x) => x) as string[];
        // async function wakeUp() {
        //     for await (const url of demo_urls) {
        //         await fetch(url);
        //     }
        // }
        // wakeUp();
    }, []);

    return (
        <Section noBottomBorder parentId="projects">
            <Row>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-card-${index}`} {...project} />
                ))}
            </Row>
        </Section>
    );
};

export default Projects;
