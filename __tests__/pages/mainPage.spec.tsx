import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import MainPage from '@/app/page';

const titleHomeExample = 'Junte-se à nossa comunidade';
const textHomeExample = 'Encontre atendimento clínico de qualidade ou entre para o time de profissionais da Lacrei Saúde.';

describe('Main Page', () => {
  beforeEach(() => {
    render(<MainPage />);
  });

  it('render page home success', () => {
    const mainElement = screen.getByTestId('main-home-element');

    expect(mainElement).toBeInTheDocument();
    expect(mainElement.tagName).toEqual('MAIN');
  });

  it('successfully renders the section', () => {
    const sectionElement = screen.getByTestId('main-home-section');

    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement.tagName).toEqual('SECTION');
  });

  it('renders the title and text on the home page.', () => {
    const titleElement = screen.getByTestId('title-home-element');
    const dividerElement = screen.getByTestId('divider-home-element');
    const textElement = screen.getByTestId('text-home-element');

    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toEqual('H1');
    expect(titleElement.innerHTML.split('<br> ').join('')).toEqual(titleHomeExample);

    expect(dividerElement).toBeInTheDocument();
    expect(dividerElement).toHaveStyle('background-color: rgba(1, 135, 98, 1)');

    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toEqual('P');
    expect(textElement.innerHTML.split('<br> ').join('')).toEqual(textHomeExample);
  });

  it('renders the aside element with its respective button elements.', () => {
    const asideElement = screen.getByTestId('aside-home-element');
    const buttonsElements = screen.getAllByTestId('btn-aside-element');

    expect(asideElement).toBeInTheDocument();
    expect(asideElement.tagName).toEqual('ASIDE');

    expect(buttonsElements[0].tagName).toEqual('BUTTON');
    expect(buttonsElements[0].innerHTML).toEqual('Buscar atendimento');

    expect(buttonsElements[1].tagName).toEqual('BUTTON');
    expect(buttonsElements[1].innerHTML).toEqual('Oferecer atendimento');
  });

  it('renders the figure tag with the respective image for the home page.', () => { 
    const figureElement = screen.getByTestId('figure-home-element');
    const imgElement = screen.getByAltText('imagem que retrata uma medica atendendo uma paciente.');

    expect(figureElement).toBeInTheDocument();
    expect(figureElement.tagName).toEqual('FIGURE');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.tagName).toEqual('IMG');
  });
});
