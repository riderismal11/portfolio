import React from 'react';
import '../styles/Skills.css';
import { Database, Code, BarChart2, Shield, Layout, Users } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Technical Skills",
            icon: <Code size={24} />,
            skills: ["Python", "SQL", "Cloud Computing", "Cybersecurity Principles", "Microsoft Suite 365", "Power BI", "Supabase", "PostgreSQL", "DAX"]
        },
        {
            title: "Data Analytics",
            icon: <BarChart2 size={24} />,
            skills: ["Data Visualization", "Business Analytics", "Data-Driven Decision Making", "Financial Markets", "Spreadsheets"]
        },
        {
            title: "Tools & Software",
            icon: <Layout size={24} />,
            skills: ["Tableau", "Data Visualization", "Hardware & Software Troubleshooting", "Network Support"]
        },
        {
            title: "Soft Skills",
            icon: <Users size={24} />,
            skills: ["Collaborative Teamwork", "Logical Thinking", "Problem-Solving", "Organized & Disciplined", "Adaptability"]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="section-header">
                <h2 className="section-title">My <span className="highlight">Skills</span></h2>
                <div className="underline"></div>
            </div>

            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div className="skill-card" key={index}>
                        <div className="card-header">
                            <div className="icon-box">{category.icon}</div>
                            <h3>{category.title}</h3>
                        </div>
                        <ul className="skill-list">
                            {category.skills.map((skill, i) => (
                                <li key={i}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
