import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const HeadDiv = styled.div`
    width: 100vw;
    border-bottom: 3px solid ${colors.gray};
`

export const HeaderLayout = styled.div`
    max-width: 1440px;
    display: flex;
    margin: 0 auto;
    padding: 8px 32px;
    justify-content: space-between;
`

export const HeaderUl = styled.ul`
    display: flex;
    gap: 32px;
    font-size: 16px;
    justify-content: center;
    align-items: center;

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


`