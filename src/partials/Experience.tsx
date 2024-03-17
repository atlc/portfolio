import React from "react";
import Section from "../components/Section";
import Row from "../components/Layout/Row";
import Card from "../components/Card";
import Col from "../components/Layout/Col";

export const Experience: React.FC = () => {
    const jobs = [
        {
            name: "Covalence",
            location: "Birmingham/Remote",
            description: "Full-Stack Web Development Bootcamp",
            position: "Lead Instructor",
            url: "https://covalence.io/",
            startDate: "2020-11-01",
            endDate: "2024-06-01",
            summary:
                "Fast-track coding bootcamp, teaching vital techs like Typescript, React, Node, MySQL. Hands-on projects and career support ensure seamless industry entry and graduate success.",
            highlights: [
                "Led daily coding classes and 1-on-1 mentor sessions, tailoring support to diverse learners.",
                "Created personalized video lab reviews for student assignments, enhancing comprehension.",
                "Developed engaging tutorials for both our curriculum and for public videos.",
                "Stayed updated on industry trends to contribute to both bootcamp and student successes.",
            ],
        },
        {
            name: "Hubbard Systems",
            location: "Birmingham/Remote",
            description: "Accounting/Legal Software",
            position: "Devops Analyst",
            url: "https://collectionpartnersolutions.com/",
            startDate: "2019-06-01",
            endDate: "2020-03-01",
            summary: "A software company that provides a legal accounting app to aid businesses and law firms in managing accounts receivable.",
            highlights: [
                "Pioneered DevOps department, automating internal processes.",
                "Established Jenkins CI/CD workflow managing complex and diverse project pipelines.",
                "Created Chrome extension to parse JSON and COBOL files into Markdown for API documentation.",
                "Implemented Chocolatey server, automating our app packaging and deployment.",
                "Developed PowerShell script for Chocolatey package management and installs.",
                "Crafted Node tool for generating extensive, sterile datasets.",
            ],
        },
        {
            name: "Jefferson State Community College",
            location: "Birmingham",
            description: "",
            position: "Computer Lab Assistant",
            url: "https://www.jeffersonstate.edu/",
            startDate: "2018-07-01",
            endDate: "2019-09-01",
            summary: "",
            highlights: [
                "Maintained 4 computer labs and 20 classrooms.",
                "Provided desktop support to all students, and mentored Computer Science students.",
                "Developed various batch scripts to resolve common issues students experienced in the labs.",
                "Created userscripts for proactive printer monitoring, tracking status and supplies.",
                "Automated timesheet completion and supervisor approval reminders using a userscript.",
            ],
        },
        {
            name: "Caldwell Mill Animal Clinic",
            location: "Birmingham",
            description: "Veterinary Clinic",
            position: "Kennel Technician",
            url: "https://cmacvet.com/",
            startDate: "2017-07",
            endDate: "2019-06",
            summary: "",
            highlights: [
                "Managed clinic operations, including animal care and boarding. Tasks encompassed feeding, walking dogs, administering baths, and supporting veterinarians and technicians as required.",
            ],
        },
        {
            name: "Uber",
            location: "Birmingham",
            description: "Rideshare operations",
            position: "Rideshare Driver",
            url: "https://uber.com/",
            startDate: "2017-01-01",
            endDate: "2017-08-01",
            summary: "",
            highlights: [
                "Maintained a perfect 5.00/5.00 rating and consistently received the “Above and Beyond” driver award with Uber",
                "Implemented a retro arcade emulation project in my center console using a Raspberry Pi and RetroPie to allow 2 passengers to play classic videogames for the duration of the ride, frequently receiving requests to circle extra blocks so that a Mario Kart match (or two) may be finished.",
            ],
        },
        {
            name: "Vincari",
            location: "Birmingham/Remote",
            description: "Healthcare Operative Documentation/EMR",
            position: "Software Engineer",
            url: "https://www.nuance.com/",
            startDate: "2016-05-01",
            endDate: "2017-02-01",
            summary:
                "Vincari - Now Microsoft's Nuance Surgical CAPD (Computer-Assisted Physician Documentation), Nuance CAPD is a real-time, in-workflow solution that streamlines operative report and procedure note documentation to improve surgical documentation quality and reimbursement.",
            highlights: [
                "Developed new functionalities and resolved bugs for EMR/Operative documentation web app using Ruby on Rails, Angular.js, and MySQL.",
                "Managed AWS infrastructure, primarily with EC2, VPCs, and S3.",
                "Created a SumoLogic-based logging and analytics system, empowering our Implementation & Support teams in client assistance and reproducing client-side issues.",
            ],
        },
        {
            name: "Hubbard Systems",
            location: "Birmingham/Remote",
            description: "Accounting/Legal Software",
            position: "Application System Analyst",
            url: "https://collectionpartnersolutions.com/",
            startDate: "2015-11-01",
            endDate: "2016-05-01",
            summary: "A software company that provides a legal accounting app to aid businesses and law firms in managing accounts receivable.",
            highlights: [
                "Trained and assisted clients in daily usage of accounting application.",
                "Assisted clients with resolving application bugs.",
                "Outside of application support, I was involved with SQL Server, Windows & Linux server administration.",
            ],
        },
        {
            name: "Greystone Golf & Country Club",
            location: "Birmingham",
            description: "",
            position: "Server, Bartender, Event Staff",
            url: "https://www.greystonecc.com/",
            startDate: "2011-04-01",
            endDate: "2015-11-01",
            summary: "",
            highlights: [
                "Worked in a variety of roles, serving in the Aquatics Department in the summers, working in reception and the poolside grill",
                "I later transitioned to the Food and Beverage Department, where I worked in various roles related to dining - including serving in a fast, casual, everyday environment as well as our finest dining events",
                "As event staff, I worked closely with clients and members as we prepared and set up events from small birthday parties to holiday parties, to golf tournaments or weddings which included hundreds of people",
            ],
        },
    ];

    // const getDurationString = (startDate: string, endDate: string) => {
    //     const start = new Date(startDate);
    //     const end = new Date(endDate);

    //     let yearDiff = end.getFullYear() - start.getFullYear();
    //     let monthDiff = end.getMonth() - start.getMonth();

    //     if (monthDiff < 0) {
    //         yearDiff -= 1;
    //         monthDiff += 12;
    //     }

    //     let duration = "";

    //     if (yearDiff) duration += `${yearDiff} year${yearDiff > 1 ? "s" : ""}, `;

    //     if (monthDiff) duration += `${monthDiff} month${monthDiff > 1 ? "s" : ""}`;

    //     return duration;
    // };

    return (
        <Section parentId="experience">
            <Row>
                {jobs.map(({ name, position, location, description, highlights, summary, url, startDate, endDate }, index) => (
                    <Col key={`job-card-${index}`} tenths={6}>
                        <Card>
                            <div>
                                <h3>{name}</h3>
                                <p>{position}</p>
                                <p>Location: {location}</p>
                                <p>{description}</p>
                                <p>{summary}</p>
                                <ul>
                                    {highlights.map((highlight, idx) => (
                                        <li key={`job-highlight-${name}-${idx}`}>{highlight}</li>
                                    ))}
                                </ul>
                                <p>
                                    {new Date(startDate).getFullYear()} - {new Date(endDate).getFullYear()}
                                    {/* Start Date: {startDate} | End Date: {endDate} ({getDurationString(startDate, endDate)}) */}
                                </p>
                                <a href={url}>{name}</a>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Section>
    );
};
