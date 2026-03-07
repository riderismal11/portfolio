import React from 'react';
import '../styles/StockMarketVisual.css';

const StockMarketVisual = () => {
    return (
        <div className="stock-visual">
            <div className="chart-container main-chart">
                <div className="chart-header">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                </div>
                <div className="chart-body">
                    <svg viewBox="0 0 300 150" className="multi-line-chart">
                        <defs>
                            <linearGradient id="gradient-nvda" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#76ff03" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#76ff03" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        {/* NVDA - explosive growth */}
                        <path d="M0,140 Q40,138 80,130 T140,100 T200,60 T260,25 L300,8" fill="none" stroke="#76ff03" strokeWidth="2.5" />
                        <path d="M0,150 L0,140 Q40,138 80,130 T140,100 T200,60 T260,25 L300,8 L300,150 Z" fill="url(#gradient-nvda)" />
                        {/* AAPL */}
                        <path d="M0,135 Q50,130 100,120 T180,90 T250,55 L300,40" fill="none" stroke="#00f2ea" strokeWidth="2" strokeOpacity="0.8" />
                        {/* GOOGL */}
                        <path d="M0,132 Q60,128 110,118 T200,85 T260,65 L300,55" fill="none" stroke="#ff0055" strokeWidth="2" strokeOpacity="0.7" />
                        {/* QQQ */}
                        <path d="M0,130 Q50,128 100,122 T180,100 T250,80 L300,65" fill="none" stroke="#ffbd2e" strokeWidth="2" strokeOpacity="0.7" />
                        {/* SPY - steady growth */}
                        <path d="M0,128 Q50,126 100,122 T180,110 T250,100 L300,90" fill="none" stroke="#8892b0" strokeWidth="2" strokeOpacity="0.6" />
                    </svg>
                    <div className="stock-labels">
                        <span className="stock-label nvda">NVDA</span>
                        <span className="stock-label aapl">AAPL</span>
                        <span className="stock-label googl">GOOGL</span>
                        <span className="stock-label qqq">QQQ</span>
                        <span className="stock-label spy">SPY</span>
                    </div>
                </div>
            </div>
            <div className="floating-card card-1">
                <span>NVDA Growth</span>
                <strong>+27,695%</strong>
            </div>
            <div className="floating-card card-2">
                <span>SPY Growth</span>
                <strong>+240%</strong>
            </div>
        </div>
    );
};

export default StockMarketVisual;
