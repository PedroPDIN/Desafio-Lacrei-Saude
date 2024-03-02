'use client';

import { PropsWithChildren } from 'react';
// garantir que o seu componente seja compatível com outros componentes React que 
//seguem a mesma convenção de aceitar filhos.Isso facilita a composição de componentes 
//e o trabalho com a hierarquia de elementos React em sua aplicação.
import Header from './components/Header';
import GlobalStyle from './styles/GlobalStyle';

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
};
