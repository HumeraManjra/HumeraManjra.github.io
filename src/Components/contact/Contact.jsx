import React from 'react'
import './contact.css'
import emailjs from 'emailjs-com'

function Contact() {

  function sendEmail(e){
      e.preventDefault()

      emailjs.sendForm("service_9qim7hn", "template_iw9e3lr", e.target, "1D-DBk4x9vTQCo6Of")
      .then((response)=>{
            console.log(response)
      }).catch((error) => {
        console.log(error)
      })
  }


  return (
    <section id="contact" className='contact__section container'>
      <h2>Contact</h2>
      <article className="form__wrapper">
        <form action="" onSubmit={sendEmail}>
          <div className="name__email__wrapper">
              <div className="name">
                <label htmlFor="name">name</label>
                <input type="text" name='name'/>
              </div>
              <div className="email">
                <label htmlFor="email">email</label>
                <input type="email" name='user_email'/>
              </div>
          </div>
          <div className="message__wrapper">
            <label htmlFor="message">message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
          </div>
          <div className="btns_wrapper">
            <button className="send_msg_btn" type='submit' value='Send'>send message</button>
            <button className="reset_btn" type='reset' value='Reset'>reset</button>
          </div>
        </form>
      </article>
    </section>
  )
}

export default Contact