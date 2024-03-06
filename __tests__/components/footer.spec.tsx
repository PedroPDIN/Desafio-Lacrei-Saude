import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '@/app/components/Footer';
import contactIcons from '@/utils/contactList';
import infosContents from '@/utils/InfosContents';

const altIcons = contactIcons.map((item) => item.alt);
const listTitles: string[] = ['Lacrei Saúde', 'Saúde', 'Segurança e Privacidade'];
const listTextContent: string[] = [
  'A Lacrei não oferece tratamento médico emergencial. Em caso de emergência procure o hospital mais próximo.',
  'Em caso de problemas psicológicos, ligue para 188 (CVV) ou acesse o site <a href="*">www.cvv.org.br</a>',
  'Copyright © 2021 Lacrei. Todos os direitos reservados. CNPJ: 51.265.351/0001-65',
];

describe('Footer component', () => {
  const scrollToMock = jest.fn();

  beforeAll(() => {
    jest.spyOn(global, 'scrollTo').mockImplementation(scrollToMock);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
  
  beforeEach(() => {
    render(<Footer />);
  });

  it('render footer success', () => {
    const footerElement = screen.getByTestId('footer-element');

    expect(footerElement).toBeInTheDocument();
    expect(footerElement.tagName).toEqual('FOOTER');
  });

  it('render section and article footer success', () => {
    const sectionElement = screen.getByTestId('section-footer-element');

    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement.tagName).toEqual('SECTION');
  });

  it('renders the logo in a picture element and the contact icons in the nav element in the footer.', () => {
    const figureElement = screen.getByTestId('figure-logo-footer');
    const logoElement = screen.getByAltText('logo footer');
    const navElement = screen.getByTestId('nav-links-footer');
    const iconsContact = screen.getAllByTestId('icons-links-footer')

    expect(figureElement).toBeInTheDocument();
    expect(figureElement.tagName).toEqual('FIGURE');

    expect(logoElement).toBeInTheDocument();
    expect(logoElement.tagName).toEqual('IMG');

    expect(navElement).toBeInTheDocument();
    expect(navElement.tagName).toEqual('NAV');

    expect(iconsContact.length).toEqual(4);

    altIcons.forEach((alt) => {
      expect(screen.getByAltText(alt)).toBeInTheDocument();
    });
  });

  it('renders link titles.', () => {
    const titlesLinks = screen.getAllByTestId('title-link-footer');
    const titlesLinksInnerHTML = titlesLinks.map((item) => item.innerHTML);

    expect(titlesLinks.length).toEqual(3);
    expect(titlesLinksInnerHTML).toEqual(listTitles);
  });
  
  it('disponibiliza os links complementares referentes ao elemento marcado “Lacrei Saúde”.', () => {
    const linksContent = screen.getAllByTestId('links-content-first');
    const linksContentInnerHTML = linksContent.map((item) => item.innerHTML);

    expect(linksContent.length).toEqual(4);
    expect(linksContentInnerHTML).toEqual(infosContents.first);
    linksContent.forEach((item) => {
      expect(item.tagName).toEqual('A');
      expect(item).toBeInTheDocument();
    });
  });

  it('disponibiliza os links complementares referentes ao elemento marcado “Saúde”.', () => {
    const linksContent = screen.getAllByTestId('links-content-second');
    const linksContentInnerHTML = linksContent.map((item) => item.innerHTML);

    expect(linksContent.length).toEqual(2);
    expect(linksContentInnerHTML).toEqual(infosContents.second);
    linksContent.forEach((item) => {
      expect(item.tagName).toEqual('A');
      expect(item).toBeInTheDocument();
    });
  });
  
  it('disponibiliza os links complementares referentes ao elemento marcado “Segurança e Privacidade”.', () => {
    const linksContent = screen.getAllByTestId('links-content-third');
    const linksContentInnerHTML = linksContent.map((item) => item.innerHTML);

    expect(linksContent.length).toEqual(3);
    expect(linksContentInnerHTML).toEqual(infosContents.third);
    linksContent.forEach((item) => {
      expect(item.tagName).toEqual('A');
      expect(item).toBeInTheDocument();
    });
  });

  it('renders the "article" element that will contain the second content of the footer.', () => {
    const articleFooterElement = screen.getByTestId('article-footer-element');

    expect(articleFooterElement).toBeInTheDocument();
    expect(articleFooterElement.tagName).toEqual('ARTICLE');
  });

  it('renders the text content in the second part of the footer.', () => {
    const textContentElement = screen.getAllByTestId('text-content-footer-second');
    const textContentInnerHTML = textContentElement.map((item) => item.innerHTML);

    expect(textContentElement.length).toEqual(3);
    expect(textContentInnerHTML).toEqual(listTextContent);
    textContentElement.forEach((item) => {
      expect(item.tagName).toEqual('P');
      expect(item).toBeInTheDocument();
    });
  });

  it('renders the button in the second part of the footer.', () => {
    const buttonElement = screen.getByTestId('btn-footer-second');

    expect(buttonElement.tagName).toEqual('BUTTON');
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});

