import React from 'react';
import '../styles/FinIQVisual.css';

const FinIQVisual = () => {
    return (
        <div className="finiq-visual">
            <div className="finiq-terminal">
                <div className="terminal-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                    <span className="terminal-title">FinIQ Intelligence Terminal</span>
                </div>
                <div className="terminal-body">
                    <div className="chat-side">
                        <div className="chat-msg user">
                            <span className="msg-label">YOU</span>
                            <p>Add 15% Apple to my portfolio</p>
                        </div>
                        <div className="chat-msg ai">
                            <span className="msg-label ai-label">FinIQ AI</span>
                            <p>Done. Updated allocation: AAPL 15%, VTI 50%, BND 35%. Recalculating metrics...</p>
                        </div>
                        <div className="chat-msg ai">
                            <span className="msg-label ai-label">FinIQ AI</span>
                            <p>New Sharpe Ratio: 1.24 | Volatility: 14.2%</p>
                        </div>
                        <div className="typing-indicator">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                    <div className="chart-side">
                        <svg viewBox="0 0 200 100" className="finiq-chart">
                            <defs>
                                <linearGradient id="finiq-grad" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#00f2ea" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#00f2ea" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path d="M0,100 L0,80 Q25,85 50,70 T100,55 T150,30 T200,15 L200,100 Z" fill="url(#finiq-grad)" />
                            <path d="M0,80 Q25,85 50,70 T100,55 T150,30 T200,15" fill="none" stroke="#00f2ea" strokeWidth="2" />
                            <path d="M0,85 Q30,82 60,78 T120,65 T180,50 L200,45" fill="none" stroke="#ff0055" strokeWidth="1.5" strokeOpacity="0.6" />
                        </svg>
                        <div className="chart-labels">
                            <span className="label-cyan">Growth</span>
                            <span className="label-magenta">Benchmark</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="floating-card card-1">
                <span>Sharpe Ratio</span>
                <strong>1.24</strong>
            </div>
            <div className="floating-card card-2">
                <span>Expected CAGR</span>
                <strong>9.8%</strong>
            </div>
            <div className="finiq-badge">FinIQ</div>
        </div>
    );
};

export default FinIQVisual;
