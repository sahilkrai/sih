import { useTranslation } from 'react-i18next';
import '../styles/LanguageModal.css';

interface LanguageModalProps {
  open: boolean;
  onClose: () => void;
}

const LanguageModal = ({ open, onClose }: LanguageModalProps) => {
  const { t, i18n } = useTranslation();

  if (!open) return null;

  const setLang = (lng: 'en' | 'hi' | 'ml') => {
    i18n.changeLanguage(lng);
    localStorage.setItem('app.language', lng);
  };

  const handleContinue = () => {
    if (!localStorage.getItem('app.language')) {
      // default to English if nothing selected
      setLang('en');
    }
    onClose();
  };

  return (
    <div className="lang-modal-backdrop" role="dialog" aria-modal="true">
      <div className="lang-modal">
        <h3 className="lang-title">{t('modal.chooseLanguage')}</h3>
        <div className="lang-options">
          <button className="lang-btn" onClick={() => setLang('en')}>{t('modal.english')}</button>
          <button className="lang-btn" onClick={() => setLang('hi')}>{t('modal.hindi')}</button>
          <button className="lang-btn" onClick={() => setLang('ml')}>{t('modal.malayalam')}</button>
        </div>
        <button className="continue-btn" onClick={handleContinue}>{t('modal.continue')}</button>
      </div>
    </div>
  );
};

export default LanguageModal;
