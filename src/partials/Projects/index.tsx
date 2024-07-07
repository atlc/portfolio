import React, { useEffect } from "react";
import Section from "../../components/Layout/Section";
import Row from "../../components/Layout/Row";
import { Project } from "../../types";
import ProjectCard from "./ProjectCard";
import Badges from "../../components/Icons";
import Card from "../../components/General/Card";
import Col from "../../components/Layout/Col";

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
            uses: ["postgres", "node", "react", "typescript"],
            badges: [<Badges.Postgres />, <Badges.Node />, <Badges.React />, <Badges.TypeScript />],
        },
        {
            name: "Connections",
            description: `An app for keeping track of my family's scoreboards for the NYT's 'Connections' game, storing the history of each player's board and providing analytical statistics and leaderboards for various performance metrics.`,
            repo_url: "https://github.com/atlc/connections",
            youtube_links: [],
            demo_url: "https://cartwright-connections-957c809c9a0a.herokuapp.com",
            images: [
                "https://raw.githubusercontent.com/atlc/connections/main/media/Dark_Wide_Puzzle_With_Comments.png",
                "https://raw.githubusercontent.com/atlc/connections/main/media/Dark_Wide_Leaderboard.png",
                "https://raw.githubusercontent.com/atlc/connections/main/media/Dark_Responsive.png",
            ],
            uses: ["mysql", "redis", "node", "react", "typescript"],
            badges: [<Badges.MySQL />, <Badges.Redis />, <Badges.Node />, <Badges.React />, <Badges.TypeScript />],
        },
        {
            name: "Video Stats",
            description:
                "A NextJS app that takes URLs of public programming videos I've done and scrapes their stats from YouTube. It's been through a few different iterations, but it serves the inital data through a cache from Mongo while it fetches the stats on a few dozen videos, then rehydrates everything with the updated stats.",
            repo_url: "https://github.com/atlc/video-stats/",
            demo_url: "https://video-stats-atlc.vercel.app/",
            youtube_links: [],
            images: [],
            uses: ["nextjs", "react", "typescript"],
            badges: [<Badges.NextJS />, <Badges.React />, <Badges.TypeScript />],
        },
        {
            name: "Event Scraper",
            description:
                "This scrapes a couple dozen local event & music venues to consolidate the upcoming week's events into a unified, convenient calendar.",
            repo_url: "https://github.com/atlc/bham-event-scraper",
            youtube_links: [],
            images: ["https://raw.githubusercontent.com/atlc/bham-event-scraper/main/demo.gif"],
            uses: ["selenium", "node", "typescript"],
            badges: [<Badges.Selenium />, <Badges.Node />, <Badges.TypeScript />],
        },
        {
            name: "Arduino",
            description:
                "There are a handful of different projects here - click the photo icon to see some pics/gifs of our Halloween costumes of anglerfish & arcade games, and some other miscellaneous Arduino projects.",
            repo_url: "https://github.com/atlc/arduino-smoke-detector",
            youtube_links: [{ title: "Anglerfish 01", url: "https://drive.google.com/file/d/1-Xm95aun4PjOvnhTsTIxgxcE1eDkLGnc/view" }],
            images: [
                "/src/assets/angler_01.gif",
                "/src/assets/angler_02.gif",
                "https://i.imgur.com/mACOiIT.mp4",
                "https://i.imgur.com/wrDjQLr.jpg",
                "https://raw.githubusercontent.com/atlc/arduino-smoke-detector/master/demo.gif",
                "https://raw.githubusercontent.com/atlc/arduino-smoke-detector/master/schematic.png",
            ],
            uses: ["arduino"],
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
        <Section
            noBottomBorder
            parentId="projects"
        >
            <Row>
                <Col tenths={9}>
                    <Card>
                        <h2 style={{ textAlign: "center" }}>Below are a few projects that I've really enjoyed working on recently!</h2>
                        <h4>
                            In a typical project, the languages that I tend to work on will usually use Typescript, React, Node, and are usually started with
                            one of my custom boilerplates or with NextJS. Style-wise, Bootstrap or Tailwind are my go-tos, though I sometimes use MUI or
                            Styled-Components for a from-scratch approach, like this site! I tend to stick with relational DBs, usually Postgres or MySQL , and
                            will have an occasional project using Redis or will sometimes venture into NoSQL with MongoDB. I've got projects deployed on just
                            about everything, from self-hosted and cloud bare-metal servers, Heroku, Vercel (where this is hosted!), DigitalOcean (where this
                            domain's DNS controlling runs), AWS, Render, Fly.io, Netlify, and I'm sure there's a handful more platforms where
                            long-since-forgotten projects lurk.
                        </h4>
                        <Row layout="start">
                            {projects.map((project, index) => (
                                <ProjectCard
                                    key={`project-card-${index}`}
                                    {...project}
                                />
                            ))}
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Section>
    );
};

export default Projects;
