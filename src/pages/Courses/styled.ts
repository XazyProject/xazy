import styled from "styled-components";
import { colors } from "../../styles/colors";

export const CoursesLayout = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 0;
`;

export const CourseCardLayout = styled.div`
  background-color: ${colors.codeBg};
  border-radius: 10px;
  border: 1px solid ${colors.gray};
  padding: 30px;
  margin-bottom: 50px;

  p {
    color: #838b95;
    line-height: 1.5;
    font-size: 18px;
    padding-top: 30px;
  }

  a {
    text-decoration: none;
    color: ${colors.mainLight};
  }

  .title {
    font-size: 24px;
    letter-spacing: 2px;
    line-height: 1.2;
  }

  .course-details {
    width: auto;
    background-color: ${colors.xazyRed};
    padding: 10px 20px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 8px;
    color: ${colors.mainDark};
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
`;

export const CourseCardTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    gap: 10px;

    span {
      display: flex;
      align-items: center;
      flex-direction: row;
      font-size: 14px;
      opacity: 0.7;

      svg {
        margin-right: 5px;
        width: 20px;
      }
    }
  }
`;

export const CourseCardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 30px;
  border-bottom: 1px solid ${colors.gray};
`;

export const CourseLogo = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;

  img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 100%;
    background-color: ${colors.gray};
    border: 3px solid ${colors.xazyRed};
  }
`;
