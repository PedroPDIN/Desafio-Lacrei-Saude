'use client'

import styled from "styled-components";
import { colors, endPointsScreen } from "../Variables";

export const SHeader = styled.header`
  align-items: center;
  background: linear-gradient(rgba(245, 255, 251, 1), rgba(255, 255, 255, 1));
  display: flex;
  justify-content: space-between;
  padding: 24px 162px 24px 162px;
  margin-bottom: 48px;

  figure {
    height: 24px;
    width: 202.69px;
  };

  #icons-menu-header {
    display: none;
  };

  nav {
    display: flex;
    height: 48px;
  };

  @media screen and (min-width: ${endPointsScreen.tablet}) and (max-width: ${endPointsScreen.laptop}) {
    padding: 24px 40px 24px 40px;
  };

  @media screen and (min-width: ${endPointsScreen.mobile}) and (max-width: ${endPointsScreen.tablet}) {
    padding: 24px 18px 24px 18px;
  };

  @media screen and (min-width: ${endPointsScreen.micro}) and (max-width: ${endPointsScreen.mobile}) {
    padding: 24px;

    nav {
      display: none;
    };

    #icons-menu-header {
      display: block;
      height: 30px;
      width: 30px;
      z-index: 10;
    }

    .icon-menu-header, .icon-close-header {
      align-items: center;
      border: 2px solid ${colors.colorGreen};
      border-radius: 4px;
      color: ${colors.colorSecondary};
      cursor: pointer;
      display: flex;
      flex-direction: column;
      height: 24px;
      object-fit: contain;
      width: 100%;
    }
  };

  @media screen and (max-width: ${endPointsScreen.micro}) {
    padding: 24px 10px 24px 10px;

    nav {
      display: none;
    };

    #icons-menu-header {
      display: block;
      height: 30px;
      width: 30px;
      z-index: 10;
    }

    .icon-menu-header, .icon-close-header {
      align-items: center;
      border: 2px solid ${colors.colorGreen};
      border-radius: 4px;
      color: ${colors.colorSecondary};
      cursor: pointer;
      display: flex;
      flex-direction: column;
      height: 24px;
      object-fit: contain;
      width: 100%;
    };
  };
`;
