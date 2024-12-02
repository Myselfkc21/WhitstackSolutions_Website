import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "0f9d770e-b20d-4e80-a6d9-efaaad812b37");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="FormContainer">
      <div className="form-part">
        <h2>Let's Start a Conversation.</h2>
        <div className="formContent">
          <div className="left">
            <h3>Ask How We Can Help You</h3>
            <div className="QandA">
              <p>
                At Whitstack Solutions, we value open communication and are here
                to assist you with your needs. Whether you have questions about
                our services, need support, or want to discuss a project, feel
                free to reach out to us.
              </p>
              <p
                id="heads"
                style={{
                  color: "black",
                  padding: "0px 0px",
                  fontWeight: "700",
                  paddingBottom: "0",
                }}
              >
                Our Office
              </p>
              <p style={{ color: "black" }}>
                Whitstack Solutions <br />
                T-hub, Raidurg, Knowledge City <br />
                Hyderabad, Telangana, 500032 <br />
                India.
              </p>

              <p
                style={{
                  color: "black",
                  cursor: "pointer",
                  paddingBottom: "0",
                }}
                onClick={() => window.open("https://wa.me/7330639555")}
              >
                +91 7330639555
              </p>
              <hr />
              <p>
                Whitstack Solutions Inc <br /> Downingtown, PA USA- 19335
                <p
                  style={{
                    color: "black",
                    cursor: "pointer",
                    paddingTop: "15px",
                    paddingBottom: "10px",
                    fontWeight: "400",
                  }}
                  onClick={() => window.open("https://wa.me/9173340128")}
                >
                  +1 9173340128
                </p>
              </p>

              <p>
                <b>Email:</b>
              </p>
              <a
                // href="https://outlook.office.com/mail/inbox/id/AAQkAGMwMjA4Zjg4LTg4MzQtNDRhYy04ZjQyLTc3NDUyYzAzZjc3YgAQAFeM%2FU3HhUdHs5etJj6YHL8%3D"
                style={{
                  cursor: "pointer",
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
                onClick={() => {
                  navigator.clipboard.writeText("info@whistack.com");
                  window.open(
                    "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpDzBlsgxBdQjNvjNKMHqQrSmMTLmqBgvmsjQNlQkPVNCHGZFdXRMdHqdQQdSZlpJGplSL"
                  );
                }}
              >
                info@whitstack.com
              </a>
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div className="ins">
              <label htmlFor="FN">First Name</label>
              <input type="text" name="FirstName" id="FN" />
            </div>
            <div className="ins">
              <label htmlFor="LN">Last Name</label>
              <input type="text" name="LastName" id="LN" />
            </div>
            <div className="ins">
              <label htmlFor="mail">Email</label>
              <input type="email" name="Email" id="mail" />
            </div>
            <div className="ins">
              <label htmlFor="mess">Your Message</label>
              <textarea
                rows="auto"
                cols="auto"
                name="Message"
                id="mess"
              ></textarea>
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
