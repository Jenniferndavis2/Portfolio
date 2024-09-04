import { NavLink } from 'react-router-dom';
import PlaceholderImage from '../assets/placeholder_image.png';

// Replace these variables with your information
const firstName = 'Jennifer';
const jobTitle = 'Tech Analyst';
const company = 'Asurion';
const mainDuty = 'Scrum Master'; 
const jobLocation = 'Nashville, TN';
const briefJobDescription = 'As a Tech Analyst, I facilitate scrum meetings, remove developer impediments, implement agile practices, protect developers time, manage the product backlog, engage with stakeholders, and create user stories. Key skills I utilize daily include team building, process improvement, agile expertise, communication, leadership, problem-solving, and time management.';
const careerObjective = 'My career objective is to remain in a role that allows me to lead and support developers while continuing to grow and advance in my position.';
const personalLife = 'Outside of my professional life, I love traveling abroad, sightseeing, and trying new restaurants. I also enjoy attending live concerts and jazz festivals. When I have the opportunity, I relish in roller skating and taking nice walks in beautiful parks. Volunteering is a significant part of my life. I volunteer for the finance team at my local church and at Generations Live, a women/"s /conference for all ages. Additionally, I assist at the Dove Awards (a gospel music award show), ensuring that talents needs are met, providing superior customer service in excellence. I make sure the talent is where they are need to be on time to keep the show running smoothly. I find joy in serving and participating in community events, helping various groups whenever possible. Mentoring is also a passion of mine, and I do so through the BEST ERG group at "Asurion" and Women in Technology of Tennessee. Im passionate about building people up and helping everyone see purpose in their daily lives. I get the most satisfaction from mentoring; and I do so through "Asurion" and Women in Technology of Tennessee. One of my proudest personal achievements is helping parent my nephew. I love spending time with my family and friends. I believe in loving God and loving people and treating them well which guide both my personal and professional life';


const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={PlaceholderImage} alt="placeholder image" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} working for, {company} on {mainDuty} located in, {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;