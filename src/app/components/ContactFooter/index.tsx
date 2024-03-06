import Image from 'next/image';
import Link from 'next/link';
import SContactFooterDiv from '@/app/styles/components-styles/SContactFooter';
import logoFooter from '../../../../public/Logo Lacrei Saúde - Footer.svg';
import contactIcons from '@/utils/contactList';

export default function ContactFooter() {
  return (
    <SContactFooterDiv>
      <figure data-testid='figure-logo-footer'>
        <Image
          id='logo-footer'
          src={logoFooter}
          alt="logo footer"
        />
      </figure>

      <nav data-testid='nav-links-footer'>
        {contactIcons.map((item) => (
          <Link key={item.name} href="8" id='contact-icon-footer'>
            <Image
              src={item.icon}
              alt={item.alt}
              className='icon-content-footer'
              data-testid='icons-links-footer'
            />
          </Link>
        ))}
      </nav>
    </SContactFooterDiv>
  );
};
