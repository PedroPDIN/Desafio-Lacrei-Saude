import Image from 'next/image';
import { SMain } from './styles/pages-styles/SHome';
import imageFigure from '../../public/Imagem 2I.svg';

export default function Home() {
  return (
    <SMain>
      <section>
        <div id='titles-container'>
          <h1>Junte-se à <br /> nossa comunidade</h1>
          <div id='divider-content'></div>
          <p>
            Encontre atendimento clínico de qualidade <br /> ou entre para o time de profissionais da <br />Lacrei Saúde.
          </p>
        </div>
   
        <aside>
          <button id='btn-aside' type='button'>Buscar atendimento</button>
          <button id='btn-aside' type='button'>Oferecer atendimento</button>
        </aside>
      </section>

      <figure>
        <Image
          className='image-content'
          src={imageFigure}
          alt='imagem que retrata uma medica atendendo uma paciente.'
          width={400}
        />
      </figure>
    </SMain>
  );
};
