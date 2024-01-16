import styled from "styled-components";
import { colors } from "../../styles/colors";

export const LessonLayout = styled.div`
    display: flex;
`

export const LessonDiv = styled.div`
    margin: 0 auto;
    color: ${colors.textDarkSecond};
    width: 100%;

    div:first-child {
        display: flex;

        @media screen and (max-width: 1120px) {
            display: block;
        }
        
        .content {
            width: 800px;
            margin: 0 auto;
            
            h3 {
                color: ${colors.white};
                font-weight: 500;
                margin: 25px 0;
            }

            @media screen and (max-width: 830px) { 
                width: 600px;

                h1 {
                    font-size: 20px;
                }

                h2 {
                    font-size: 16px;
                }
                p{
                font-size: 14px;
                }
            }

            @media screen and (max-width: 640px) {
                width: 360px;

                h1 {
                    margin-left: 0;
                }
            }
        }

        .navigation {
            width: 300px;
            background: ${colors.secondaryDark};

            @media screen and (max-width: 1120px) { 
                margin-right: auto;
                margin-left: auto;
                width: 80%;
            }

            ul {
                list-style: none;
                position: fixed;
                height: 50vh;
                top: 72px;
                overflow-y: scroll;
                width: 260px;
                /* scrollbar-width: none; 
                -ms-overflow-style: none;  
                &::-webkit-scrollbar {   
                    display: none;
                } */
                
                overflow: auto;
                background:
                linear-gradient(#292c31 40%, rgba(41, 44, 49, 0)), linear-gradient(rgba(41, 44, 49, 0), #292c31 70%) 0 100%, /* Shadows */
                radial-gradient(50% 0, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), radial-gradient(50% 100%, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;
                background: 
                linear-gradient(#292c31 40%, rgba(41, 44, 49, 0)), linear-gradient(rgba(41, 44, 49, 0), #292c31 70%) 0 100%, /* Shadows */
                radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;
                background-repeat: no-repeat;
                background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
                /* Opera doesn't support this in the shorthand */
                background-attachment: local, local, scroll, scroll;
                /* width */
                &::-webkit-scrollbar {
                width: 8px;
                }

                /* Track */
                &::-webkit-scrollbar-track {
                box-shadow: inset 0 0 1px grey; 
                border-radius: 6px;
                }
                
                /* Handle */
                &::-webkit-scrollbar-thumb {
                background: ${colors.gray}; 
                border-radius: 10px;
                }

                /* Handle on hover */
                &::-webkit-scrollbar-thumb:hover {
                background: ${colors.xazyRed}; 
                
                }
                
                li {
                    padding: 5px 4px 5px 0;
                    width: 240px;

                    @media screen and (max-width: 1120px) {
                        text-align: center;
                        margin: 0 auto;
                    }
                }

                a {
                    color: ${colors.textDark};
                    text-decoration: none;
                    padding: 5px 0;
                    line-height: 1.7;

                    @media screen and (max-width: 1120px) {
                        display: block;
                        margin: 0 auto;
                    }

                    &:hover {
                        color: ${colors.xazyRed};
                        border-bottom: 1px solid ${colors.xazyRed};

                    }
                }

                @media screen and (max-width: 1120px) { 
                    position: static;
                    height: 100%;
                    display: flex;
                    width: 100%;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    background-repeat: repeat;
                    background-size: contain;
                }
            }
        }
    }

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
        color: ${colors.white};

        &:hover {
            cursor: pointer;
            color: ${colors.xazyRed};
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
        overflow:auto;
        &::-webkit-scrollbar {
        height: 14px;
        }
        /* Track */
        &::-webkit-scrollbar-track {
        border: 2px solid ${colors.gray};
        border-radius: 6px;
        }
        /* Handle */
        &::-webkit-scrollbar-thumb {
        background: ${colors.gray}; 
        border-radius: 4px;
        }
        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
        background: ${colors.xazyRed}; 
        }

        code {
            line-height: 1.7;
            color: #ccc;
            background-color: ${colors.codeBg};
        }
    }

    .homework {
        background-color: ${colors.secondaryDark};
        padding: 24px 44px;
        line-height: 1.7;
        border-radius: 8px;
        color: ${colors.white};
        margin-bottom: 60px;


        li {
            list-style: disc;
            padding: 5px;
        }
    }

    a {
        color: ${colors.link};
        @media screen and (max-width: 1120px) {
            font-size: 14px;
        }

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

        &:hover {
            cursor: pointer;
            color: ${colors.xazyRed};
        }
    }
`
