import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const HeadDiv = styled.div`
    border-bottom: 3px solid ${colors.gray};
    background-color: ${colors.mainDark};
    position: fixed;
    width: 100%;
    z-index: 5;
`

export const HeaderLayout = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 8px 32px;
    justify-content: space-between;
    position: relative;
    z-index: 5;

`

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
`

export const MobileNavigation = styled.div`
    padding: 50px 0;
    background-color: ${colors.secondaryDark};
    position: absolute;
    right: 0;
    
    border-bottom-left-radius: 62px;
    z-index: -3;
    border: 1px solid ${colors.gray};
    transition: all 0.3s ease-in-out;

    &.active {
        top: 67px;

    }

    &.non-active {
        top: -290px;

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
`