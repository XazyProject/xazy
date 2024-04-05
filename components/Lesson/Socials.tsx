import Image from 'next/image';
import GITHUB from '../../assets/images/GITHUB.svg';
import INSTAGRAM from '../../assets/images/INSTAGRAM.svg'


const Socials: React.FC = () => (
  <div className="socials">
    <h4 className="follow">გამოგვყევით</h4>
    <a
      href="https://github.com/xazyProject"
      target="_blank"
      rel="noreferrer"
    >
      <Image src={GITHUB} alt="github" width={40} height={40} className="github" />
      <span className="github-text">
        ჩვენი <br /> გითჰაბი
      </span>
    </a>
    <a
      href="https://instagram.com/xazy.ge"
      target="_blank"
      rel="noreferrer"
    >
      <Image src={INSTAGRAM} alt="instagram" width={40} height={40} className="instagram" />
      <span className="instagram-text">
        ჩვენი <br /> ინსტაგრამი
      </span>
    </a>
  </div>
);

export default Socials;
