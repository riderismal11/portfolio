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
                        <strong>Business Analytics and Information Systems</strong> student (GPA 3.6) with
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
                        Targeting entry-level roles in <strong>Data Analytics</strong>, <strong>Finance Analytics</strong>,
                        <strong> Business Intelligence</strong>, or <strong>AI Product Management</strong>.
                    </p>
                </div>

                <div className="timeline-container">
                    <div className="timeline-column">
                        <h3 className="column-title"><BookOpen size={20} /> Education</h3>

                        <div className="timeline-item">
                            <span className="year">Aug 2025 - Jul 2027</span>
                            <h4>B.S. Information Systems & Business Analytics</h4>
                            <h5 className="institution">Fayetteville State University</h5>
                            <p className="details">Cloud Computing Concentration | Cybersecurity Minor</p>
                            <p className="gpa-badge">GPA: 3.6</p>
                        </div>

                        <div className="timeline-item">
                            <span className="year">Jan 2023 - May 2025</span>
                            <h4>A.S., Business Administration</h4>
                            <h5 className="institution">Western Oklahoma State College</h5>
                            <p className="gpa-badge">GPA: 3.6</p>
                        </div>
                    </div>

                    <div className="timeline-column">
                        <h3 className="column-title"><Briefcase size={20} /> Experience</h3>

                        <div className="timeline-item">
                            <span className="year">Oct 2025 - Jul 2027</span>
                            <h4>IT Services Student Assistant Leader</h4>
                            <h5 className="institution">Fayetteville State University</h5>
                            <ul>
                                <li>Resolve hardware, software, and network incidents for 1,000+ students, faculty, and staff using Microsoft 365 and remote diagnostic tools, applying Excel-based tracking to improve team response efficiency.</li>
                                <li>Lead configuration and maintenance of campus systems using Azure and Microsoft 365, ensuring near-zero unplanned downtime while mentoring and coordinating team members.</li>
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
