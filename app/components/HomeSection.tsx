import Image from "next/image";

export default function HomeSection() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, It&apos;s <span>Aryan</span>
        </h1>
        <h3 className="text-animation">
          I&apos;m a <span></span>
        </h3>
        <p>
          I&apos;m Aryan Gupta, a passionate Full Stack Developer with a strong
          foundation in MERN stack and modern web technologies. I enjoy building
          interactive, user-friendly applications and turning ideas into reality
          through clean and efficient code.
        </p>
        <div className="social-icons">
          <a href="#"><i className="bx bxl-linkedin" /></a>
          <a href="#"><i className="bx bxl-github" /></a>
          <a href="#"><i className="bx bxl-instagram" /></a>
          <a href="#"><i className="bx bxl-twitter" /></a>
        </div>
        <div className="btn-group">
          <a href="#" className="hire btn">Hire</a>
          <a href="#contact" className="Contact btn">Contact</a>
        </div>
      </div>
      <div className="home-img">
        <Image src="/103.jpg" alt="My Image" width={500} height={500} priority />
      </div>
    </section>
  );
}
