'use client'

import styled from 'styled-components';
import { colors, colorsFonts, endPointsScreen } from '../Variables';

const SFooter = styled.footer`
  margin: 0px 138px 0px 138px;
  padding: 0px 24px 24px 24px;

  #info-first-container-footer {
    border-bottom: 1px solid ${colors.colorBorderPrimary};
    border-top: 1px solid ${colors.colorBorderPrimary};
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;
    padding: 48px 0px 48px 0px;
  };

  .contact-footer-container {
    height: 152px;
    width: 240px;
  };

  .links-footer-container {
    height: 195px;
    overflow: hidden;
    width: 736px;
  };

  #info-secondary-container-footer {
    display: flex;
    height: 95px;
    justify-content: space-between;
    overflow: hidden;
    width: 100%;
  };

  .info-content-footer {
    height: 95px;
    width: 1024px;
  };

  .info-content-footer p, .info-content-footer a {
    color: ${colorsFonts.colorGray};
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    text-decoration: none;
  };

  .info-content-footer p:nth-child(1) {
    margin-bottom: 8px;
  };

  .info-content-footer p:nth-child(2) {
    margin-bottom: 24px;
  };

  #info-button-content-footer button {
    background-color: ${colors.colorWhite};
    border: solid 2px ${colors.colorGreen};
    box-shadow: 0px 5px 10px 0px ${colors.colorShadowPrimary};
    border-radius: 8px;
    cursor: pointer;
    padding: 14px 16px 14px 16px;
  };

  @media screen and (min-width: ${endPointsScreen.laptop}) and ((max-width: ${endPointsScreen.large})) {
    margin: 0;
    padding: 0px 40px 40px 40px;
  };

  @media screen and (min-width: ${endPointsScreen.tablet}) and ((max-width: ${endPointsScreen.laptop})) {
    margin: 0;
    padding: 0px 40px 40px 40px;

    #info-first-container-footer {
      flex-direction: column;
    };

    .contact-footer-container {
      margin-bottom: 40px;
    };

    .links-footer-container {
      height: auto;
      width: 100%;
    };
  };

  @media screen and (min-width: ${endPointsScreen.mobile}) and ((max-width: ${endPointsScreen.tablet})) {
    margin: 0px;
    padding: 0px 20px 30px 20px;

    #info-first-container-footer {
      flex-direction: column;
    };

    .contact-footer-container {
      margin-bottom: 40px;
    };

    .links-footer-container {
      height: auto;
      width: 100%;
    };
  };

  @media screen and (min-width: ${endPointsScreen.micro}) and ((max-width: ${endPointsScreen.mobile})) {
    margin: 0px;
    padding: 0px 18px 30px 18px;

    #info-first-container-footer {
      flex-direction: column;
    };

    .contact-footer-container {
      margin-bottom: 40px;
    };

    .links-footer-container {
      height: auto;
      width: 100%;
    };

    #info-secondary-container-footer {
      height: auto;
    };

    .info-content-footer {
      height: auto;
    };

    #info-button-content-footer {
      align-items: end;
      display: flex;
    };
  };

  @media screen and (max-width: ${endPointsScreen.micro}) {
    margin: 0px;
    padding: 0px 20px 30px 20px;

    #info-first-container-footer {
      flex-direction: column;
    };

    .contact-footer-container {
      width: 100%;
      margin-bottom: 40px;
    };

    .links-footer-container {
      height: auto;
      width: 100%;
    };

    #info-secondary-container-footer {
      height: auto;
    };

    .info-content-footer {
      height: auto;
    };

    #info-button-content-footer {
      align-items: end;
      display: flex;
    };
  };
`;

export default SFooter;
