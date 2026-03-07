import React from 'react';
import '../styles/Projects.css';
import { ExternalLink, Github } from 'lucide-react';
import DashboardVisual from './DashboardVisual';
import StockMarketVisual from './StockMarketVisual';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="section-header">
                <h2 className="section-title">My <span className="highlight">Projects</span></h2>
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
                            <span>Power BI</span>
                            <span>PostgreSQL</span>
                            <span>DAX</span>
                            <span>Financial Modeling</span>
                        </div>

                        <p className="project-description">
                            A structured financial analysis comparing long-term investment performance between VTI (Total U.S. Market ETF), SMH (Semiconductor Sector ETF), and U.S. Bank Certificates of Deposit (CDs) over 20 years. This project integrates SQL database design (Supabase/PostgreSQL), Excel financial modeling, and an interactive Power BI dashboard with 3 pages: Executive Overview, Instrument Deep Dive, and Risk vs Return Analysis.
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

                <div className="project-card featured">
                    <div className="project-image-placeholder">
                        <StockMarketVisual />
                        <div className="overlay"></div>
                    </div>

                    <div className="project-content">
                        <h3 className="project-title">Stock Market Analysis (2015–2025)</h3>
                        <div className="tags">
                            <span>Python</span>
                            <span>Pandas</span>
                            <span>Matplotlib</span>
                            <span>Seaborn</span>
                            <span>yfinance</span>
                            <span>JupyterLab</span>
                            <span>Financial Analysis</span>
                        </div>

                        <p className="project-description">
                            Python data analytics project analyzing 10 years of stock market performance for SPY, QQQ, AAPL, GOOGL, and NVDA. Starting with a $10,000 investment in 2015, the analysis compares compound growth, annual returns, risk metrics, Sharpe Ratio, Maximum Drawdown, correlation, and moving averages across 5 major securities.
                        </p>

                        <ul className="project-details">
                            <li>NVDA turned $10,000 into $2,779,506 (+27,695%) while SPY grew to $33,957 (+240%).</li>
                            <li>Comprehensive risk analysis: Sharpe Ratio, Maximum Drawdown, and correlation matrices.</li>
                            <li>AI-Assisted Development workflow with data visualization using Matplotlib and Seaborn.</li>
                        </ul>

                        <div className="project-links">
                            <a href="https://github.com/riderismal11/Stock-Market-Analysis" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm"><ExternalLink size={16} /> View Analysis</a>
                            <a href="https://github.com/riderismal11/Stock-Market-Analysis" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm"><Github size={16} /> Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
