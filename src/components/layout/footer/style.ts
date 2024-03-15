import styled from "styled-components";
import { colors } from "styles/colors";

export const FooterLayout = styled.div`
  width: 100%;
  background-color: ${colors.codeBg};
  position: relative;
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
  }
`;

export const FooterLeft = styled.div`
  p {
    margin: 30px 0;
  }

  div {
    display: flex;
    gap: 30px;
  }

  svg {
    transition: all 0.3s ease-in-out;
    fill: #ccc;

    &:hover {
      fill: ${colors.xazyRed};
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      text-align: center;
    }
  }
`;

export const FooterRight = styled.div`
  p {
    max-width: 300px;
    text-align: center;
    line-height: 2;
    margin-bottom: 30px;
    font-size: 18px;
  }

  a {
    display: block;
    text-align: center;
    text-decoration: none;
    color: ${colors.codeBg};
    border: 1px solid ${colors.happyGreen};
    border-radius: 8px;
    font-weight: 600;
    font-size: 18px;
    padding: 10px 0;
    background-color: ${colors.happyGreen};
    width: 80%;
    margin: 0 auto;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: transparent;
      color: ${colors.happyGreen};
    }
  }
  @media screen and (max-width: 768px) {
    p {
      max-width: 400px;
    }
  }
`;
