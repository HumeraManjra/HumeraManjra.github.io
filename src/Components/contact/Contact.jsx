import React from 'react'
import './contact.css'

function Contact() {
  return (
    <section id="contact" className='contact__section container'>
      <h2>Contact</h2>
      <article className="form__wrapper">
        <form action="">
          <div className="name__email__wrapper">
              <div className="name">
                <label htmlFor="name">name</label>
                <input type="text" />
              </div>
              <div className="email">
                <label htmlFor="email">email</label>
                <input type="text" />
              </div>
          </div>
          <div className="message__wrapper">
            <label htmlFor="message">message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
          </div>
          <div className="btns_wrapper">
            <button className="send_msg_btn">send message</button>
            <button className="reset_btn">reset</button>
          </div>
        </form>
      </article>
    </section>
  )
}

export default Contact