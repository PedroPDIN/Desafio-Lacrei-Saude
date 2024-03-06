import Image from 'next/image';
import { SMain } from './styles/pages-styles/SHome';
import imageFigure from '../../public/Imagem 2I.svg';

export default function Home() {
  return (
    <SMain data-testid='main-home-element'>
      <section data-testid='main-home-section'>
        <div id='titles-container'>
          <h1 data-testid='title-home-element'>
            Junte-se à <br /> nossa comunidade
          </h1>
          <div id='divider-content' data-testid='divider-home-element'></div>
          <p data-testid='text-home-element'>
            Encontre atendimento clínico de qualidade <br /> ou entre para o time de profissionais da <br /> Lacrei Saúde.
          </p>
        </div>
   
        <aside data-testid='aside-home-element'>
          <button
            id='btn-aside'
            type='button'
            data-testid='btn-aside-element'
          >
            Buscar atendimento
          </button>
          <button
            id='btn-aside'
            type='button'
            data-testid='btn-aside-element'
          >
            Oferecer atendimento
          </button>
        </aside>
      </section>

      <figure data-testid='figure-home-element'>
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
