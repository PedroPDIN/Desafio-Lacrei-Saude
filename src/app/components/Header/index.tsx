import Image from 'next/image';
import Link from 'next/link';
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import NavBar from '../NavBar';
import logo from '../../../../public/Logo Lacrei Saúde - Header.svg';
import { SHeader } from '@/app/styles/components-styles/SHeader';

interface Props {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ isOpenMenu, setIsOpenMenu }: Props) {
  return (
    <SHeader data-testid='header-element'>
      <figure data-testid='figure-element'>
        <Image
          id="logo"
          src={logo}
          alt="logo Lacrei Saúde"
        />
      </figure>

      <div id='icons-menu-header' data-testid='icon-menu-element'>
        {isOpenMenu
          ? <IoClose
            className='icon-close-header'
            data-testid='icon-menu-element-open'
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
          : <MdMenu
            className='icon-menu-header'
            data-testid='icon-menu-element-close'
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
        }
      </div>
      
      <nav data-testid='nav-element'>
        <NavBar />
      </nav>
    </SHeader>
  )
};
