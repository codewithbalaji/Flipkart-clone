import "../Card/card.css";
import grocery from "../../assets/grocery.webp"
import mobiles from "../../assets/mobiles.webp"
import Fashion  from "../../assets/Fashion.webp"
import Electronics from "../../assets/Electronics.webp"
import home from "../../assets/home.webp"
import appliances from "../../assets/appliances.webp"
import travel from "../../assets/travel.webp"
import toys from "../../assets/toys.webp"

const Card = () => {
  return (
    <section className="card">
      <div className="card-main">
        <div>
          <img src={grocery} alt="" />
          <p>Grocery</p>
        </div>
        <div>
          <img src={mobiles} alt="" />
          <p>Mobiles</p>
        </div>
        <div>
          <img src={Fashion} alt="" />
          <p>Fashion</p>
        </div>
        <div>
          <img src={Electronics} alt="" />
          <p>Electronics</p>
        </div>
        <div>
          <img src={home} alt="" />
          <p>Home & Furniture</p>
        </div>
        <div>
          <img src={appliances} alt="" />
          <p>Appliances</p>
        </div>
        <div>
          <img src={travel} alt="" />
          <p>Travel</p>
        </div>
        <div>
          <img src={toys} alt="" />
          <p>Beauty, Toys & More</p>
        </div>
      </div>
    </section>
  )
}

export default Card