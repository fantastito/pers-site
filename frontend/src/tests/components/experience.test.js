import { render, screen } from '@testing-library/react';
import { Experience } from '../../components/Experience';

describe('generate Experience function', () => {
    it('should generate the Experience section correctly', () => {
        const mockExperience = [
            {
                company: "Makers Academy",
                date: "Oct. 2023 to Feb. 2024",
                role: "Coding and Software Development Bootcamp",
                details: [
                    "Python-based coding foundations module covering basics of coding and programmes' structure and cloud deployment.",
                    "Software development module focusing on JavaScript and web applications, including RESTful APIs and agile group projects.",
                    "Underscored importance of modern software development practices such as using Git and GitHub, pair programming, test-driven development, etc."
                ],
                skills: ["JavaScript", "Python", "Postgres", "Flask", "Visual Studio Code", "Jest", "Swift", "Xcode"]
            },
            {
                company: "Dept. for Science, Innovation and Technology",
                date: "April to Oct. 2023",
                role: "Cyber security policy advisor",
                details: [
                    "Developed new UK Internet of Things cyber security legislation and collaborated on implementation of enforcement regime."
                ],
                skills: ["Security requirements", "Compliance", "Excel"]
            },
            {
                company: "Dept. for Transport",
                date: "Sept. 2020 to April 2023",
                role: "Maritime security policy advisor",
                details: [
                    "Developed the UK’s legal and practical maritime security regime, working with security colleagues across government.",
                    "Established network of European counterparts and conducted a post-implementation review of legislation.",
                    "Interpreted novel legislation and designed workflow for enforcement at pace, which was used as a template by a sister division."
                ],
                skills: ["Excel", "Security requirements", "Industry engagement", "Problem solving", "Attention to detail", "Teamwork"]
            },
            {
                company: "European Parliament",
                date: "June 2015 to Sept. 2020",
                role: "Communications officer",
                details: [
                    "Worked on bringing together the European Parliament's visitor services, including renewing common visiting website.",
                    "Developed engaging comms materials for online, print and facilities.",
                    "Implemented and managed high-visibility projects to improve the parliament campus."
                ],
                skills: ["Copywriting", "Website development", "Excel", "Public speaking", "Stakeholder management", "Project management"]
            },
        ];

        render(<Experience experienceData={mockExperience} />);

        expect(screen.getByText("Makers Academy")).toBeInTheDocument();
        expect(screen.getByText("Dept. for Science, Innovation and Technology")).toBeInTheDocument();
        expect(screen.getByText("Dept. for Transport")).toBeInTheDocument();
        expect(screen.getByText("European Parliament")).toBeInTheDocument();

        expect(screen.getByText("Oct. 2023 to Feb. 2024")).toBeInTheDocument();

        expect(screen.getByText("Coding and Software Development Bootcamp")).toBeInTheDocument();

        expect(screen.getByText("Python-based coding foundations module covering basics of coding and programmes' structure and cloud deployment.")).toBeInTheDocument();

        expect(screen.getByText("JavaScript")).toBeInTheDocument();
    });
});
