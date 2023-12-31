import React, { useState } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Spinner from '../spinner/Spinner'
import Sendmodal from '../sendmodal/Sendmodal'

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sended, setSended] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zxmkxqg', 'template_t7ukpua', form.current, 'ajU9PRfTYxPK_Azw3')
    setIsSending(true);
    setTimeout(() => {
      e.target.reset();
      setIsSending(false)
      setSended(true);
      setTimeout(() => {
        setSended(false)
      }, 2000)
    }, 2000);
  };


  return (
    <section id='contact'>
      <h5>Si necesitas información</h5>
      <h2>Contáctanos</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
          <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>jcf.daw@gmail.com</h5>
            <a href='mailto:jcf.daw@gmail.com'>Send a message</a>
          </article>
          <article className='contact_option'>
          <RiMessengerLine className='contact_option-icon'/>
            <h4>Direct Message</h4>
            <h5>Juanquidev</h5>
            <a href='https://twitter.com/messages/469716885-1505207674513891335' target='_blank'>Send a twitter message</a>
          </article>
          <article className='contact_option'>
          <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+34603558902</h5>
            <a href='https://api.whatsapp.com/send?phone=603558902' target='_blank'>Send a whatsapp</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>{isSending ? <Spinner /> : 'Enviar Mensaje'}</button>
          {sended && <Sendmodal />}
        </form>
      </div>
    </section>
  )
}

export default Contact