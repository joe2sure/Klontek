import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import "./Contact.css";
import Back from "../../components/Back";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (!process.env.REACT_APP_EMAILJS_SERVICE_ID || !process.env.REACT_APP_EMAILJS_TEMPLATE_ID || !process.env.REACT_APP_EMAILJS_PUBLIC_kEY) {
      console.error('EmailJS environment variables are not set');
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'joe2sure1@gmail.com'
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_kEY
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      console.log('FAILED...', error);
      setSubmitStatus('error');
    });
  };

  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.45932733244!2d3.1191206272488564!3d6.548376812122638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1652535615693!5m2!1sen!2sus';

  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map} title="Map of Lagos, Nigeria"></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Lagos, Abuja, Enugu, Portharcourt, </p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@klontek.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +234 7017006937</p>
                <p> +234 8164502055</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className='flexSB'>
                <input 
                  type='text' 
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder='Name' 
                  required 
                />
                <input 
                  type='email' 
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder='Email' 
                  required 
                />
              </div>
              <input 
                type='text' 
                name='subject'
                value={formData.subject}
                onChange={handleInputChange}
                placeholder='Subject' 
                required 
              />
              <textarea 
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                placeholder='What do you want to build...'
                cols='30' 
                rows='10'
                required
              ></textarea>
              <button type="submit" className='primary-btn'>SEND MESSAGE</button>
            </form>

            {submitStatus === 'success' && (
              <p className="success-message">Your message has been sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="error-message">There was an error sending your message. Please try again.</p>
            )}

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE TIKTOK YOUTUBE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage;