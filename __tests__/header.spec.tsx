import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Header from '@/app/components/Header';

describe('Header component', () => {
  beforeEach(() => {
    render(<Header isOpenMenu={false} setIsOpenMenu={() => { }} />);
  });

  it('render header success', () => {
    const headerElement = screen.getByTestId('header-element')

    expect(headerElement).toBeInTheDocument();
    expect(headerElement.tagName).toEqual('HEADER');
  });

  it('render logo success', () => {
    const figureElement = screen.getByTestId('figure-element');
    const logoElement = screen.getByAltText('logo Lacrei Saúde');

    expect(figureElement).toBeInTheDocument();
    expect(figureElement.tagName).toEqual('FIGURE');
    expect(logoElement).toBeInTheDocument();
  });

  it('Render the navbar and screen proportionally larger', () => {
    const navElement = screen.getByTestId('nav-element')

    expect(navElement).toBeInTheDocument();
    expect(navElement.tagName).toEqual('NAV');
  });

  it('Render the navbar and screen proportionally larger (with their corresponding elements)', () => {
    const allNavLinks = screen.getAllByTestId('nav-link');
    const navButton = screen.getByTestId('nav-button');

    expect(allNavLinks[0]).toBeInTheDocument();
    expect(allNavLinks[1]).toBeInTheDocument();
    expect(navButton).toBeInTheDocument();
    expect(allNavLinks[0].innerHTML).toEqual('Quem somos');
    expect(allNavLinks[1].innerHTML).toEqual('Ajuda');
    expect(navButton.innerHTML).toEqual('Entrar')
  });
});

describe('Header component (with the hamburger menu open) ', () => {
  beforeEach(() => {
    render(<Header isOpenMenu={true} setIsOpenMenu={() => { }} />);
  });

  it('the menu button is rendered with the correct icon.', () => {
    const iconElement = screen.getByTestId('icon-menu-element');
    const iconOpen = screen.getByTestId('icon-menu-element-open');

    expect(iconElement).toBeInTheDocument();
    expect(iconOpen).toBeInTheDocument();
  });

  it('Render the navigation bar and screen proportionally smaller (with their corresponding elements)', () => {
    const allNavLinks = screen.getAllByTestId('nav-link');
    const navButton = screen.getByTestId('nav-button');

    expect(allNavLinks[0]).toBeInTheDocument();
    expect(allNavLinks[1]).toBeInTheDocument();
    expect(navButton).toBeInTheDocument();
    expect(allNavLinks[0].innerHTML).toEqual('Quem somos');
    expect(allNavLinks[1].innerHTML).toEqual('Ajuda');
    expect(navButton.innerHTML).toEqual('Entrar')
  });
});
