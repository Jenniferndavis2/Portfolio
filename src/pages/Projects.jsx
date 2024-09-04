import { FaGithub } from "react-icons/fa6";
import weatherpic from "../assets/weather-app-pic.jpg";

// Replace the projects inside the myProjects array with your own projects. Right now the array has sample data. You can add as many projects as you want. Each project should be an object with the following
// properties:
// - title: The title of the project
// - description: A description of the project
// - repositoryLink: A link to the GitHub repository of the project
// You can also add more properties if you want to display more information about your projects.
const myProjects = [
  {
    title: 'Project 1',
    description: 'Weather App that displays the current weather in a city',
    repositoryLink: 'Link to the GitHub repository',
    projectImage: weatherpic,
  },
  {
    title: 'Project 2',
    description: 'SMJ Player is a music player that allows you to play music from your local storage',
    repositoryLink: 'Link to the GitHub repository',
    projectImage:"",
  },
  {
    title: 'Project 3',
    description: 'Store Manager is a web application that allows you to manage your store inventory',
    repositoryLink: 'Link to the GitHub repository',
    projectImage:"",
  },
  {
    title: 'Project 4',
    description: 'Description of project 4',
    repositoryLink: 'Link to the GitHub repository',
    projectImage:"",
  },
  {
    title: 'Project 5',
    description: 'Description of project 5',
    repositoryLink: 'Link to the GitHub repository',
    projectImage:"",
  },
];
const Projects = () => {
  return (
    <main className="projects-container">
      {myProjects.map((project) => (
        <section key={project.title} className="project-item border border-2 rounded-lg">
          <section className="project-image-container">
            {project.projectImage ? <img src={project.projectImage} alt="project" /> :<FaGithub />}         
          </section>
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-lg">{project.description}</p>
          <p>Check out the link to the project repository <a href={project.repositoryLink} target="_blank">Here</a> </p>

        </section>
      ))}
    </main>
  )
}

export default Projects