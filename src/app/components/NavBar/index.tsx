import Link from 'next/link';
import SNavBarDiv from '@/app/styles/components-styles/SNavBar';

export default function NavBar() {
  return (
    <SNavBarDiv>
      <Link
        href='/'
        className='nav-link'
        data-testid='nav-link'
      >
        Quem somos
      </Link>
      <Link
        href='/'
        className='nav-link'
        data-testid='nav-link'
      >
        Ajuda
      </Link>
      <button
        type="button"
        className='nav-button'
        data-testid='nav-button'
      >
        Entrar
      </button>
    </SNavBarDiv>
  );
};
