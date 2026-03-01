import React, { useState } from 'react';
import '../styles/Footer.css';
import { Mail, Linkedin, Github, Heart, Check } from 'lucide-react';

const Footer = () => {
    const [copied, setCopied] = useState(false);
    const email = "riderismal11@gmail.com";
    const currentYear = new Date().getFullYear();

    const handleCopyEmail = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    Rider Novas<span className="dot">.</span>
                </div>

                <p className="footer-text">
                    Building efficient and secure solutions for the digital world.
                </p>

                <div className="footer-social">
                    <a href="https://www.linkedin.com/in/rider-novas" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    <a href="https://github.com/riderismal11" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
                    <button onClick={handleCopyEmail} className="copy-email-btn footer-btn" aria-label="Copy Email" title="Copy Email">
                        {copied ? <Check size={20} color="var(--primary)" /> : <Mail size={20} />}
                        {copied && <span className="tooltip top">Copied!</span>}
                    </button>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Rider Novas Guzman. All rights reserved.</p>
                    <p className="made-with">
                        Made with <Heart size={14} fill="var(--secondary)" color="var(--secondary)" /> and React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
