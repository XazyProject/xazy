import Link from 'next/link';

interface MobileNavigationProps {
  isOpen: boolean;
  closeNavigation: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, closeNavigation }) => {
  return (
    <div className={`mobile-navigation ${isOpen ? 'active' : 'non-active'}`}>
      <div className="bg"></div>
      <Link href="/" onClick={closeNavigation} aria-label="Home">
        მთავარი
      </Link>
      <Link href="/courses" onClick={closeNavigation} aria-label="Lessons">
        გაკვეთილები
      </Link>
      <a href="https://discord.gg/3z7sxqMTaj" target="_blank" rel="noreferrer" onClick={closeNavigation} aria-label="Discord">
        შემოგვიერთდი
      </a>
      <Link href="/contribute" onClick={closeNavigation} aria-label="Contribute">
        მხარდაჭერა
      </Link>
    </div>
  );
};

export default MobileNavigation;
