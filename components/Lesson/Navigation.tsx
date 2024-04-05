interface NavigationProps {
  h2Array: string[];
  selectedH2Index: number | null;
  handleNavigationClick: (index: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  h2Array,
  selectedH2Index,
  handleNavigationClick,
}) => (
  <div className="navigation">
    <ul>
      <h4>სარჩევი</h4>
      {h2Array.map((item, index) => (
        <li
          key={`category-left-${index}`}
          onClick={() => handleNavigationClick(index)}
          className={index === selectedH2Index ? "selected" : ""}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Navigation;
