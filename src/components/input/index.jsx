import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import InputBaseCustomize from "components/input/InputBase";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        position: "relative",
        flexWrap: "wrap",
        width: (props) => props.width || 200
    },
    errorText: {
        color: theme.colors.red,
        fontSize: 12,
        position: "absolute",
        top: 4,
        right: 0
    },
    labelError: {
        color: theme.colors.red
    },
    success: {
        borderColor: `${theme.colors.waterLeaf} !important`
    },
    label: {
        marginBottom: 4,
        fontWeight: 500,
        fontSize: "15px"
    }
}));

export default function Input({ label, width, errorText, error, ...rest }) {
    const classes = useStyles({ width });
    return (
        <FormControl className={classes.root}>
            {label && (
                <Typography className={`${classes.label}`} variant="body2">
                    {label}
                </Typography>
            )}
            <InputBaseCustomize {...rest} />
            {error && <div className={classes.errorText}>{errorText || "error"}</div>}
        </FormControl>
    );
}
