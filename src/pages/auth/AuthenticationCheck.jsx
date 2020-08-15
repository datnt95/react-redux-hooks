import { getItem } from "../../utils/localStorage";
import { TOKEN_NAME } from "../../const";

const isLoggedIn = () => {
    const token = getItem(TOKEN_NAME);
    return !!token;
};

const AuthenticationCheck = ({ onAuth, onUnAuth }) => {
    if (isLoggedIn()) {
        return onAuth();
    } else {
        return onUnAuth();
    }
};

export default AuthenticationCheck;
