import styled from 'styled-components';
import { colorsFonts } from '../Variables';

const SLinksFooterDiv = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;

  #link-content {
    display: flex;
    flex-direction: column;
  };

  #link-content h2 {
    color: ${colorsFonts.colorTitlePrimary};
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    margin-bottom: 24px;
  };

  .title-link {
    color: ${colorsFonts.colorTitleSecondary};
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 16px;
    line-height: 24px;
    text-decoration: none;
  };
`;

export default SLinksFooterDiv;
