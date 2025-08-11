import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Contact.css";
export default function Contact() {
  return (
    <div>
      {" "}
      <Navbar />
      <section class="contact-section wrapper ">
        <h2>Contact Me</h2>
        <form
          action="https://formspree.io/f/mrblkobl"
          method="POST"
          class="contact-form"
        >
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" />

          <label for="email">
            Email<span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />

          <label for="message">
            Message<span>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}
