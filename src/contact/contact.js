import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default  function Contact(){
    return(
        <div className="contact-wrapper" id="contact">
            <div className='contact-one'>
                <h1>CONTACT US</h1>
                <p>We strive to stay in communication with our clients.<br></br>Have a question about our business, or want to see if we match your specific needs?<br></br> Send us a message, or Whatsapp us.<br></br> We're always happy to meet new customers!Message us on WhatsApp</p>
                <span><a href="https://wa.me/c/919321763795"><FontAwesomeIcon icon="fa-brands fa-whatsapp" />contact on watsApp</a></span>
            </div>
            <div className="contact-two">
                    <h3>Working days and time</h3>
                    <table>
                        <tr>
                            <td>MON</td>
                            <td>01:00 pm</td>
                            <td>-</td>
                            <td>09:00pm</td>
                        </tr>
                        <tr>
                            <td>TUE</td>
                            <td>01:00 pm</td>
                            <td>-</td>
                            <td>09:00pm</td>
                        </tr>
                        <tr>
                            <td>WED</td>
                            <td>01:00 pm</td>
                            <td>-</td>
                            <td>09:00pm</td>
                        </tr>
                        <tr>
                            <td>THU</td>
                            <td>01:00 pm</td>
                            <td>-</td>
                            <td>09:00pm</td>
                        </tr>
                        <tr>
                            <td>FRI</td>
                            <td>01:00 pm</td>
                            <td>-</td>
                            <td>09:00pm</td>
                        </tr>
                        <tr>
                            <td>SAT</td>
                            <span>Closed</span>
                        </tr>
                        <tr>
                            <td>SUN</td>
                            <span>Closed</span>
                        </tr>
                    </table>
            </div>



        </div>
        
    )

}