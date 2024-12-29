import { plusJakartaSans } from '../font';
import ContactForm from './contact';
import FooterBottom from './footer-bottom';
import FooterMiddle from './footer-middle';
import FooterTop from './footer-top';

function Footer() {
  return (
    <footer className={`${plusJakartaSans.className} bg-black py-8`}>
      <div className="space-y-14">
        <ContactForm />
        <FooterTop />
        <FooterMiddle />
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
