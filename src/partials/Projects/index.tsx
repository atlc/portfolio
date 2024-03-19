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
            description:
                "A medical record application allowing one to schedule and log pet medication administration across potentially multiple households, with pet sitters in mind as target audience.",
            repo_url: "https://github.com/covalence-io/PetMed",
            youtube_links: [
                {
                    title: "Playlist: PetMed | Full-Stack Pet Medicine Log",
                    url: "https://www.youtube.com/playlist?list=PLp8YCP6EV3eLcrKA0vBtyuqFl32psc4Hp",
                },
            ],
            images: [],
            badges: [<Badges.Postgres />, <Badges.Node />, <Badges.React />, <Badges.TypeScript />],
        },
        {
            name: "Connections",
            description: `This application is built for keeping track of my family's scoreboards for the NYT's 'Connections' game, storing the history of each individual player's board and providing analytical statistics and leaderboards for various performance metrics.`,
            repo_url: "https://github.com/atlc/connections",
            youtube_links: [],
            demo_url: "https://cartwright-connections-957c809c9a0a.herokuapp.com",
            images: [
                "https://raw.githubusercontent.com/atlc/connections/main/media/Dark_Wide_Puzzle_With_Comments.png",
                "https://raw.githubusercontent.com/atlc/connections/main/media/Dark_Wide_Leaderboard.png",
                "https://raw.githubusercontent.com/atlc/connections/main/media/Dark_Responsive.png",
            ],
            badges: [<Badges.MySQL />, <Badges.Redis />, <Badges.Node />, <Badges.React />, <Badges.TypeScript />],
        },
        {
            name: "Video Stats",
            description: "A NextJS app that takes all the URLs of programming videos I've done and consolidates their stats",
            repo_url: "https://github.com/atlc/video-stats/",
            demo_url: "https://video-stats-atlc.vercel.app/",
            youtube_links: [],
            images: [],
            badges: [<Badges.NextJS />, <Badges.React />, <Badges.TypeScript />],
        },
        {
            name: "Anti-Scam",
            description:
                "A targeted phishing campaign was sent towards the old college I worked at. I created a fake dataset generator with legitimate-appearing and localized data, then used Selenium to fill out the form ~150k times over the next few days to ruin the scam data.",
            youtube_links: [
                {
                    title: "Part 1 - Data Setup",
                    url: "https://www.youtube.com/watch?v=7wLS2qihyPY&t=15s",
                },
                {
                    title: "Part 2 - Automation",
                    url: "https://www.youtube.com/watch?v=NHgEMrZ5td0",
                },
            ],
            repo_url: "https://github.com/atlc/anti-scammer-selenium",
            images: [],
            badges: [<Badges.Node />, <Badges.Selenium />, <Badges.TypeScript />],
        },
        {
            name: "World's Worst AIM",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam magni harum ex, ipsum saepe vitae repellendus enim sint",
            repo_url: "https://github.com/atlc/connections",
            youtube_links: [],
            images: [],
            badges: [<Badges.Node />, <Badges.TypeScript />],
        },
        {
            name: "Arduino",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam magni harum ex, ipsum saepe vitae repellendus enim sint",
            repo_url: "https://github.com/atlc/connections",
            youtube_links: [],
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
