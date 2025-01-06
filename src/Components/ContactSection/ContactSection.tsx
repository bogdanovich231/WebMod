import { Id } from '../../utils/Intefrace/SlugInterface';
import ContactForm from './ContactForm/ContactForm';
import styles from './ContactSection.module.css';

function ContactSection({ id }: Id) {
  return (
    <div id={id} className={styles.containerContact}>
      <h2>
        Let’s <b className={styles.softText}>collaborate</b>
      </h2>
      <p>
        Fill out the form, send us an email, or give us a call. Tell us about your project, and we’ll be happy to
        discuss your ideas and needs.
      </p>
      <ContactForm />
    </div>
  );
}

export default ContactSection;
