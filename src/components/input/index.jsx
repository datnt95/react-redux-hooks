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
        fontSize: 13,
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

export default function Input({ width, ...rest }) {
    const classes = useStyles({ width });
    return (
        <FormControl className={classes.root}>
            {rest.label && (
                <Typography className={`${classes.label}`} variant="body2">
                    {rest.label}
                </Typography>
            )}
            <InputBaseCustomize {...rest} />
            {rest.error && <div className={classes.errorText}>{rest.errorText || "error"}</div>}
        </FormControl>
    );
}
