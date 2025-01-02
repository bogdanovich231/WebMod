import styles from './FormInput.module.css';

interface FormInputProps {
  placeholder: string;
  value: string;
  register: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

function FormInput({ placeholder, value, register, onChange, error }: FormInputProps) {
  return (
    <div className={styles.inputForm}>
      <input
        placeholder={placeholder}
        value={value}
        {...register}
        onChange={onChange}
        className={error ? styles.inputError : ''}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}

export default FormInput;
