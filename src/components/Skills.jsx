import React from 'react';
import '../styles/Skills.css';
import { Database, Code, BarChart2, Cloud, Brain, Users } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Analytics",
            icon: <Database size={24} />,
            skills: ["SQL (PostgreSQL, Window Functions, CTEs, JOINs)", "Python (Pandas, Matplotlib, Seaborn)", "Excel (Financial Modeling, Pivot Tables)"]
        },
        {
            title: "Visualization",
            icon: <BarChart2 size={24} />,
            skills: ["Power BI (DAX, Multi-Page Dashboards, Dynamic Filtering)", "Tableau (Interactive Dashboards)", "Matplotlib", "Seaborn"]
        },
        {
            title: "Cloud & Dev",
            icon: <Cloud size={24} />,
            skills: ["Microsoft Azure", "Supabase", "GitHub", "JupyterLab", "Microsoft 365 (Teams, SharePoint)"]
        },
        {
            title: "AI Skills",
            icon: <Brain size={24} />,
            skills: ["Prompt Engineering", "AI Workflow Automation", "AI Security & Input Validation", "Ollama & Local AI Models", "Antigravity"]
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
