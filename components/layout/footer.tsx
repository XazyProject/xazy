'use client'
import { DiscordFooter, GithubFooter, InstagramFooter } from "@/assets/images/SVGs";
import SiteLogo from "@/assets/images/logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-layout">
      <div className="footer-container">
        <div className="footer-left">
          <Link href="/" aria-label="Home">
            <SiteLogo />
          </Link>
          <p>ვებ-დეველოპმენტის გაკვეთილები.</p>
          <div>
            <a
              href="https://github.com/XazyProject"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <GithubFooter />
            </a>
            <a
              href="https://discord.com/invite/3z7sxqMTaj"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
            >
              <DiscordFooter />
            </a>
            <a
              href="https://www.instagram.com/xazy.ge/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramFooter />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <p>
            შეიტანე წვლილი სასწავლო მასალის დამატებასა და ვებსაიტის გამართვაში.
          </p>
          <Link href="/contribute" aria-label="Contribute">მასალის მოწოდება</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
