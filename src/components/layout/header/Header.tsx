import SiteLogo from "../../../assets/images/logo";
import { HeadDiv, HeaderLayout, HeaderUl } from "./header.styled";
import avatarExample from '../../../assets/images/avatarExample.png'

const Header = () => {

    return (
        <HeadDiv>
            <HeaderLayout>
                <SiteLogo />
                <HeaderUl>
                    <li><a href="#">ჩემი პანელი</a></li>
                    <li><a href="#">გაკვეთილები</a></li>
                    <li><a href="#">შემოგვიერთდი</a></li>
                    <li><a href="#">მხარდაჭერა</a></li>
                    <img src={avatarExample} alt="avatar" />
                </HeaderUl>
            </HeaderLayout>
        </HeadDiv>
    )
}

export default Header;