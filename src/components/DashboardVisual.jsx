import React from 'react';
import '../styles/DashboardVisual.css';

const DashboardVisual = () => {
    return (
        <div className="dashboard-visual">
            <div className="chart-container main-chart">
                <div className="chart-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                </div>
                <div className="chart-body">
                    <svg viewBox="0 0 300 150" className="line-chart">
                        <defs>
                            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#00f2ea" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#00f2ea" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path d="M0,150 L0,120 Q30,140 60,100 T120,80 T180,110 T240,50 T300,20 L300,150 Z" fill="url(#gradient)" />
                        <path d="M0,120 Q30,140 60,100 T120,80 T180,110 T240,50 T300,20" fill="none" stroke="#00f2ea" strokeWidth="3" />
                    </svg>
                    <div className="candlesticks">
                        <div className="candle up" style={{ left: '20%', height: '40px', bottom: '30%' }}></div>
                        <div className="candle down" style={{ left: '35%', height: '25px', bottom: '45%' }}></div>
                        <div className="candle up" style={{ left: '50%', height: '50px', bottom: '35%' }}></div>
                        <div className="candle up" style={{ left: '65%', height: '30px', bottom: '60%' }}></div>
                        <div className="candle down" style={{ left: '80%', height: '20px', bottom: '50%' }}></div>
                    </div>
                </div>
            </div>
            <div className="floating-card card-1">
                <span>ETF Growth</span>
                <strong>+24.5%</strong>
            </div>
            <div className="floating-card card-2">
                <span>Bank Rate</span>
                <strong>+4.2%</strong>
            </div>
        </div>
    );
};

export default DashboardVisual;
