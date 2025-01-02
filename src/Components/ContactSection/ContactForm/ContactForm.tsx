import { yupResolver } from '@hookform/resolvers/yup';
import styles from './ContactForm.module.css';
import { schema } from '../../../utils/Schema/Schema';
import { IFormInput } from '../../../utils/Intefrace/FormInterface';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import FormInput from './FormInput/FormInput';
import { setEmail, setMessage, setName, setPhone } from '../../../store/slices/form.slice';

function ContactForm() {
  const dispatch = useDispatch();
  const { name, email, phone, message } = useSelector((state: RootState) => state.form);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };
  return (
    <div className={styles.containerForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.wrapperForm}>
          <div className={styles.leftSideForm}>
            <FormInput
              placeholder="Your Name *"
              value={name}
              register={register('name')}
              onChange={(e) => dispatch(setName(e.target.value))}
              error={errors.name?.message}
            />
            <FormInput
              placeholder="Your Email *"
              value={email}
              register={register('email')}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              error={errors.email?.message}
            />
            <FormInput
              placeholder="Your Phone *"
              value={phone}
              register={register('phone')}
              onChange={(e) => dispatch(setPhone(e.target.value))}
              error={errors.phone?.message}
            />
          </div>
          <div className={styles.rightSideForm}>
            <div className={styles.fieldTextarea}>
              <textarea
                placeholder="Tell me about your project, ideas..."
                value={message}
                {...register('message')}
                onChange={(e) => dispatch(setMessage(e.target.value))}
              />
              {errors.message ? <p className={styles.errorMessage}>{errors.message.message}</p> : null}
            </div>
          </div>
        </div>
        <div className={styles.wrapperSubmitButton}>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
