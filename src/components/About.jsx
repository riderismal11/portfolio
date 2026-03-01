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
                        I am a <strong>Information Systems and Business Analytics</strong> student with a concentration in <em>Cloud Computing</em> and a Minor in <em>Cybersecurity</em>.
                        I am passionate about organizing, analyzing, and interpreting data to support informed decision-making and operational efficiency.
                    </p>
                    <p>
                        I have a solid foundation in business processes, data analytics, and technology-driven problem-solving.
                        My approach combines discipline, adaptability, and a constant commitment to continuous learning.
                        I am actively seeking roles as a <strong>Data Analyst</strong>, <strong>Business Intelligence Analyst</strong>, <strong>Financial Data Analyst</strong>, and <strong>Reporting Analyst</strong>.
                    </p>
                </div>

                <div className="timeline-container">
                    <div className="timeline-column">
                        <h3 className="column-title"><BookOpen size={20} /> Education</h3>

                        <div className="timeline-item">
                            <span className="year">2025 - 2027 (Estimated)</span>
                            <h4>B.S. Information Systems & Business Analytics</h4>
                            <h5 className="institution">Fayetteville State University</h5>
                            <p className="details">Cloud Computing Concentration | Minor in Cybersecurity</p>
                        </div>

                        <div className="timeline-item">
                            <span className="year">2023 - 2025</span>
                            <h4>Associate's Degree in Business Administration</h4>
                            <h5 className="institution">Western Oklahoma State College</h5>
                        </div>
                    </div>

                    <div className="timeline-column">
                        <h3 className="column-title"><Briefcase size={20} /> Experience</h3>

                        <div className="timeline-item">
                            <span className="year">Oct 2025 - Present</span>
                            <h4>IT Services Student Assistant</h4>
                            <h5 className="institution">Fayetteville State University</h5>
                            <ul>
                                <li>Troubleshoot hardware, software, and network issues for students, faculty, and staff.</li>
                                <li>Support the setup, configuration, and maintenance of computer systems across campus.</li>
                            </ul>
                        </div>

                        <div className="timeline-item">
                            <span className="year">May 2023 - Aug 2023</span>
                            <h4>Production Assistant</h4>
                            <h5 className="institution">Zona Franca San Isidro</h5>
                            <ul>
                                <li>Maintained accurate and detailed inventory records.</li>
                                <li>Collaborated to meet daily production and operational goals.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
