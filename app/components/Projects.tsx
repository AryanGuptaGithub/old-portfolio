import Image from "next/image";

const projects = [
  {
    img: "/Dice Game.png",
    title: "Dice Game App",
    desc: "A fun React-based dice rolling game with dynamic score tracking.",
    link: "https://react-dice-game-opal.vercel.app/",
  },
  {
    img: "/MusicPlayer.png",
    title: "Music Player",
    desc: "Fully Frontend made with HTML and CSS with functional buttons and interactive website.",
    link: "https://musicplayer-bhuo.onrender.com/",
  },
  {
    img: "/JobPortal.png",
    title: "Full Stack JobPortal Application",
    desc: "A full-stack job portal application where users can register, post jobs, and apply.",
    link: "https://full-stack-job-protal-web-applicati.vercel.app/jobs",
  },
  {
    img: "/aichatbot.png",
    title: "Ai Chatbot",
    desc: "An interactive chatbot powered by Gemini API, providing AI-driven responses.",
    link: "https://gemini-chatbot-app-tan.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <Image
              src={project.img}
              alt={project.title}
              width={600}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
            <div className="project-info">
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <i className="bx bx-link-external" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
