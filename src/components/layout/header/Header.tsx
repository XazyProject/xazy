import SiteLogo from "../../../assets/images/logo";
import { HeadDiv, HeaderLayout, HeaderUl, MobileNavigation } from "./header.styled";
import avatarExample from '../../../assets/images/avatarExample.png'
import Hamburger from 'hamburger-react'
import { useState } from "react";


const Header = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <HeadDiv>
            <HeaderLayout>
                <SiteLogo />
                <HeaderUl>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                    <li><a href="#">ჩემი პანელი</a></li>
                    <li><a href="#">გაკვეთილები</a></li>
                    <li><a href="#">შემოგვიერთდი</a></li>
                    <li><a href="#">მხარდაჭერა</a></li>
                    <img src={avatarExample} alt="avatar" />
                </HeaderUl>

                <MobileNavigation className={isOpen ? 'active' : 'non-active'}>
                    <a href="#" onClick={() => setOpen(false)}>ჩემი პანელი</a>
                    <a href="#" onClick={() => setOpen(false)}>გაკვეთილები</a>
                    <a href="#" onClick={() => setOpen(false)}>შემოგვიერთდი</a>
                    <a href="#" onClick={() => setOpen(false)}>მხარდაჭერა</a>
                </MobileNavigation>

            </HeaderLayout>
        </HeadDiv>
    )
}

export default Header;