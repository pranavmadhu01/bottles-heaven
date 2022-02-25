import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTaxi } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import{faShip } from '@fortawesome/free-solid-svg-icons'
import './services.css'
export default function Services(){
    return(
        <div className="services-wrapper" id="services">
            <div className="headline-wrapper">
                <h1>SERVICES</h1>
                <br></br>
                <p>"Good customer service costs less than bad customer service." Sally Gronow</p>
            </div>
            <div className="services-inner-wrapper">
                <div className="services">
                    <h1> Customer Services</h1>
                    <FontAwesomeIcon icon={faTaxi}  className="icon"/>
                    <p>Customer Service is our priority, we are quick on Emails and Whatsapp.<br></br>bottlesheaven@gmail.com /<a href="https://wa.me/c/919321763795">9321763795</a><br></br>Within 24HOURS your query would be solved.</p>
                </div>
                <div className="services">
                    <h1>Bulk Orders</h1>
                    <FontAwesomeIcon icon={faCartShopping} className="icon" />
                    <p>Yes, you read this correct we also provide bulk orders for that we would need your constant support.How?<br></br>1.5 months Prior notice so quotation would be provided and we can take things further.</p>

                </div>
                <div className="services">
                    <h1>Shipping</h1>
                    <FontAwesomeIcon icon={faShip}  className="icon"/>
                    <p>Shipping is all over INDIA (we are based in Mumbai)Shipping charges are applicable as per order and location.</p>

                </div>


            </div>
        </div>
    )

}