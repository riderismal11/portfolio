import React from 'react';
import '../styles/Certificates.css';
import { Award, CheckCircle } from 'lucide-react';

const Certificates = () => {
    const certificates = [
        {
            title: "Google Data Analytics Professional Certificate",
            issuer: "Coursera / Google",
            date: "December 2025",
            id: "6-3C6-5WHT8",
            link: "#"
        },
        {
            title: "Python Mastery: From 'Novice to Ninja'",
            issuer: "Udemy",
            date: "July 2025",
            id: "UC-cf2910f8-f999-4a15-be09-4c3b40f8cef9",
            link: "#"
        },
        {
            title: "Office Pro Certification",
            issuer: "TestOut",
            date: "May 2025",
            id: "R1FU8ZZ0XNNS",
            link: "#"
        }
    ];

    return (
        <section id="certificates" className="certificates">
            <div className="section-header">
                <h2 className="section-title">Professional <span className="highlight">Certifications</span></h2>
                <div className="underline"></div>
            </div>

            <div className="certificates-grid">
                {certificates.map((cert, index) => (
                    <div className="cert-card" key={index}>
                        <div className="cert-icon">
                            <Award size={32} />
                        </div>
                        <div className="cert-info">
                            <h3>{cert.title}</h3>
                            <p className="issuer">{cert.issuer} • {cert.date}</p>
                            <div className="cert-id">
                                <CheckCircle size={14} /> ID: <span>{cert.id}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
