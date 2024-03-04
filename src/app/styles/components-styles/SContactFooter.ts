import styled from 'styled-components';

export const SContactFooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  figure {
    height: 48px;
    overflow: hidden;
    width: 169.17px;
  };

  #logo-footer {
    object-fit: cover;
  };

  nav {
    display: flex;
    justify-content: space-between;
  };

  #contact-icon-footer {
    height: 48px;
    overflow: hidden;
    width: 48px;
  };

  .icon-content-footer {
    object-fit: cover;
  };
`;
