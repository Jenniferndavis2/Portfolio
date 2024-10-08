import { NavLink } from "react-router-dom";
import PlaceholderHero from '../assets/placeholder_hero_background.jpg'

const fullName = 'Jai~D';
const personalQuote = 'Commit to the Lord whatever you do, and your plans will succeed. So do your best daily and you wont live in regret.';
const professionalSummary = 'IT Professional with 15 years of technical skills, with proven experience in Operations Support, Technical support, superior customer service, and sales. A solid track record in agile project management with familiarity with a broad range of programming languages and interactive user interfaces. Possessing knowledge of the entire web development process, command line, and shell scripting. Career supported by the pursuit of a W3C Front-Back End Developer Professional Certificate and a Google UX Design Certificate.';

const Home = () => {
  return (
    <main className="home-container">
      <section className="home-hero home-subsection">
        <h2 className="text-4xl mb-2">Hi, I am {fullName}</h2>
        <p className="subsection-paragraph">{personalQuote}</p>
        <NavLink to="/contact">
        Contact Me
        </NavLink>
        {/* Replace the src with your own placeholder and change the alt to match the description */}
        <img className="hero-background" src={PlaceholderHero} alt="placeholder hero image" />
      </section>
      <section className="overview home-subsection bg-pink">
        <h3 className="subsection-intro-header">Introduction</h3>
        <h2 className="subsection-big-header">Overview.</h2>
        <p className="subsection-paragraph">{professionalSummary}</p>
        <NavLink to="/about">
        Learn More About Me
        </NavLink>
      </section>
      <section className="projects home-subsection">
        <h3 className="subsection-intro-header">My Works</h3>
        <h2 className="subsection-big-header">Projects.</h2>
        <p className="subsection-paragraph"> The projects I have worked on demonstrate my skills and experience through real-life examples of my work. Each project is briefly described and includes links to code repositories that showcases my ability to tackle challenging problems. If you are interested in my work click on the link below to go to the project page.</p>
        <NavLink to="/projects">
        View Projects
        </NavLink>
      </section>
    </main>
  )
}

export default Home