import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const year = new Date().getFullYear();
    const { t } = useTranslation();

  return (
    <footer className="footer">
        <div className="footer__container container">
            <div>
                <ul className="footer__list">
                    <li>{t('footer-disclaimer-list-1')}</li>
                    <li>{t('footer-disclaimer-list-2')}</li>
                    <li>{t('footer-disclaimer-list-3')}</li>
                    <li className="issues">{t('footer-issues')}</li>
                </ul>
            </div>
            <div>
                <ul className="footer__rights">
                    <li>{t('footer-name')} © {year}</li>
                    <li>{t('footer-rights')}</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer