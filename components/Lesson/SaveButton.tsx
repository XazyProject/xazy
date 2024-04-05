import Link from "next/link";

interface SaveButtonProps {
  isSaved: boolean;
  handleSaveOrRemove: () => void;
  coursePath: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({
  isSaved,
  handleSaveOrRemove,
  coursePath,
}) => (
  <div className="lesson-save-div">
    <Link href={coursePath}>📖 კურსზე დაბრუნება</Link>
    <button
      onClick={handleSaveOrRemove}
      style={{
        backgroundColor: `${isSaved ? "#ff2768" : "#4ade80"}`,
        color: `${isSaved ? "#fff" : "#000"}`,
      }}
    >
      {isSaved ? "✘ მონიშნე დაუსრულებლად" : "✔️ მონიშნე დასრულებულად"}
    </button>
  </div>
);

export default SaveButton;
