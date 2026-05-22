import Image from "next/image";

const testimonials = [
  {
    img: "/1.png",
    name: "Mehul Shah",
    text: "Aryan is a talented developer who quickly adapts to new technologies. His problem-solving skills and dedication make him a great team player.",
  },
  {
    img: "/2.png",
    name: "Prahant Yadav",
    text: "Aryan is a talented developer who quickly adapts to new technologies. His problem-solving skills and dedication make him a great team player.",
  },
  {
    img: "/3.jpg",
    name: "Josbert Fernandis",
    text: "Aryan is a talented developer who quickly adapts to new technologies. His problem-solving skills and dedication make him a great team player.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-box">
        <h2 className="heading">Testimonials</h2>
        <div className="wrapper">
          {testimonials.map((t, index) => (
            <div className="testimonial-item" key={index}>
              <Image src={t.img} alt={t.name} width={150} height={150} />
              <h2>{t.name}</h2>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <i className="bx bxs-star" id="star" key={i} />
                ))}
              </div>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
