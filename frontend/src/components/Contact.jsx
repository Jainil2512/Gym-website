import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);

  /*const backendUrl = import.meta.env.backend_url;*/


  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = {
        name,
        email,
        message,
        contact,
      };
      console.log('Form data:', formData); 
  
      const { data } = await axios.post(
        "https://dev-fitts-backend.onrender.com/send/mail" ,
        formData,
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        }
      );
      setName('');
      setEmail('');
      setMessage('');
      setContact('');
      toast.success(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };
  

  return (
    <section className="contact">
      <form onSubmit={sendMail}>
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>contact </label>
          <input
            type="number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>


        <div>
          <label>Message</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {loading && <ClipLoader size={20} color="white" />}
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
