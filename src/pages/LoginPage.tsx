import { SignUpPage } from "../styles/loginPageStyle";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setUsername } from "../redux/username/username-slice";

export default function LoginPage() {
  const currentUsername = useAppSelector((state) => state.username.username);
  const dispatch = useAppDispatch();

  return (
    <SignUpPage>
      <div className="inside-box">
        <h1>Welcome to CodeLeap network!</h1>
        <h2>Please enter your username</h2>
        <input
          type="text"
          placeholder="John Doe"
          value={currentUsername}
          onChange={(e) => dispatch(setUsername(e.target.value))}
        />
        <div className="button-wrapper">
          <Link to="/network">
            <button disabled={currentUsername.length > 0 ? false : true}>
              ENTER
            </button>
          </Link>
        </div>
      </div>
    </SignUpPage>
  );
}
