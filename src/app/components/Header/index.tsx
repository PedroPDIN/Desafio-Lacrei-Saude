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
    <SHeader>
      <figure>
        <Image
          id="logo"
          src={logo}
          alt="logo Lacrei Saúde"
        />
      </figure>

      <div id='icons-menu-header'>
        {isOpenMenu
          ? <IoClose
            className='icon-close-header'
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
          : <MdMenu
          className='icon-menu-header'
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
        }
      </div>
      
      <nav>
        <NavBar />
      </nav>
    </SHeader>
  )
};
