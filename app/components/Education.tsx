const timelineItems = [
  {
    year: "2021",
    title: "Diploma In Electrical Engineering",
    desc: "Completed my diploma in Electrical Engineering, where I developed strong problem-solving skills and analytical thinking.",
  },
  {
    year: "2025",
    title: "Bachelor in Computer Application",
    desc: "Completed my Graduation with Bachelor in Computer Application in June, 2025.",
  },
  {
    year: "2022",
    title: "Internship at Skill Mumbai",
    desc: "Started my career as a Graphic Designer and Content Creator in an edtech based institute in Mumbai.",
  },
  {
    year: "2024",
    title: "Job at Skill Mumbai",
    desc: "Joined SkillMumbai faculty team as a Technical Instructor in Electrical and Electronics. Launched my course in Basic Electrical and Electronics on the E-learning portal.",
  },
];

export default function Education() {
  return (
    <section className="education" id="education">
      <h2 className="heading">Education</h2>
      <div className="timeline-items">
        {timelineItems.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-date">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
