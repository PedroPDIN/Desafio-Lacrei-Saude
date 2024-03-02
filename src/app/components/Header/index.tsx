import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/Logo Lacrei Saúde - Header.svg';
import SHeader from '@/app/styles/components-styles/SHeader';

export default function Header() {
  return (
    <SHeader>
      <Image
        id="logo"
        src={logo}
        alt="logo Lacrei Saúde"
      />

      <nav id='nav-container'>
        <Link href='*' className='nav-link'>Quem somos</Link>
        <Link href='*' className='nav-link'>Ajuda</Link>
        <button type="button" className='nav-button'>Entrar</button>
      </nav>
    </SHeader>
  )
};
