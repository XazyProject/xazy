import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const HeadDiv = styled.div`
  border-bottom: 3px solid ${colors.gray};
  background-color: ${colors.mainDark};
  position: sticky;
  width: 100%;
  z-index: 5;
`;

export const HeaderLayout = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 8px 32px;
  justify-content: space-between;
  position: relative;
  z-index: 5;
  svg {
    @media screen and (max-width: 1024px) {
      width: 140px;
      margin: 5px 0;
    }
  }
`;

export const HeaderUl = styled.ul`
  display: flex;
  gap: 32px;
  font-size: 16px;
  justify-content: center;
  align-items: center;

  div.hamburger-react {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    gap: 10px;

    li {
      display: none;
    }

    div.hamburger-react {
      display: block;
      order: 1;
    }
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 100%;
    cursor: pointer;

    &:hover {
      outline: 3px solid ${colors.xazyRed};
    }
  }

  li {
    padding: 5px 8px;
    margin: 0 2px;

    &:hover {
      border-bottom: 1px solid ${colors.xazyRed};
    }
  }

  a {
    color: ${colors.textDarkSecond};
    text-decoration: none;
  }
`;

export const MobileNavigation = styled.div`
  padding: 70px 0;
  background-color: ${colors.secondaryDark};
  position: fixed;
  right: -250px;
  height: 100vh;
  top: 0;
  z-index: -3;
  border: 1px solid ${colors.gray};
  transition: all 0.3s ease-in-out;

  /* .bg {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.6);
    z-index: -16;
  } */

  &.active {
    right: 0px;
  }

  &.non-active {
    right: -290px;
  }

  @media screen and (min-width: 1025px) {
    display: none;
  }

  a {
    text-align: center;
    display: block;
    color: ${colors.textDarkSecond};
    text-decoration: none;
    padding: 15px 60px;

    &:hover {
      background-color: ${colors.gray};
      color: ${colors.xazyRed};
    }
  }
`;
