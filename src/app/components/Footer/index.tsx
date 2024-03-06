import Image from 'next/image';
import ContactFooter from '../ContactFooter';
import LinksFooter from '../LinksFooter';
import SFooter from '@/app/styles/components-styles/SFooter';
import vectorIcon from '../../../../public/Vector.svg';

export default function Footer() {
  const scrollTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <SFooter data-testid='footer-element'>
      <section
        id='info-first-container-footer'
        data-testid='section-footer-element'
      >
        <article className='contact-footer-container'>
          <ContactFooter />
        </article>

        <article className='links-footer-container'>
          <LinksFooter />
        </article>
      </section>

      <article
        id='info-secondary-container-footer'
        data-testid='article-footer-element'
      >
        <div  className='info-content-footer'>
          <p data-testid='text-content-footer-second'>A Lacrei não oferece tratamento médico emergencial. Em caso de emergência procure o hospital mais próximo.</p>
          <p data-testid='text-content-footer-second'>Em caso de problemas psicológicos, ligue para 188 (CVV) ou acesse o site <a href="*">www.cvv.org.br</a></p>
          <p data-testid='text-content-footer-second'>Copyright © 2021 Lacrei. Todos os direitos reservados. CNPJ: 51.265.351/0001-65</p>
        </div>

        <div id='info-button-content-footer'>
          <button
            type='button'
            onClick={scrollTop}
            data-testid='btn-footer-second'
          >
            <Image
              src={vectorIcon}
              alt='ícone principal do botão'
            />
          </button>
        </div>
      </article>
    </SFooter>
  );
};
