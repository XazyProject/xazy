import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { toggleDarkMode } from "../../../redux/darkModeSlice";

const Header = () => {
    const { mode } = useSelector((state: RootState) => state.darkMode)
    const dispatch = useDispatch();
    console.log(mode)
    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ex nostrum mollitia. A magnam unde, porro commodi deserunt delectus ducimus iusto nulla cum eius animi non dolor ea perferendis minima.
            </p>
            <button onClick={() => dispatch(toggleDarkMode())}>
                toggle
            </button>
        </div>
    )
}

export default Header;