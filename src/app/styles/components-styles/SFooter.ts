'use client'

import styled from 'styled-components';
import { colors, colorsFonts } from '../Variables';

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
`;

export default SFooter;
