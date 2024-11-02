import { CONTACT } from '../constants'; // Ensure CONTACT is imported
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity: 0, y:-100}}
      transition={{duration:1}}
      className="my-10 text-center text-4xl">Get in Touch</motion.h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p> {/* Access properties correctly */}
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className='border-b'>{CONTACT.email}</a> {/* Use mailto link for email */}
      </div>
    </div>
  );
};

export default Contact;
