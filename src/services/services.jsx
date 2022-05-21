import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import { RiRefund2Fill } from "react-icons/ri";
import "./services.css";
export default function Services() {
  return (
    <div className="services-wrapper" id="services">
      <div className="headline-wrapper">
        <h1>SERVICES</h1>
        <br></br>
        <p>
          "Good customer service costs less than bad customer service." Sally
          Gronow
        </p>
      </div>
      <div className="services-inner-wrapper">
        <div className="services">
          <FontAwesomeIcon icon={faTaxi} className="icon" />

          <h1> Customer Services</h1>
          <p>
            Customer Service is our priority, we are quick on Emails and
            Whatsapp.<br></br>bottlesheaven@gmail.com /
            <a href="https://wa.me/c/919321763795">9321763795</a>
            <br></br>Within 24HOURS your query would be solved.
          </p>
        </div>
        <div className="services">
          <FontAwesomeIcon icon={faCartShopping} className="icon" />

          <h1>Bulk Orders</h1>
          <p>
            Yes, you read this correct we also provide bulk orders for that we
            would need your constant support.How?<br></br>1.5 months Prior
            notice so quotation would be provided and we can take things
            further.
          </p>
        </div>
        <div className="services">
          <FontAwesomeIcon icon={faShip} className="icon" />

          <h1>Shipping</h1>
          <p>
            Shipping is all over INDIA (we are based in Mumbai)Shipping charges
            are applicable as per order and location.
          </p>
        </div>
        <div className="services return">
          <RiRefund2Fill className="icon" />

          <h1>Return and Refund</h1>
          <p>
            A Return and Refund policy usually consists of:<br></br>If the
            product is damaged.<br></br>If a product is delivered wrong.
          </p>
        </div>
      </div>
    </div>
  );
}
