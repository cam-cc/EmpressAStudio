import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
// import Map from "../map";
import axios from "axios";
import { toast } from "react-toastify";
import Termsofuse from "../termsofuse";

class ContactPage extends Component {
  state = {
    response: "",
    sending: false,
  };

 validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please enter your name")
    .min(3, "Your name must contain at least 3 letters."),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email address."),
  phone: Yup.string().required("Please enter your phone number."),
  subject: Yup.string()
    .min(3, "The subject must have at least 3 letters.")
    .required("Please enter the subject you want to write to us about."),
  message: Yup.string()
    .min(3, "Your message is too short.")
    .required("Please enter your message."),
});
  handleSendMessage = async (
    message,
    { setSubmitting, setStatus, resetForm }
  ) => {
    this.setState({ sending: true });
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const newMessage = {
      authorName: message.name,
      authorEmail: message.email,
      authorPhone: message.phone,
      subject: message.subject,
      body: message.message,
    };
    try {
      const response = await axios.post(`${baseUrl}/api/contacts`, newMessage, {
        headers: {
          "x-auth-token-fmb-app": process.env.REACT_APP_SEND_EMAIL_AUTH_TOKEN,
        },
      });

      toast.success("message successfully sent!");
      this.setState({ response, sending: false });
      resetForm({});
      setStatus({ success: true });
      this.props.history.replace("/home");
    } catch (ex) {
      this.setState({ sending: false });
      setStatus({ success: false });
      setSubmitting(false);
      toast.error(
        "error"
      );
    }
  };
  render() {
    return (
      <div className="contact-page-main-container">
        <div className="header-contact-page">
          <div className="overlay"></div>
          <h1>CONTACT US</h1>
        </div>

        <div className="contact-form-main-container">
          <div className="form-wrapper">
            <Formik
              validationSchema={this.validationSchema}
              initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
                phone: "",
              }}
              onSubmit={this.handleSendMessage}
            >
              {({
                handleChange,
                touched,
                setFieldTouched,
                errors,
                handleSubmit,
              }) => (
                <>
                  <div className="form-container">
                    <div className="form-control">
                      <input
                        type="text"
                        onChange={handleChange("name")}
                        onBlur={() => setFieldTouched("name")}
                        placeholder="Name"
                      />
                    </div>
                    {touched["name"] && (
                      <span className="contact-form-error-message">
                        {errors["name"]}
                      </span>
                    )}
                  </div>
                  <div className="form-container">
                    <div className="form-control">
                      <input
                        type="text"
                        onChange={handleChange("email")}
                        onBlur={() => setFieldTouched("email")}
                        placeholder="Email"
                      />
                    </div>
                    {touched["email"] && (
                      <span className="contact-form-error-message">
                        {errors["email"]}
                      </span>
                    )}
                  </div>
                  <div className="form-container">
                    <div className="form-control">
                      <input
                        type="text"
                        onChange={handleChange("subject")}
                        onBlur={() => setFieldTouched("subject")}
                        placeholder="Suject"
                      />
                    </div>
                    {touched["subject"] && (
                      <span className="contact-form-error-message">
                        {errors["subject"]}
                      </span>
                    )}
                  </div>
                  <div className="form-container">
                    <div className="form-control">
                      <input
                        type="text"
                        onChange={handleChange("phone")}
                        onBlur={() => setFieldTouched("phone")}
                        placeholder="phone"
                      />
                    </div>
                    {touched["phone"] && (
                      <span className="contact-form-error-message">
                        {errors["phone"]}
                      </span>
                    )}
                  </div>
                  <div className="form-container">
                    <div className="form-control">
                      <textarea
                        type="text"
                        onChange={handleChange("message")}
                        onBlur={() => setFieldTouched("message")}
                        placeholder="Message Details"
                      ></textarea>
                    </div>
                    {touched["message"] && (
                      <span className="contact-form-error-message">
                        {errors["message"]}
                      </span>
                    )}
                  </div>

                  {this.state.sending ? (
                    <div className="loading-spinner-container">
                      <div class="loader"></div>
                    </div>
                  ) : (
                    <div>
                      <div className="submit-btn-wrapper">
                        <div className="btn-container" onClick={handleSubmit}>
                          Submit
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </Formik>
          </div>
          <div className="contact-detail-wrapper">
            <div className="contact-item">
              <h3>Address</h3>
              <p>1750 Ernest Ave, London Ontario</p>
              <p>
                <span>Phone:</span> (519) 630 6779
              </p>
              <p>empressastudio@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3>Hours of Operation</h3>
              <p>Mondays : 4pm to 8pm</p>
              <p>Tuesdays : 4pm to 8pm</p>
              <p>Wednesday - Friday : 1pm to 8pm</p>
              <p>Saturdays : 2pm to 8pm</p>
              <p>Sundays : 12pm to 8pm</p>
              <p>For special events please contact!</p>
            </div>
          </div>
        </div>
        {/* <div className="map-container">
          <Map />
        </div> */}
        <div>
          <Termsofuse/>
        </div>
      </div>
    );
  }
}

export default ContactPage;
