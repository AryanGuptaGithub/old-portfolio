const services = [
  {
    title: "UI Design",
    desc: "Designing modern, responsive, and user-friendly interfaces that enhance user experience.",
  },
  {
    title: "Frontend Developer",
    desc: "Building dynamic, interactive web apps with React, JavaScript, and responsive design principles.",
  },
  {
    title: "Backend Developer",
    desc: "Creating secure and scalable APIs with Node.js, Express, and MongoDB.",
  },
  {
    title: "Full Stack Developer",
    desc: "Delivering complete solutions by combining frontend and backend technologies.",
  },
  {
    title: "Tester",
    desc: "Ensuring quality with manual and automated testing to deliver bug-free applications.",
  },
  {
    title: "React Developer",
    desc: "Specializing in React.js for building component-driven, efficient, and maintainable applications.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <h2 className="heading">Services</h2>
      <div className="service-container">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <div className="service-info">
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
