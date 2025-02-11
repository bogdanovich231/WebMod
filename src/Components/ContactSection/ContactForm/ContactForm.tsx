import { yupResolver } from '@hookform/resolvers/yup';
import styles from './ContactForm.module.css';
import { schema } from '../../../utils/Schema/Schema';
import { IFormInput } from '../../../utils/Intefrace/FormInterface';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import FormInput from './FormInput/FormInput';
import { resetForm, setEmail, setLoader, setMessage, setName, setPhone } from '../../../store/slices/form.slice';
import Loader from '../../Loader/Loader';
import MessageWindow from './MessageWindow/MessageWindow';
import { closeContactModal, openContactModal } from '../../../store/slices/modal.slice';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ContactForm() {
  const dispatch = useDispatch();
  const { name, email, phone, message, isLoading } = useSelector((state: RootState) => state.form);
  const { isContactModalOpen } = useSelector((state: RootState) => state.modal);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });
  const onSubmit = async (data: IFormInput) => {
    const payload = {
      ...data,
    };

    try {
      const response = await fetch('https://webmodtech.com/wordpress/wp-json/connect/v1/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        dispatch(resetForm());
        dispatch(openContactModal());
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      dispatch(setLoader(false));
    }
  };

  useEffect(() => {
    if (isContactModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isContactModalOpen]);

  const closeModal = () => {
    dispatch(closeContactModal());
  };

  return (
    <>
      <div className={styles.containerForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.wrapperForm}>
            <div className={styles.leftSideForm}>
              <FormInput
                placeholder="Your Name *"
                value={name}
                register={register('name')}
                onChange={(e) => {
                  dispatch(setName(e.target.value));
                  clearErrors('name');
                }}
                error={errors.name?.message}
              />
              <FormInput
                placeholder="Your Email *"
                value={email}
                register={register('email')}
                onChange={(e) => {
                  dispatch(setEmail(e.target.value));
                  clearErrors('email');
                }}
                error={errors.email?.message}
              />
              <FormInput
                placeholder="Your Phone *"
                value={phone}
                register={register('phone')}
                onChange={(e) => {
                  dispatch(setPhone(e.target.value));
                  clearErrors('phone');
                }}
                error={errors.phone?.message}
              />
            </div>
            <div className={styles.rightSideForm}>
              <div className={styles.fieldTextarea}>
                <textarea
                  placeholder="Tell me about your project, ideas..."
                  value={message}
                  {...register('message')}
                  onChange={(e) => {
                    dispatch(setMessage(e.target.value));
                    clearErrors('message');
                  }}
                />
                {errors.message ? <p className={styles.errorMessage}>{errors.message?.message}</p> : null}
              </div>
            </div>
          </div>
          <div className={styles.checkboxField}>
            <div className={styles.checkboxFieldContainer}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" {...register('acceptTerms', { required: true })} />I agree to the
                <Link to={'/cookies-policy'}> Cookies Policy</Link>.
              </label>
            </div>
            {errors.acceptTerms && <p className={styles.errorMessage}>{errors.acceptTerms?.message}</p>}
          </div>
          <div className={styles.wrapperSubmitButton}>
            <button type="submit" className={styles.submitButton} disabled={isLoading}>
              {isLoading ? <Loader /> : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
      {isContactModalOpen && <MessageWindow closeModal={closeModal} />}
    </>
  );
}

export default ContactForm;
