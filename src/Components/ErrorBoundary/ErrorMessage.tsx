import styles from './ErrorMessage.module.css';

function ErrorMessage() {
  return (
    <div className={styles.messageBoundary}>
      <h1>Ooh!</h1>
      <p>{'Something went wrong. Please reload the page or come back later!'}</p>
    </div>
  );
}

export default ErrorMessage;
