import React from "react";
import Section from "../components/Layout/Section";
import Row from "../components/Layout/Row";
import Card from "../components/General/Card";
import JobCard from "../components/General/JobCard";

const Experience: React.FC = () => {
    const jobs = [
        {
            name: "Covalence",
            is_relevant: true,
            location: "Birmingham/Remote",
            description: "Full-Stack Web Development Bootcamp",
            position: "Software Developer / Lead Instructor",
            url: "https://covalence.io/",
            startDate: "2020-11-01",
            endDate: "2024-06-01",
            summary:
                "Fast-track coding bootcamp, teaching vital techs like Typescript, React, Node, MySQL. Hands-on projects and career support ensure seamless industry entry and graduate success.",
            full_description:
                "In my current role, I lead a comprehensive full-stack web development bootcamp (encompassing Typescript, React, Node, relational SQL, and auth) where I mentor aspiring developers through their educational journey. I am responsible for developing and maintaining a dynamic curriculum that keeps pace with industry trends and technologies. My role also involves producing and sharing programming tutorials that are accessible to the broader developer community. This position allows me to combine my love for teaching with my technical expertise, ensuring students receive the best possible education and preparation for their careers.",
        },
        {
            name: "Hubbard Systems",
            is_relevant: true,
            location: "Birmingham/Remote",
            description: "Accounting/Legal Software",
            position: "Devops Engineer",
            url: "https://collectionpartnersolutions.com/",
            startDate: "2019-06-01",
            endDate: "2020-03-01",
            summary: "A software company that provides a legal accounting app to aid businesses and law firms in managing accounts receivable.",
            full_description:
                "At Hubbard Systems, I had the privilege of establishing the DevOps department from scratch. This role involved automating critical internal processes to streamline workflows and enhance efficiency across the development team. I spearheaded the creation and implementation of CI/CD pipelines for a complex application stack that included COBOL, Java, and Electron/React technologies. Additionally, I developed custom devtools and a comprehensive documentation system, ensuring that our development practices were efficient, reproducible, and well-documented.",
        },
        {
            name: "Jefferson State Community College",
            is_relevant: false,
            location: "Birmingham",
            description: "",
            position: "Computer Lab Assistant",
            url: "https://www.jeffersonstate.edu/",
            startDate: "2018-07-01",
            endDate: "2019-09-01",
            summary: "",
            full_description:
                "Maintained 4 computer labs and 20 classrooms, provided desktop support to all students, mentored Computer Science students, and developed batch scripts to resolve common issues in the labs. Additionally, I created userscripts for proactive printer monitoring, tracking status and supplies, and automated timesheet completion and supervisor approval reminders using a userscript.",
        },
        {
            name: "Caldwell Mill Animal Clinic",
            is_relevant: false,
            location: "Birmingham",
            description: "Veterinary Clinic",
            position: "Kennel Technician",
            url: "https://cmacvet.com/",
            startDate: "2017-07",
            endDate: "2019-06",
            summary: "",
            full_description:
                "Managed clinic operations, including animal care and boarding. Tasks encompassed feeding, walking dogs, administering baths, and supporting veterinarians and technicians as required.",
        },
        {
            name: "Uber",
            is_relevant: false,
            location: "Birmingham",
            description: "Rideshare operations",
            position: "Rideshare Driver",
            url: "https://uber.com/",
            startDate: "2017-01-01",
            endDate: "2017-08-01",
            summary: "",
            full_description:
                "Maintained a perfect 5.00/5.00 rating and consistently received the “Above and Beyond” driver award with Uber. Implemented a retro arcade emulation project in my center console using a Raspberry Pi and RetroPie, allowing passengers to play classic video games during the ride, often resulting in requests to circle extra blocks to finish a Mario Kart match (or two).",
        },
        {
            name: "Vincari",
            is_relevant: true,
            location: "Birmingham/Remote",
            description: "Healthcare Operative Documentation/EMR",
            position: "Software Engineer",
            url: "https://www.nuance.com/",
            startDate: "2016-05-01",
            endDate: "2017-02-01",
            summary:
                "Vincari - Now Microsoft's Nuance Surgical CAPD (Computer-Assisted Physician Documentation), Nuance CAPD is a real-time, in-workflow solution that streamlines operative report and procedure note documentation to improve surgical documentation quality and reimbursement.",
            full_description:
                "I created new features and fixed bugs for an EMR/Operative documentation app using Ruby on Rails, Angular.js, and MySQL. I managed AWS infrastructure, primarily within EC2, VPCs, and S3. A major project I accomplished was creating a SumoLogic-based logging and analytics system that empowered our Implementation & Support teams to replay the construction of any document.",
        },
        {
            name: "Hubbard Systems",
            is_relevant: false,
            location: "Birmingham/Remote",
            description: "Accounting/Legal Software",
            position: "Application Systems Analyst",
            url: "https://collectionpartnersolutions.com/",
            startDate: "2015-11-01",
            endDate: "2016-05-01",
            summary: "A software company that provides a legal accounting app to aid businesses and law firms in managing accounts receivable.",
            full_description:
                "Trained and assisted clients in the daily usage of our accounting application, and was involved in SQL Server, Windows, and Linux server administration.",
        },
        {
            name: "Greystone Golf & Country Club",
            is_relevant: false,
            location: "Birmingham",
            description: "",
            position: "Server, Bartender, Event Staff",
            url: "https://www.greystonecc.com/",
            startDate: "2011-04-01",
            endDate: "2015-11-01",
            summary: "",
            full_description:
                "Worked in various roles within the Aquatics Department during the summers, handling reception and the poolside grill. Later transitioned to the Food and Beverage Department, where I served in both casual dining and high-end events, and worked closely with clients and members to prepare and set up events, ranging from small birthday parties to large-scale holiday parties, golf tournaments, and weddings.",
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
                <Card>
                    <div style={{ marginTop: "5%", marginBottom: "5%" }}>
                        {jobs
                            .filter((j) => j.is_relevant)
                            .map((job, index) => (
                                <JobCard
                                    {...job}
                                    key={`job-card-${index}`}
                                />
                            ))}
                    </div>
                </Card>
            </Row>
        </Section>
    );
};

export default Experience;
