import { useEffect } from 'react';
import styles from './Cookies.module.css';
import { useIntersectionObserver } from '../../utils/UseIntersectionObserver/UseIntersectionObserver';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

function Cookies() {
  useEffect(() => {
    const cleanupObserver = useIntersectionObserver(styles.containerCookies, styles.visible);
    return () => {
      cleanupObserver();
    };
  }, []);

  return (
    <div className={styles.containerCookies}>
      <ScrollToTop />
      <div className={styles.titleCookies}>
        <h2>
          <b className={styles.softText}>Cookies</b> Policy
        </h2>
        <p>
          This Cookies Policy explains how we use cookies to collect and process personal data submitted through forms
          on our website.
        </p>
      </div>
      <ol className={styles.mainListCookies}>
        <li>
          <h3>What Are Cookies?</h3>
          <p>
            Cookies are small text files stored on your device when you visit our website. They help enhance user
            experience by remembering preferences and collecting form data for submission.
          </p>
        </li>
        <li>
          <h3>How We Use Cookies</h3>
          <p className={styles.extraTitle}>We use cookies exclusively for:</p>
          <ul className={styles.subListCookies}>
            <li>Storing information entered in forms to facilitate submission and avoid re-entering data.</li>
            <li>Sending form data securely to our servers for processing.</li>
            <li>Ensuring website functionality related to form submissions.</li>
          </ul>
        </li>
        <li>
          <h3>Types of Cookies We Use</h3>
          <ul className={styles.subListCookies}>
            <li>Essential Cookies: Necessary for form submission and data processing.</li>
            <li>Session Cookies: Temporary cookies that expire once you close your browser.</li>
          </ul>
        </li>
        <li>
          <h3>Your Consent</h3>
          <p>
            By using our website and submitting data through our forms, you consent to the use of cookies as described
            in this policy. You can manage cookie settings through your browser.
          </p>
        </li>
        <li>
          <h3>Managing Cookies</h3>
          <p>
            Most web browsers allow you to control cookie settings, including blocking or deleting cookies. However,
            disabling cookies may impact the functionality of form submissions.
          </p>
          <h4>
            For any inquiries related to data protection, please contact us at:
            <b style={{ fontWeight: 400, marginLeft: '4px' }} className={styles.softText}>
              info@webmodtech.com
            </b>
          </h4>
        </li>
      </ol>
    </div>
  );
}

export default Cookies;
