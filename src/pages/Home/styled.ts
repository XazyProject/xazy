import styled from "styled-components";
import { colors } from "styles/colors";

export const HomeLayout = styled.div`
  width: 100%;
`;

export const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    text-align: center;
    font-size: 24px;
    margin: 40px 0 0 0;
  }
`;

export const HomeIntro = styled.div`
  padding: 0 20px;
  h1 {
    font-size: 52px;
    color: ${colors.mainLight};
    text-align: center;
    line-height: 1.3;
    font-weight: 200;
    letter-spacing: 4px;
    margin: 40px 0;

    span {
      font-weight: 400;
      color: ${colors.xazyRed};
    }
  }

  p {
    max-width: 500px;
    opacity: 0.7;
    line-height: 1.5;
    text-align: center;
    margin: 0 auto;
    font-size: 16px;
  }

  a {
    display: block;
    padding: 15px 0;
    text-align: center;
    color: #000;
    text-decoration: none;
    font-weight: 600;
    border-radius: 8px;
    border: 2px solid ${colors.xazyRed};
    background-color: ${colors.xazyRed};
    width: 200px;
    margin: 50px auto;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${colors.xazyRed};
      background-color: ${colors.mainDark};
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 30px;
    }
  }
`;

export const HomeAbout = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: ${colors.codeBg};
`;

export const HomeCourseInfo = styled.div`
  padding: 0 20px;
  h2 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 28px;
    color: ${colors.mainLight};
    line-height: 1.5;
  }

  p {
    font-size: 18px;
    max-width: 850px;
    line-height: 1.6;
    text-align: center;
    margin: 0 auto;
    color: ${colors.mainLight};
    margin-bottom: 50px;
  }

  img {
    width: 150px;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      h4 {
        font-size: 22px;
        letter-spacing: 2px;
      }

      p {
        max-width: 430px;
        margin: 0;
      }
    }
  }
  @media screen and (max-width: 768px) {
    div {
      flex-wrap: wrap;
      gap: 40px;
    }
    h2 {
      line-height: 1.5;
    }
  }
`;

export const HomeCourses = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 20px;
  justify-content: space-evenly;
  gap: 30px;

  a {
    text-decoration: none;
    color: ${colors.mainLight};
  }

  div {
    background-color: ${colors.codeBg};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    height: auto;
    padding: 30px;
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    position: relative;
    overflow: hidden;

    div {
      position: absolute;
      width: 250px;
      height: 31px;
      right: -57px;
      top: 30px;
      border: 1px solid #ff2768;
      padding: 10px 0;
      justify-content: center;
      transform: rotate(34deg);
    }

    img {
      border-radius: 100%;
      width: 156px;
      height: 156px;
      object-fit: cover;
    }

    h5 {
      font-size: 18px;
      line-height: 1.5;
      text-align: center;
      height: 80px;
    }

    &:hover {
      box-shadow:
        rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px,
        rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px,
        rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
  }
`;
