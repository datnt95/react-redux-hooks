import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/styles";

import { PADDING_LIST_ITEM_LEFT_RIGHT, INPUT_HEIGHT, BORDER_RADIUS, FONT_SIZE_INPUT_TEXT } from "const/style.js";

const InputBaseCustomize = withStyles((theme) => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(4)
        },
        backgroundColor: theme.palette.common.white,
        border: (props) => `1px solid ${props.error ? theme.palette.primary.main : theme.colors.border}`,
        paddingLeft: PADDING_LIST_ITEM_LEFT_RIGHT,
        paddingRight: PADDING_LIST_ITEM_LEFT_RIGHT,
        borderRadius: BORDER_RADIUS,
        height: INPUT_HEIGHT,
        fontSize: FONT_SIZE_INPUT_TEXT,
        fontWeight: "normal",
        "&:focus-within": {
            borderColor: theme.colors.primaryText
        },
        "&.MuiInputBase-multiline": {
            padding: `5px ${PADDING_LIST_ITEM_LEFT_RIGHT}px`,
            height: "100%"
        }
    },
    input: {
        position: "relative",
        fontSize: FONT_SIZE_INPUT_TEXT,
        fontWeight: "normal",
        width: "100%",
        height: "100%",
        transition: theme.transitions.create(["border-color", "box-shadow"]) // }
    }
}))(InputBase);

export default InputBaseCustomize;
