import iconFacebook from '../../public/icon-1.svg';
import iconInstagram from '../../public/icon-2.svg'; 
import iconLinkedIn from '../../public/icon-3.svg';
import iconEmail from '../../public/icon-4.svg';

type ContactIcons = {
  name: string;
  icon: string;
  alt: string;
};

const contactIcons: ContactIcons[] = [
  {
    name: 'Facebook',
    icon: iconFacebook,
    alt: 'ícone Facebook',
  },
  {
    name: 'Instagram',
    icon: iconInstagram,
    alt: 'ícone Instagram',
  },
  {
    name: 'LinkedIn',
    icon: iconLinkedIn,
    alt: 'ícone LinkedIn',
  },
  {
    name: 'Email',
    icon: iconEmail,
    alt: 'ícone Email',
  },
];

export default contactIcons;
