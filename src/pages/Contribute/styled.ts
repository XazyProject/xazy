import styled from "styled-components";
import { colors } from "styles/colors";

export const ContributeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  h1 {
    font-size: 26px;
    text-align: center;
    font-weight: 600;
    margin: 50px 0;
    line-height: 2;
  }

  p {
    max-width: 600px;
    text-align: center;
    margin: 0 auto;
    line-height: 2;
  }

  h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    margin: 70px 0 30px 0;
    line-height: 2;
  }
`;

export const ContributeCardsHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  max-width: 1024px;
  margin: 0 auto 70px auto;
`;

export const ContributeCard = styled.div`
  background-color: ${colors.codeBg};
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0px 14px 0px -3px rgba(255, 39, 104, 1);
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    line-height: 2;
  }

  p {
    margin: 30px 0;
  }

  a {
    text-align: center;
    display: inline-block;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    background-color: ${colors.happyGreen};
    color: #000;
    transition: all 0.2s ease-in-out;
    margin-top: auto;

    &:hover {
      transform: scale(1.1);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;
