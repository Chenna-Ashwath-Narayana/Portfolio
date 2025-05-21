import React, { useState } from 'react'
import './Landingpage.css'
import icon from '../images/navbaricon.png'
import Lottie from 'lottie-react';
import animation from '../images/Animation - 1747663653131.json';
import mineimage from '../images/mineimage.jpg'

import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaInstagram, FaFacebook, FaYoutube, FaArrowCircleDown } from 'react-icons/fa';

const Landingpage = () => {

    const projectsData = [
        {
          id: 1,
          title: "High-Speed Comparator Design",
          period: "Jan 2024 – May 2024",
          details: [
            "Engineered and simulated a high-speed comparator to enhance performance in VLSI circuits.",
            "Optimized speed, power efficiency, and accuracy, ensuring suitability for high-frequency applications.",
            "Verified circuit performance using industry-standard simulation tools, achieving precise and reliable results."
          ],
        },
        {
          id: 2,
          title: "Recipe Information System",
          period: "May 2023 – June 2023",
          details: [
            "Built a dynamic Recipe information system using JDBC to process itemized billing and discounts.",
            "Enhanced user interaction by hosting with Apache Tomcat and HTML forms integration.",
            "Exported recipe in PDF format for documentation and seamless record-keeping."
          ],
        },
        {
          id: 3,
          title: "Community Management System (Internship Project)",
          details: [
            "Developed a Community Management System using React and Spring Boot for user and event management.",
            "Implemented Spring Security for authentication and role-based access control.",
            "Designed a responsive frontend and integrated a RESTful API backend for seamless data handling."
          ],
        },
        {
          id: 4,
          title: "HR Management System (Internship Project)",
          details: [
            "HR Management System is a software solution that streamlines employee management, payroll, and attendance tracking.",
            "Automates HR tasks like recruitment, leave management, and performance evaluation for better efficiency.",
            "Enhances communication, ensures compliance, and improves overall workforce management."
          ],
        },
        {
          id: 5,
          title: "Water Quality Management Mini Project",
          note: "Top Performer - Recognized for outstanding performance during B.Tech in ECE."
        },
        {
          id: 6,
          title: "UI/UX E-Commerce Webpage",
          details: [
            "Designed and developed a UI/UX focused e-commerce webpage.",
            "Improved user engagement through modern design principles and responsive layouts.",
            "Implemented smooth navigation and product browsing features."
          ]
        }
      ];

      const [selectedProject, setSelectedProject] = useState(null);


  return (
    <div className="landingpage-wrapper">
        <div className="header-container">
            <div className="logo-container">
                <div className='navbarimage-container'><img src={icon} alt="Navbar Icon" /></div>
                <div><h3>Ashwath Narayana Chenna</h3></div>
            </div>
            <div className="navbar-container">
                {/* Navigation Menu */}
                <nav className="navbar">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#skills" className="nav-link">Skills</a>
                    <a href="#experience" className="nav-link">Experience</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>
            </div>
        </div>
        <div className="main-content">
            {/* Sections */}
            <div className="sections-container">
                <div id="home" className="home-section">
                    <div className='homepage-content-container'>
                        <h1>Hi There,</h1>
                        <h1>I’m Ashwath Narayana <span style={{color:'orange'}}>Chenna</span></h1>
                        <p className="intro-text1">I Am into <span style={{color:'red'}}>Web Developer</span></p>
                        <p className="intro-text">
                            I'm a passionate full stack developer focused on building responsive and performance-optimized web applications.
                            I love learning new technologies and creating clean, user-friendly UIs.
                        </p>

                        <div className='intro-about'><h3>About Me <FaArrowCircleDown /></h3></div>

                        <div className="social-icons-container">
                            <a href="https://www.linkedin.com/in/ashwath406/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                            <FaLinkedin />
                            </a>
                            <a href="https://github.com/Chenna-Ashwath-Narayana" target="_blank" rel="noopener noreferrer" className="social-icon github">
                            <FaGithub />
                            </a>
                            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                            <FaTwitter />
                            </a>
                            <a href="mailto:ashwathchenna2002@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon email">
                            <FaEnvelope />
                            </a>
                            <a href="https://www.instagram.com/chenna_ashwath/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                            <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100063543725838" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                            <FaFacebook />
                            </a>
                            <a href="https://www.youtube.com/@ashwathayaan3542" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
                            <FaYoutube />
                            </a>
                        </div>
                    </div>
                    <div className='homepage-image-container'>
                        <Lottie animationData={animation} loop={true}></Lottie>
                    </div>
                </div>


                <div id="about" className="about-section">
                    <div className="about-container">
                        
                        {/* Image Section */}
                        <div className="about-image">
                        <img
                            src={mineimage}
                            alt="Ashwath Narayana"
                            className="profile-img"
                        />
                        </div>

                        {/* Info Section */}
                        <div className="about-info">
                        <h2>CHENNA ASHWATH NARAYANA</h2>
                        <p>
                            I'm a passionate full-stack developer with hands-on experience in Java, Spring Boot, and front-end technologies like React and Tailwind CSS.
                        </p>
                        <p>
                            I've interned at EXCLER Solutions and worked on HR Management, Community Portals, and UI/UX for eCommerce. I enjoy building secure, responsive apps.
                        </p>

                        <a href="\public\Ashwath_Narayana_Chenna_Resume.pdf" download className="download-btn">
                            <i className="fas fa-download"></i> Download Resume
                            {/* E:\SYNTHRANOUS LABS\Task 1 PORTFOLIO\portfolio\public\Ashwath_Narayana_Chenna_Resume.pdf */}
                        </a>
                        </div>
                    </div>
                </div>



                <div id="skills" className="skills-section">
                    <div className="skills-section1">
                        <p>Skills & Abilities</p>
                    </div>
                    <div className="skills-section2">
                        <div className="skills-section2-1">
                        <div className="skill-item">
                            <div className="outer-ring">
                            <div className="inner-ring" style={{ background: 'conic-gradient(white 80%, black 0)' }} data-label="80%"></div>
                            </div>
                            <p className="skill-label">HTML</p>
                        </div>

                        <div className="skill-item">
                            <div className="outer-ring">
                            <div className="inner-ring" style={{ background: 'conic-gradient(white 75%, black 0)' }} data-label="75%"></div>
                            </div>
                            <p className="skill-label">CSS</p>
                        </div>

                        <div className="skill-item">
                            <div className="outer-ring">
                            <div className="inner-ring" style={{ background: 'conic-gradient(white 70%, black 0)' }} data-label="70%"></div>
                            </div>
                            <p className="skill-label">JavaScript</p>
                        </div>

                        <div className="skill-item">
                            <div className="outer-ring">
                            <div className="inner-ring" style={{ background: 'conic-gradient(white 80%, black 0)' }} data-label="80%"></div>
                            </div>
                            <p className="skill-label">React</p>
                        </div>
                        </div>

                        <div className="skills-section2-2">
                        <div className="skill-item">
                            <div className="outer-ring">
                            <div className="inner-ring" style={{ background: 'conic-gradient(white 70%, black 0)' }} data-label="70%"></div>
                            </div>
                            <p className="skill-label">Java</p>
                        </div>

                        <div className="skill-item">
                            <div className="outer-ring">
                            <div className="inner-ring" style={{ background: 'conic-gradient(white 70%, black 0)' }} data-label="70%"></div>
                            </div>
                            <p className="skill-label">SQl</p>
                        </div>

                        <div className="skill-item">
                            <div className="outer-ring">
                            <div className="inner-ring" style={{ background: 'conic-gradient(white 85%, black 0)' }} data-label="85%"></div>
                            </div>
                            <p className="skill-label">Bootstrap</p>
                        </div>

                        <div className="skill-item">
                            <div className="outer-ring">
                            <div className="inner-ring" style={{ background: 'conic-gradient(white 60%, black 0)' }} data-label="60%"></div>
                            </div>
                            <p className="skill-label">Git</p>
                        </div>
                        </div>
                    </div>
                </div>

                <div id="experience" className="experience-section">
                    <div className="experience-header">
                        <h2>My Education & Experience</h2>
                    </div>
                    <div className="experience-content">
                        <div className="experience-item">
                        <h3 className="experience-title">St Mary’s E.M. High School</h3>
                        <span className="experience-date">2017 - 2018 | Secondary School Certificate (SSC) - 85%</span>
                        <p className="experience-description">
                            Completed Secondary School Certificate with a strong foundation in science and mathematics.
                        </p>
                        </div>

                        <div className="experience-item">
                        <h3 className="experience-title">Government Polytechnic College</h3>
                        <span className="experience-date">2018 - 2021 | Diploma in Engineering - 78%</span>
                        <p className="experience-description">
                            Earned a Diploma in Engineering, gaining practical skills in electronics and communication technologies.
                        </p>
                        </div>

                        <div className="experience-item">
                        <h3 className="experience-title">Chaitanya Bharathi Institute of Technology</h3>
                        <span className="experience-date">2021 - 2024 | Bachelor of Engineering in Electronics and Communication - 75%</span>
                        <p className="experience-description">
                            Pursued Bachelor of Engineering, focusing on advanced concepts of electronics, communication systems, and embedded technologies.
                        </p>
                        </div>

                        <div className="experience-item">
                        <h3 className="experience-title">Intern – EXCLER Solutions, Hyderabad (July 2024 – Jan 2025)</h3>
                        <span className="experience-date"></span>
                        <p className="experience-description">
                            Worked on real-time Java backend development projects, gaining hands-on experience in Spring Boot, RESTful APIs, and database management with MySQL.
                        </p>
                        </div>

                        <div className="experience-item">
                        <h3 className="experience-title">UI/UX Internship</h3>
                        <span className="experience-date">March 2025 - Ongoing (3 months)</span>
                        <p className="experience-description">
                            Currently enhancing skills in user interface and user experience design, focusing on creating intuitive and responsive web applications.
                        </p>
                        </div>

                        <div className="experience-item">
                        <h3 className="experience-title">VLSI Design Internship Program – Maven Silicon Softech Pvt. Ltd. (Certified)</h3>
                        <span className="experience-date">2015 | Certification Completed</span>
                        <p className="experience-description">
                            Completed a certified internship program in VLSI design, learning about semiconductor design flow and digital circuit verification techniques.
                        </p>
                        </div>
                    </div>
                </div>

                <div className="projects-section">
                    <h2>Academic & Internship Projects</h2>

                    <div className="projects-list">
                        {projectsData.map((proj) => (
                        <div
                            key={proj.id}
                            className="project-item"
                            onClick={() => setSelectedProject(proj)}
                            tabIndex={0}
                            role="button"
                            onKeyDown={(e) => e.key === "Enter" && setSelectedProject(proj)}
                        >
                            <h3>{proj.title}</h3>
                            {proj.period && <p className="period">{proj.period}</p>}
                            {proj.note && <p className="note">{proj.note}</p>}
                        </div>
                        ))}
                    </div>

                    {/* Modal inside the same parent div */}
                    {selectedProject && (
                        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                        <div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                        >
                            <button
                            className="modal-close"
                            onClick={() => setSelectedProject(null)}
                            aria-label="Close modal"
                            >
                            &times;
                            </button>
                            <h2 id="modal-title">{selectedProject.title}</h2>
                            {selectedProject.period && <p><strong>Period:</strong> {selectedProject.period}</p>}
                            {selectedProject.note && <p><em>{selectedProject.note}</em></p>}
                            {selectedProject.details && (
                            <ul>
                                {selectedProject.details.map((item, index) => (
                                <li key={index}>{item}</li>
                                ))}
                            </ul>
                            )}
                        </div>
                        </div>
                    )}
                </div>


                <div id="contact" className="contact-section" style={{ minHeight: '100vh', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contact Me</h2>
                    {/* <p style={{ textAlign: 'center', maxWidth: '600px', marginBottom: '2rem' }}> */}
                        <p>
                        Feel free to reach out for job opportunities, project collaboration, or tech discussions. I’m always open to connect!
                    </p>

                    <div className="contact-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', width: '100%' }}>
                        
                        {/* Contact Info */}
                        <div className="contact-info" style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <i className="fas fa-user" style={{ color: '#4B9CD3' }}></i>
                            <span>CHENNA ASHWATH NARAYANA</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <i className="fas fa-envelope" style={{ color: '#E63946' }}></i>
                            <a href="mailto:ashwathchenna2002@gmail.com" style={{ color: '#333', textDecoration: 'none' }}>ashwathchenna2002@gmail.com</a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <i className="fas fa-phone" style={{ color: '#2A9D8F' }}></i>
                            <a href="tel:+917675033896" style={{ color: '#333', textDecoration: 'none' }}>+91 76750 33896</a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <i className="fas fa-map-marker-alt" style={{ color: '#F4A261' }}></i>
                            <span>25/182, Shanth Kumari Street, Proddatur, Kadapa, Andhra Pradesh, 516360</span>
                        </div>
                        </div>

                        {/* Google Map */}
                        <div className="contact-map" style={{ flex: '1', minWidth: '300px' }}>
                        <iframe
                            title="Location Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.3107395040665!2d78.55362007497763!3d14.75046857452592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3e46ff0ef2c03%3A0x91d71c38b2ce5b04!2s25%2F182%2C%20Shanthi%20Kumari%20St%2C%20Proddatur%2C%20Andhra%20Pradesh%20516360!5e0!3m2!1sen!2sin!4v1716281845362!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            style={{ border: '0', borderRadius: '12px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>
  )
}

export default Landingpage
