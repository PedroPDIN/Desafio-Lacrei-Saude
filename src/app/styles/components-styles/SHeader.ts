'use client'

import styled from "styled-components";
import { colors, colorsFonts } from "../Variables";

export const SHeader = styled.header`
  align-items: center;
  background: linear-gradient(rgba(245, 255, 251, 1), rgba(255, 255, 255, 1));
  display: flex;
  justify-content: space-between;
  padding: 24px 162px 24px 162px;
  margin-bottom: 48px;
`;

export const SFigure = styled.figure`
  width: 202.69px;
  height: 24px;
`;

export const SNav = styled.nav`
  display: flex;
  gap: 16px;

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
  };
`;
