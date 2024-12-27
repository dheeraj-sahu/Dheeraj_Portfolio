import React, { useState } from 'react';
import './Contact.css';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="contact-page" id='contact'>
            <h1 className="contact-heading">Get in Touch</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} />
                <button type="submit" className="submit-btn">Submit</button>
            </form>
            <div className="social-links"
                

            >
                <div className="item">
                    <a href="https://www.linkedin.com/in/dheerajsahu/"> <FaLinkedin /></a>
                </div>
                <div className="item">
                    <a href="https://github.com/dheeraj-sahu"> <FaGithub /></a>
                </div>
                <div className="item">
                    <a href="mailto:dheerajroot01@gmail.com" target="_blank" rel="noopener noreferrer">
                        <SiGmail />
                    </a>

                </div>
                <div className="item">
                    <a href="https://leetcode.com/u/Dheeraj_sahu/"> <SiLeetcode /></a>
                </div>
                <div className="item">
                    <a href="https://www.geeksforgeeks.org/user/im_dheerajsahu/"> <SiGeeksforgeeks /></a>
                </div>
                <div className="item">
                    <a href="https://www.instagram.com/_dheeraj.sahu/"> <FaSquareInstagram /></a>
                </div>
                <div className="item">
                    <a href="https://x.com/_dheeraj_sahu"> <FaSquareXTwitter /></a>
                </div>


            </div>


        </div>
    );
};

export default Contact;
