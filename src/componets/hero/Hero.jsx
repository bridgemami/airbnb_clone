import s from "./hero.module.css";
import image from "/images/photo-grid.png";

export default function Hero() {
  return (
  <section className={s.container}>
    <img src={image} alt="photo collage" className={s.image} />
    <div className={s.textContainer}>
    <h1 className={s.header}>Online Experiences</h1>
    <p className={s.text}>
      Join unique interactive activities led by one-of-a-kind hosts—all without
      leaving home.
    </p>
    </div>
  </section>)
}
