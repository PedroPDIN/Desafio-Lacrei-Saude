'use client'

import styled from 'styled-components';
import { colors, colorsFonts } from '../Variables';

export const SMain = styled.main`
  display: flex;
  height: 491px;
  justify-content: center;
  margin: 0px 138px 64px 138px;
`;

export const SSection = styled.section`
  margin-right: 224px;
  padding: 80px 0px 80px 0px;

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
`;

export const SAside = styled.aside`
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
`;

export const SFigure = styled.figure`
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  
  .image-content {
    height: 100%;
    object-fit: cover;
    position: relative;
    width: 400.13px;
  };
`;
