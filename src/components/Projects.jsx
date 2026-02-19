import React from 'react';
import '../styles/Projects.css';
import { ExternalLink, Github } from 'lucide-react';
import DashboardVisual from './DashboardVisual';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="section-header">
                <h2 className="section-title">My <span className="highlight">Project</span></h2>
                <div className="underline"></div>
            </div>

            <div className="project-showcase">
                <div className="project-card featured">
                    <div className="project-image-placeholder">
                        <DashboardVisual />
                        <div className="overlay"></div>
                    </div>

                    <div className="project-content">
                        <h3 className="project-title">ETF vs Traditional Banking Investment Analysis (2006–2026)</h3>
                        <div className="tags">
                            <span>Excel</span>
                            <span>SQL</span>
                            <span>Supabase</span>
                            <span>Financial Modeling</span>
                        </div>

                        <p className="project-description">
                            A structured financial analysis comparing long-term investment performance between VTI (Total U.S. Market ETF), SMH (Semiconductor Sector ETF), and U.S. Bank Certificates of Deposit (CDs) over 21 years.
                        </p>

                        <ul className="project-details">
                            <li>Compound growth simulation and volatility analysis from a $10,000 initial investment.</li>
                            <li>Excel-based financial modeling with charts and SQL queries via Supabase.</li>
                            <li>Performance ranking, risk vs return evaluation, and cumulative capital appreciation.</li>
                        </ul>

                        <div className="project-links">
                            <a href="https://github.com/riderismal11/ETF-vs-Bank-Investment-Analysis" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm"><ExternalLink size={16} /> View Analysis</a>
                            <a href="https://github.com/riderismal11/ETF-vs-Bank-Investment-Analysis" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm"><Github size={16} /> Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Projects;
