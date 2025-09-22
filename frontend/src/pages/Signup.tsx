import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/Auth.css";

function Signup({ onSignup }) {
  const { t } = useTranslation();
  return (
    <div className="auth-container">
      <h2>{t('auth.signupTitle')}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (onSignup) onSignup();
        }}
      >
        <input type="text" placeholder={t('auth.fullName')} required />
        <input type="text" placeholder={t('auth.phoneOrEmail')} required />
        <input type="password" placeholder={t('auth.password')} required />
        <button type="submit">{t('auth.signupButton')}</button>
      </form>
      <p>
        {t('auth.haveAccount')} <a href="/login">{t('auth.loginLink')}</a>
      </p>
    </div>
  );
}

export default Signup;
