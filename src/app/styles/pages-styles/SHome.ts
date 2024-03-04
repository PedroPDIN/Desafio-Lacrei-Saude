'use client'

import styled from 'styled-components';
import { colors, colorsFonts, endPointsScreen } from '../Variables';

export const SMain = styled.main`
  display: flex;
  height: 491px;
  justify-content: center;
  margin: 0px 138px 64px 138px;

  section {
    margin-right: 224px;
    padding: 80px 0px 80px 0px;
  }

  #titles-container {
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: space-between;
    margin-bottom: 32px;
    width: 488px;
  };
  
  #titles-container h1 {
    color: ${colorsFonts.colorTitlePrimary};
    font-size: 48px;
    font-weight: 700;
    line-height: 57.6px;
  };

  #divider-content {
    background-color: ${colors.colorGreen};
    border-radius: 4px;
    height: 2px;
    width: 160px;
  };

  #titles-container p {
    color: ${colorsFonts.colorTitleSecondary};
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
  };

  #btn-aside {
    border-radius: 8px;
    box-shadow: 0px 5px 10px 0px ${colors.colorShadowPrimary};
    font-size: 18px;
    font-weight: 700;
    height: 48px;
    line-height: 27px;
    text-align: center;
    width: 232px;
  };

  #btn-aside:nth-child(1) {
    background-color: ${colors.colorGreen};
    color: ${colorsFonts.colorWhiteSecondary};
    cursor: pointer;
    margin-right: 24px;
  };

  #btn-aside:nth-child(2) {
    background-color: ${colors.colorWhite};
    border: 2px solid ${colors.colorGreen};
    color: ${colorsFonts.colorGreen};
    cursor: pointer;
  };

  figure {
    border-radius: 8px;
    overflow: hidden;
    position: relative;
  };

  .image-content {
    height: 100%;
    object-fit: cover;
    position: relative;
    width: 400.13px;
  };

  @media screen and (min-width: ${endPointsScreen.laptop}) and (max-width: ${endPointsScreen.large}) {
    align-items: center;
    flex-direction: column;
    height: auto;
    margin: 0px 0px 64px 0px;

    figure {
      padding: 0;
      width: 50%;
    };

    .image-content {
      width: 100%;
    };
  };


  @media screen and (min-width: ${endPointsScreen.tablet}) and (max-width: ${endPointsScreen.laptop}) {
    align-items: center;
    flex-direction: column;
    height: auto;
    margin: 0px 0px 64px 0px;

    figure {
      padding: 0;
      width: 60%;
    };

    .image-content {
      width: 100%;
    };
  };

 @media screen and (min-width: ${endPointsScreen.mobile}) and (max-width: ${endPointsScreen.tablet}) {
    flex-direction: column;
    height: auto;
    margin: 0px 0px 64px 0px;

    section {
      display: flex;
      flex-direction: column;
      margin-right: 0px;
      padding: 40px 60px 40px 60px;
    }

    #titles-container {
      width: 100%;
    }

    #titles-container h1 {
      color: ${colorsFonts.colorTitlePrimary};
      font-size: 28px;
      line-height: 40px;
      text-align: center;
    };

    #divider-content {
      background-color: ${colors.colorGreen};
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 2px;
      padding-left: 10px;
      width: 100%;
    };

    #titles-container p {
      color: ${colorsFonts.colorTitleSecondary};
      font-size: 18px;
      line-height: 30px;
      text-align: center;
    };

    aside {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 20px
    };

    #btn-aside:nth-child(1) {
      margin-right: 0;
    };

    figure {
      padding: 0px 60px 0px 60px;
    };

    .image-content {
      width: 100%;
    };
  }

  @media screen and (min-width: ${endPointsScreen.micro}) and (max-width: ${endPointsScreen.mobile}) {
    flex-direction: column;
    height: auto;
    margin: 0px 0px 64px 0px;

    section {
      display: flex;
      flex-direction: column;
      margin-right: 0px;
      padding: 40px 60px 40px 60px;
    }

    #titles-container {
      width: 100%;
    }

    #titles-container h1 {
      color: ${colorsFonts.colorTitlePrimary};
      font-size: 28px;
      line-height: 40px;
      text-align: center;
    };

    #divider-content {
      background-color: ${colors.colorGreen};
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      height: 2px;
      justify-content: center;
      padding-left: 10px;
      width: 100%;
    };

    #titles-container p {
      color: ${colorsFonts.colorTitleSecondary};
      font-size: 18px;
      line-height: 30px;
      text-align: center;
    };

    aside {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 20px
    };

    #btn-aside:nth-child(1) {
      margin-right: 0;
    };

    figure {
      padding: 0px 60px 0px 60px;
    };

    .image-content {
      width: 100%;
    };
  };

  @media screen and (max-width: ${endPointsScreen.micro}) {
    flex-direction: column;
    height: auto;
    margin: 0px 0px 64px 0px;

    section {
      display: flex;
      flex-direction: column;
      margin-right: 0px;
      padding: 40px 20px 40px 20px;
    };

    #titles-container {
      width: 100%;
    };

    #titles-container h1 {
      color: ${colorsFonts.colorTitlePrimary};
      font-size: 28px;
      line-height: 40px;
      text-align: center;
    };

    #divider-content {
      background-color: ${colors.colorGreen};
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      height: 2px;
      justify-content: center;
      padding-left: 10px;
      width: 100%;
    };

    #titles-container p {
      color: ${colorsFonts.colorTitleSecondary};
      font-size: 18px;
      line-height: 30px;
      text-align: center;
    };

    aside {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 20px
    };

    #btn-aside:nth-child(1) {
      margin-right: 0;
    };

    figure {
      padding: 0px 20px 0px 20px;
    };

    .image-content {
      width: 100%;
    };
  };
`;
