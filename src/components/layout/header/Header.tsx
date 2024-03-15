import SiteLogo from "../../../assets/images/logo";
import {
  HeadDiv,
  HeaderLayout,
  HeaderUl,
  MobileNavigation,
} from "./header.styled";
import avatarExample from "../../../assets/images/avatarExample.png";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <HeadDiv>
      <HeaderLayout>
        <Link to="/">
          <SiteLogo />
        </Link>
        <HeaderUl>
          <Hamburger toggled={isOpen} toggle={setOpen} />
          <li>
            <NavLink to="/">მთავარი</NavLink>
          </li>
          <li>
            <NavLink to="/courses">გაკვეთილები</NavLink>
          </li>
          <li>
            <a
              href="https://discord.gg/3z7sxqMTaj"
              target="_blank"
              rel="noreferrer"
            >
              შემოგვიერთდი
            </a>
          </li>
          <li>
            <NavLink to="/">მხარდაჭერა</NavLink>
          </li>
          <img src={avatarExample} alt="avatar" />
        </HeaderUl>

        <MobileNavigation className={isOpen ? "active" : "non-active"}>
          <NavLink to="/" onClick={() => setOpen(false)}>
            ჩემი პანელი
          </NavLink>
          <NavLink to="/" onClick={() => setOpen(false)}>
            გაკვეთილები
          </NavLink>
          <a
            href="https://discord.gg/3z7sxqMTaj"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            შემოგვიერთდი
          </a>
          <NavLink to="/" onClick={() => setOpen(false)}>
            მხარდაჭერა
          </NavLink>
        </MobileNavigation>
      </HeaderLayout>
    </HeadDiv>
  );
};

export default Header;
