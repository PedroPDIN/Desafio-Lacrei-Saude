import styled from 'styled-components';
import { colorsFonts, endPointsScreen } from '../Variables';

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

  @media screen and (min-width: ${endPointsScreen.micro}) and ((max-width: ${endPointsScreen.mobile})) {
    height: auto;
    gap: 20px;

    .title-link {
      line-height: 20px;
    };
  };

  @media screen and (max-width: ${endPointsScreen.micro}) {
    flex-direction: column;
    height: auto;

    #link-content {
      margin-bottom: 24px;
    };

    #link-content h2 {
      margin-bottom: 14px;
    };

    .title-link {
      margin-bottom: 8px;
    };
  };
`;

export default SLinksFooterDiv;
