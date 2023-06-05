import Restaurant from "../assets/restauranfood.jpg";
import "../style/hero.css";
export const Hero = () => (
  <>
    <div className="hero">
      <div className="desc">
        <h1>Little Lemon</h1>
        <small>Chicago</small>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          suscipit alias iste! Deserunt quidem, adipisci officia dolor itaque
          reiciendis distinctio asperiores perspiciatis iste? Soluta, odit eos
          temporibus iste magni animi aspernatur ducimus 
        </p>
        <button className="reserve">Reserve a table</button>
      </div>
        <img className="heroimg" src={Restaurant} alt="food-image" />
    </div>
  </>
);
