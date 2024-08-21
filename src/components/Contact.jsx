import React, {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs  from 'emailjs-com'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target

    
    setForm({ ...form, [name]: value });

  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form); 
    setLoading(true)

    emailjs.send(
      'service_ppggetc', // replace with your EmailJS Service ID
      'template_369nstg', // replace with your EmailJS Template ID
      form,
      'eZlX0ZPyVjb0fuMm-' 
    ).then((result) => {

      setLoading(false)
      alert("Your message has been sent!")

      setForm({
        name: '',
        email: '',
        message: ''
      })

    }, (error) => {

      setLoading(false)
      alert("Something went wrong!")

    });


  };

  return (
    <div className='xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl max-w-[520px] border-[1px] border-green-400"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-4">

          <label className='flex flex-col'>
            {/* <span className="text-white font-medium mb-4">Your Name</span> */}
            <input type="text" name='name' value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className='bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' required />
          </label>

          <label className='flex flex-col'>
            {/* <span className="text-white font-medium mb-4">Your Email </span> */}
            <input type="email" name='email' value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className='bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' required />
          </label>

          <label className='flex flex-col'>
            {/* <span className="text-white font-medium mb-4">Your Message</span> */}
            <textarea type="text" name='message' value={form.message}
            rows="7"
            onChange={handleChange}
            placeholder="Your Message"
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' required />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
{/* 
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"  
      >
        <EarthCanvas />
        </motion.div> */}
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
