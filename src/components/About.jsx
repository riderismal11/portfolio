import React from 'react';
import '../styles/About.css';
import { BookOpen, Briefcase, Award } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="section-header">
                <h2 className="section-title">About <span className="highlight">Me</span></h2>
                <div className="underline"></div>
            </div>

            <div className="about-content">
                <div className="bio-card">
                    <p>
                        <strong>Business Analytics and Information Systems</strong> student (GPA 3.8, graduating May 2027) with
                        <em> 3 end-to-end projects</em> spanning 20 years of financial data, 2,500+ days of
                        stock market metrics, and an AI-orchestrated full-stack fintech platform deployed to a live environment.
                    </p>
                    <p>
                        Experienced in architecting relational databases, interactive multi-page dashboards,
                        and Python-based analytical pipelines that deliver actionable business insights.
                        Demonstrated ability to build complex AI integrations and design scalable, secure software solutions.
                        Cloud Computing concentration with Cybersecurity minor.
                    </p>
                    <p>
                        Targeting entry-level roles in <strong>Data Analytics</strong>, <strong>Business Intelligence</strong>,
                        <strong> Business Analysis</strong>, <strong>Financial Analytics</strong>, or <strong>Applied AI/ML</strong>.
                    </p>
                </div>

                <div className="timeline-container">
                    <div className="timeline-column">
                        <h3 className="column-title"><BookOpen size={20} /> Education</h3>

                        <div className="timeline-item">
                            <span className="year">Aug 2025 - May 2027</span>
                            <h4>B.S. Information Systems & Business Analytics</h4>
                            <h5 className="institution">Fayetteville State University</h5>
                            <p className="details">Cloud Computing Concentration | Cybersecurity Minor</p>
                            <p className="gpa-badge">GPA: 3.8</p>
                        </div>

                        <div className="timeline-item">
                            <span className="year">Jan 2023 - May 2025</span>
                            <h4>A.S., Business Administration</h4>
                            <h5 className="institution">Western Oklahoma State College</h5>
                        </div>
                    </div>

                    <div className="timeline-column">
                        <h3 className="column-title"><Briefcase size={20} /> Experience</h3>

                        <div className="timeline-item">
                            <span className="year">Aug 2026 - Present</span>
                            <h4>Undergraduate Research Assistant</h4>
                            <h5 className="institution">Intelligent Systems Lab, Fayetteville State University</h5>
                            <p className="details">Marine multi-agent AI | NASA planetary image retrieval | Wildfire-AI query systems</p>
                            <ul>
                                <li>Authored the architecture document for an agentic AI inner loop curating synthetic maritime training data, covering system design, evaluation strategy, and phased implementation plan.</li>
                                <li>Retrieve planetary imagery through NASA APIs and evaluate multimodal AI and CLIP-based retrieval across MSL and HiRISE datasets, running model-testing libraries in a cloud Lambda environment to test image models.</li>
                                <li>Help with LLM-based workflows and AI agents that turn natural-language questions into structured queries over NASA environmental and geospatial data, and test AI models in Azure AI Foundry with JPL-provided Azure access.</li>
                            </ul>
                        </div>

                        <div className="timeline-item">
                            <span className="year">Oct 2025 - Present</span>
                            <h4>IT Services Student Assistant Leader | Interim Supervisor, Tier 1 Support</h4>
                            <h5 className="institution">Fayetteville State University</h5>
                            <ul>
                                <li>Resolve 15-20 hardware, software, and network incidents weekly for 1,000+ users, using Excel tracking to identify recurring patterns, prioritize high-impact problems, and improve response efficiency in Microsoft 365 and Azure.</li>
                                <li>Lead configuration and maintenance of campus systems in Azure and Microsoft 365, training and onboarding 2-3 new assistants weekly, mentoring the team, and ensuring near-zero unplanned downtime.</li>
                            </ul>
                        </div>

                        <div className="timeline-item">
                            <span className="year">May 2023 - Aug 2023</span>
                            <h4>Production Assistant</h4>
                            <h5 className="institution">Zona Franca San Isidro</h5>
                            <ul>
                                <li>Maintained inventory records in Excel using standardized tracking templates, reducing stock discrepancy errors.</li>
                                <li>Collaborated via Microsoft Teams and production dashboards to align daily tasks with operational targets.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
