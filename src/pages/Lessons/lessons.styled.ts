import styled from "styled-components";
import { colors } from "../../styles/colors";

export const LessonDiv = styled.div`
    width: 800px;
    margin: 0 auto;
    color: ${colors.textDarkSecond};

    h1 {
        font-size: 24px;
        color: ${colors.white};
        margin-left: 40%;
        margin-top: 40px;
    }

    h2 {
        font-size: 20px;
        margin: 30px 0;
        padding: 5px 0;
        

        a {
            text-decoration: none;
            color: ${colors.white};

            &:visited {
                color: ${colors.white};
            }

            &:hover {
                color: ${colors.xazyRed};
            }
        }
    }

    p {
        font-size: 16px;
        margin: 20px 0;
        line-height: 1.75;
    }

    ul {
        list-style-type: disc;
        margin: 20px 0;
        padding: 0 0 0 26px;

        li {
            margin: 8px 0;
            padding: 0 0 0 6px;
            font-size: 16px;
        }
    }

    p code {
        font-size: 14px;
        padding: 4px;
        color: ${colors.xazyRed};
        background: ${colors.secondaryDark};
        border-radius: 6px;
    }

    pre {
        font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
        font-size: 1rem;
        line-height: 1.7;
        padding: 16px 16px 16px 60px;
        margin: 27px 0;
        background-color: ${colors.codeBg};

        code.lang-html {
            line-height: 1.7;
            color: #ccc;
            background-color: ${colors.codeBg};
        }
    }

    .homework {
        background-color: ${colors.secondaryDark};
        padding: 24px;
        line-height: 1.7;
        border-radius: 8px;
        color: ${colors.white};
    }

    a {
        color: ${colors.link};

        &:visited {
            color: ${colors.linkVisited};
        }

        &:hover {
            text-decoration: none;
        }
    }

    kbd {
        background-color: #4b5563;
        border-color: #6b7280;
        color: #f3f4f6;
        padding: 4px 6px;
        font-size: 12px;
        border-radius: 6px;
    }
`

export const LessonNavigation = styled.div`
    width: 249px;
    display: flex;
    flex-direction: column;
    
    padding: 23px 25px;
    background-color: ${colors.secondaryDark};
    a {
        color: ${colors.textDark};
        text-decoration: none;
        margin-bottom: 15px;
    }
`

export const LessonLayout = styled.div`
    display: flex;
`