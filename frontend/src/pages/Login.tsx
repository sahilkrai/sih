import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/Auth.css";

function Login({ onLogin }) {
  const { t } = useTranslation();
  return (
    <div className="auth-container">
      <h2>{t('auth.loginTitle')}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (onLogin) onLogin();
        }}
      >
        <input type="text" placeholder={t('auth.phoneOrEmail')} required />
        <input type="password" placeholder={t('auth.password')} required />
        <button type="submit">{t('auth.loginButton')}</button>
      </form>
      <p>
        {t('auth.noAccount')} <a href="/signup">{t('auth.signupLink')}</a>
      </p>
    </div>
  );
}

export default Login;
