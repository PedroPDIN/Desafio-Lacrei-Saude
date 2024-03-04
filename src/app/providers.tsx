'use client';

import { PropsWithChildren, useState } from 'react';
// garantir que o seu componente seja compatível com outros componentes React que 
//seguem a mesma convenção de aceitar filhos.Isso facilita a composição de componentes 
//e o trabalho com a hierarquia de elementos React em sua aplicação.
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import GlobalStyle from './styles/GlobalStyle';

export function Providers({ children }: PropsWithChildren) {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  console.log(isOpenMenu);

  return (
    <>
      <GlobalStyle />
      <Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      {isOpenMenu && <NavBar />}
      {children}
      <Footer />
    </>
  );
};
