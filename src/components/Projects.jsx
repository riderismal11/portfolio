import React from 'react';
import '../styles/Projects.css';
import { ExternalLink, Github } from 'lucide-react';
import FinIQVisual from './FinIQVisual';
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
                {/* FinIQ — #1 Featured Project */}
                <div className="project-card featured">
                    <div className="project-image-placeholder">
                        <FinIQVisual />
                        <div className="overlay"></div>
                    </div>

                    <div className="project-content">
                        <h3 className="project-title">FinIQ | AI Product Orchestrator & Data Solutions</h3>
                        <div className="tags">
                            <span>AI Orchestration</span>
                            <span>Ollama API</span>
                            <span>LLM Function Calling</span>
                            <span>Full Stack</span>
                            <span>Express.js</span>
                            <span>React</span>
                            <span>TypeScript</span>
                        </div>

                        <p className="project-description">
                            Built a full-stack financial intelligence platform from the ground up, using AI to guide users through portfolio management. The app features a conversational onboarding flow where the AI helps users build and manage investment portfolios automatically.
                        </p>

                        <ul className="project-details">
                            <li>Connected live market data from Alpaca and Yahoo Finance to calculate and display real-time financial metrics and portfolio performance.</li>
                            <li>Built a secure backend where the AI manages portfolio allocations and investment strategies through natural language commands.</li>
                            <li>Implemented security layers including API protection, rate limiting, and safeguards against misuse of the AI system.</li>
                        </ul>

                        <div className="project-links">
                            <a href="https://github.com/riderismal11/FinIQ-AI-Investment-Dashboard" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm"><Github size={16} /> Source Code</a>
                        </div>
                    </div>
                </div>

                {/* ETF vs Banking Analysis */}
                <div className="project-card featured">
                    <div className="project-image-placeholder">
                        <DashboardVisual />
                        <div className="overlay"></div>
                    </div>

                    <div className="project-content">
                        <h3 className="project-title">ETF vs. Traditional Banking Investment Analysis 2006-2026</h3>
                        <div className="tags">
                            <span>SQL</span>
                            <span>PostgreSQL</span>
                            <span>Power BI</span>
                            <span>DAX</span>
                            <span>Tableau</span>
                            <span>Excel</span>
                        </div>

                        <p className="project-description">
                            Engineered a PostgreSQL database with 4 normalized tables storing 20 years of financial data and automated compound growth calculations using SQL window functions (LAG, RANK, CTEs, multi-table JOINs).
                        </p>

                        <ul className="project-details">
                            <li>Built a 3-page Power BI dark-mode dashboard with DAX measures and dynamic filtering.</li>
                            <li>Created a Tableau dashboard and delivered investment recommendations for 3 investor profiles based on volatility and max drawdown analysis.</li>
                            <li>Compound growth simulation and volatility analysis from a $10,000 initial investment over 20 years.</li>
                        </ul>

                        <div className="project-links">
                            <a href="https://github.com/riderismal11/ETF-vs-Bank-Investment-Analysis" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm"><Github size={16} /> Source Code</a>
                        </div>
                    </div>
                </div>

                {/* Stock Market Analysis */}
                <div className="project-card featured">
                    <div className="project-image-placeholder">
                        <StockMarketVisual />
                        <div className="overlay"></div>
                    </div>

                    <div className="project-content">
                        <h3 className="project-title">Stock Market Analysis 2015 - 2025</h3>
                        <div className="tags">
                            <span>Python</span>
                            <span>Pandas</span>
                            <span>Matplotlib</span>
                            <span>Seaborn</span>
                            <span>yfinance</span>
                        </div>

                        <p className="project-description">
                            Analyzed 2,516 days of market data for 5 securities (SPY, QQQ, AAPL, GOOGL, NVDA) calculating Sharpe Ratio, Max Drawdown, and Pearson correlation, revealing NVDA grew $10K to $2.7M (+27,695%) while SPY reached $33,957 (+240%).
                        </p>

                        <ul className="project-details">
                            <li>Built 6 professional dark-mode visualizations including compound growth curves, risk/return scatter plot, and correlation heatmap.</li>
                            <li>Calculated 50/200-day moving averages identifying SPY as the optimal risk-adjusted investment.</li>
                            <li>Comprehensive risk analysis across all 5 securities using Sharpe Ratio and Maximum Drawdown metrics.</li>
                        </ul>

                        <div className="project-links">
                            <a href="https://github.com/riderismal11/Stock-Market-Analysis" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm"><Github size={16} /> Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
