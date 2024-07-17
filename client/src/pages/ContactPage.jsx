import Header from "../components/Header";
import { FaRegMap, FaPhoneAlt, FaClock } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  const combinedText = {
    text1: "#lets's_talk",
    text2: "Leave A Message, We love to hear from you!",
    url: "https://nike0197.netlify.app/assets/1-f4da6767.jpg",
  };
  return (
    <>
      <div>
        <Header combinedText={combinedText} />
      </div>
      <div className="contact-details">
        <div className="company-details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency location or contact us today</h2>
          <h3>Head Office</h3>
          <div className="contactAddress">
            <ul type="none">
              <li>
                <div>
                  <FaRegMap />
                </div>{" "}
                Kopri, Thane East
              </li>
              <li>
                <div>
                  <FiMail />
                </div>{" "}
                reflect360.0@gmail.com
              </li>
              <li>
                <div>
                  <FaPhoneAlt />
                </div>{" "}
                +91 1234567890
              </li>
              <li>
                <div>
                  <FaClock />
                </div>{" "}
                Monday to Saturday: 9:00am to 10:00pm
              </li>
            </ul>
          </div>
        </div>
        <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15073.394856258741!2d72.9804253!3d19.1799657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8da14eacea9%3A0xb4f1e032d9e4fc41!2sK.C.%20College%20of%20Engineering%20%26%20Management%20Studies%20%26%20Research!5e0!3m2!1sen!2sin!4v1721244059179!5m2!1sen!2sin"
            height="450"
            style={{ border: "0", width: "-webkit-fill-available" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default ContactPage;
