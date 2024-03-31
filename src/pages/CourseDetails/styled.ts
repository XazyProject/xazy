import styled from "styled-components";
import { colors } from "../../styles/colors";

export const CourseDetailsLayout = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
`;

export const CourseDetailsCard = styled.div`
  margin-bottom: 40px;
  border: 1px solid ${colors.gray};
  background-color: ${colors.codeBg};
  border-radius: 10px;
  h2 {
    font-size: 24px;
    padding: 20px;
    border-bottom: 1px solid ${colors.gray};
  }

  a {
    display: block;
    text-decoration: none;
    color: ${colors.textDark};
    font-size: 18px;
    padding: 15px 10px;
    margin: 5px 0;
    box-sizing: border-box;
    width: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  div {
    display: flex;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
    &:hover {
      background-color: #374151;
    }
  }

  svg {
    opacity: 0.6;
    width: 22px;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 18px;
    }

    a {
      font-size: 16px;
      line-height: 1.5;
    }
  }
`;

export const CourseDetailsDone = styled.div`
  width: 30px;
  height: 30px;
  /* border: 2px solid #919191; */
  border-radius: 100%;
  padding: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;
