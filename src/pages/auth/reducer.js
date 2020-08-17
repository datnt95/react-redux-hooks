import { getItem } from "../../utils/localStorage";
import { TOKEN_NAME } from "../../const/index";

const user = getItem(TOKEN_NAME);

const INITIAL_STATE = {
    user: user
};

export default function Auth(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        default:
            return state;
    }
}
