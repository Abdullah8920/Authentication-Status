import { useState, useEffect, useRef } from "react";
import "./Portfolio.css";

const socialLinks = [
    { icon: "fa-brands fa-github", href: "#", label: "GitHub" },
    { icon: "fa-brands fa-discord", href: "#", label: "Discord" },
    { icon: "fa-brands fa-linkedin", href: "#", label: "LinkedIn" },
    { icon: "fa-brands fa-instagram", href: "#", label: "Instagram" },
];

const navLinks = [
    { icon: "fa-solid fa-house", label: "home", href: "#home" },
    { icon: "fa-regular fa-address-card", label: "about", href: "#about" },
    { icon: "fa-solid fa-code", label: "skiils", href: "#skills" },
    { icon: "fa-regular fa-folder-open", label: "project", href: "#projects" },
    { icon: "fa-regular fa-envelope", label: "contacts", href: "#contacts" },
];

const descLines = [
    "I am a beginner developer learning HTML and CSS to build and design web pages.",
    "I enjoy creating simple layouts and improving my skills in styling with CSS.",
    "Now, I am starting to learn JavaScript to make my websites more interactive and dynamic.",
    "Step by step, I am growing my knowledge to become a skilled front-end developer.",
];

const loadingIcons = [
    "fa-brands fa-github",
    "fa-brands fa-facebook",
    "fa-brands fa-instagram",
];

export default function Portfolio() {
    const [activeNav, setActiveNav] = useState("home");
    const [loadingDone, setLoadingDone] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [fallen, setFallen] = useState({
        loadingText: false,
        mainIcon: false,
        icon0: false, icon1: false, icon2: false,
        designerText: false,
    });

    const loadingRef = useRef(null);

    useEffect(() => {
        const timers = [
            setTimeout(() => setFallen(s => ({ ...s, loadingText: true })), 100),
            setTimeout(() => setFallen(s => ({ ...s, mainIcon: true })), 900),
            setTimeout(() => setFallen(s => ({ ...s, icon0: true })), 1700),
            setTimeout(() => setFallen(s => ({ ...s, icon1: true })), 2100),
            setTimeout(() => setFallen(s => ({ ...s, icon2: true })), 2500),
            setTimeout(() => setFallen(s => ({ ...s, designerText: true })), 2900),
            setTimeout(() => {
                if (loadingRef.current) loadingRef.current.style.opacity = "0";
                setTimeout(() => { setLoadingDone(true); setShowContent(true); }, 500);
            }, 4000),
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    const fc = (key) => fallen[key] ? "fall-anim" : "hidden-el";

    return (
        <>
            {/* Loading Screen */}
            {!loadingDone && (
                <div className="loading-screen" ref={loadingRef}>
                    <h1 className={fc("loadingText")}>MY PROFILE</h1>
                    <i className={`fa-solid fa-laptop-code fa-5x main-icon ${fc("mainIcon")}`} />
                    <div className="sub-icons">
                        {loadingIcons.map((icon, i) => (
                            <i key={icon} className={`${icon} fa-2x ${fc(`icon${i}`)}`} />
                        ))}
                    </div>
                    <h2 className={fc("designerText")}>Welcome to My Portfolio</h2>
                </div>
            )}

            {/* Main Content */}
            <div className={`main-content ${showContent ? "visible" : ""}`}>

                {/* Navbar */}
                <header>
                    <div className="nav-wrapper">
                        <ul className="nav-list">
                            {navLinks.map(({ icon, label, href }) => (
                                <li
                                    key={label}
                                    className={`nav-item ${activeNav === label ? "active-nav" : ""}`}
                                    onClick={() => setActiveNav(label)}
                                >
                                    <i className={icon} />
                                    <a href={href} onClick={(e) => e.stopPropagation()}>{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </header>

                {/* Home Section */}
                <section id="home" className="home">
                    <div className="home-container">
                        <div className="info">

                            <h1>Hi, I'm Abdullah</h1>
                            <h2>Frontend Developer</h2>

                            <div className="info-p">
                                {descLines.map((line, i) => <p key={i}>{line}</p>)}
                            </div>

                            <div className="btn-download-wrap">
                                <button className="btn-download">
                                    <i className="fa-regular fa-circle-down" />
                                    Download CV
                                </button>
                            </div>

                            <div className="divider-wrap">
                                <hr />
                            </div>

                            <div className="social-row">
                                <p className="connect-label">Connect with me:</p>
                                <ul className="social-list">
                                    {socialLinks.map(({ icon, href, label }) => (
                                        <li key={label}>
                                            <a href={href} aria-label={label} className="social-icon-link">
                                                <i className={icon} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}