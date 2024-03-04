import styled from 'styled-components';
import { colors, colorsFonts, endPointsScreen } from '../Variables';

const SNavBarDiv = styled.div`
  display: flex;
  gap: 16px;
  overflow: hidden;

  .nav-link {
    border-radius: 8px;
    color: ${colorsFonts.colorPrimary};
    padding: 10px 32px 10px 32px;
    text-decoration: none;
  };
  
  .nav-button {
    background-color: ${colors.colorSecondary};
    border-radius: 8px;
    box-shadow: 0px 5px 10px 0px ${colors.colorShadowPrimary};
    color: ${colorsFonts.colorWhite};
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    padding: 10px 32px 10px 32px;
    text-align: center;
  };
  
  .nav-link, .nav-button {
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    white-space: nowrap;
  };

  @media screen and (min-width: ${endPointsScreen.mobile}) and ((max-width: ${endPointsScreen.tablet})) {
    display: flex;
    gap: 2px;

    .nav-link {
      border-radius: 6px;
      padding: 8px 14px 8px 14px;
    };
    
    .nav-button {
      padding: 8px 14px 8px 14px;
    };
  }

  @media screen and (max-width: ${endPointsScreen.mobile}) {
    background-color: ${colors.colorPrimary};
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: absolute;
    margin-top: 0;
    padding: 78px 100px 0px 100px;
    top: 0;
    transition: all ease-out;
    transition-duration: 300ms;
    width: 100vw;
    z-index: 1;
  };

  @media screen and (max-width: ${endPointsScreen.micro}) {
    .nav-link:nth-child(1) {
      white-space: normal;
    };
  };
`;

export default SNavBarDiv;
