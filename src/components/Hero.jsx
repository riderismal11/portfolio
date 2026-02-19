import React, { useState } from 'react';
import '../styles/Hero.css';
import { ChevronDown, Github, Linkedin, Mail, Check } from 'lucide-react';

const Hero = () => {
    const [copied, setCopied] = useState(false);
    const email = "riderismal11@gmail.com";

    const handleCopyEmail = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <span className="greeting">Hello, I'm</span>
                <h1 className="name">Rider Novas Guzman</h1>
                <h2 className="title">Information Systems & <span className="highlight">Business Analytics</span></h2>
                <p className="description">
                    Specializing in Cloud Computing and Cybersecurity. I transform data into strategic decisions and build secure, efficient technological solutions.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                </div>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/rider-novas-guzman-62a354229" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={24} /></a>
                    <a href="https://github.com/riderismal11" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={24} /></a>
                    <button onClick={handleCopyEmail} className="copy-email-btn" aria-label="Copy Email" title="Copy Email">
                        {copied ? <Check size={24} color="var(--primary)" /> : <Mail size={24} />}
                        {copied && <span className="tooltip">Copied!</span>}
                    </button>
                </div>
            </div>

            <div className="scroll-indicator">
                <span className="mouse">
                    <span className="wheel"></span>
                </span>
                <div className="arrow">
                    <ChevronDown size={24} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
