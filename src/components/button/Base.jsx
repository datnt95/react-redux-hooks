import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { BORDER_RADIUS, INPUT_HEIGHT } from "const/style";

const useStyles = makeStyles((theme) => ({
    button: {
        minHeight: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        minWidth: (props) => props.minWidth || 120,
        "& .MuiButton-label": {
            textTransform: "uppercase"
        },
        "&.Mui-disabled": {
            color: theme.colors.white,
            background: theme.colors.backgroundDisabled
        },
        "&.MuiButton-outlined": {
            color: theme.colors.primaryText
        },
        "&.MuiButton-contained": {
            color: theme.colors.white
        },
        "&:hover": {
            boxShadow: "none"
        },
        "&.MuiButton-sizeSmall": {
            minHeight: 30
        }
    }
}));

export default function ButtonBase({ minWidth, children, className, ...rest }) {
    const classes = useStyles({ minWidth });

    return (
        <Button className={`${classes.button} ${className}`} {...rest}>
            {children}
        </Button>
    );
}
