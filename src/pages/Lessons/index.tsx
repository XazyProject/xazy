import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx'
import { LessonDiv, LessonLayout } from './lessons.styled';

const Lessons: React.FC = () => {
    const file_name: string = '3_teqsttan_mushaoba';
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
            <LessonDiv>
                <Markdown children={post} />
            </LessonDiv>
        </LessonLayout>
    );
};

export default Lessons;