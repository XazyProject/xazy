import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx'
import { LessonDiv, LessonLayout, LogoFixed, Socials } from './lessons.styled';
import SiteLogo from '../../assets/images/logo';
import GITHUB from '../../assets/images/GITHUB.svg'
import INSTAGRAM from '../../assets/images/INSTAGRAM.svg'


const Lessons: React.FC = () => {
    const file_name: string = '5_linkebi_da_fotoebi';
    const [post, setPost] = useState<string>('');

    useEffect(() => {
        import(`./${file_name}.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }, [file_name]);


    return (
        <LessonLayout>
            <LogoFixed>
                <SiteLogo />
                <Socials>
                    <h4 className='follow'>გამოგვყევით</h4>
                    <a href='https://github.com/xazyProject' target='_blank'>
                        <img src={GITHUB} className='github' alt='github' />
                        <span className='github-text'>ჩვენი <br /> გითჰაბი</span>
                    </a>
                    <a href='https://instagram.com/xazy.ge' target='_blank'>
                        <img src={INSTAGRAM} className='instagram' alt='instagram' />
                        <span className='instagram-text'>ჩვენი <br /> ინსტაგრამი</span>
                    </a>
                </Socials>
            </LogoFixed>
            <LessonDiv>
                <Markdown children={post} />
            </LessonDiv>
        </LessonLayout>
    );
};

export default Lessons;