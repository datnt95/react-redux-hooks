import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import { string, object } from "yup";
import ButtonBase from "components/button/Base";

import InputBase from "components/input";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        minWidth: "100wd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));

const LoginSchema = object({
    email: string().required("This field is required"),
    password: string().min(4, "Min is 4 characters").required("This field is required")
});

export default function Login() {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: LoginSchema,
        onSubmit: (values, { setSubmitting, setStatus }) => {
            setStatus({ error: null });
            setSubmitting(true);
            setStatus({ error: null });
        }
    });

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValid } = formik;

    return (
        <Grid className={classes.root}>
            <form onSubmit={handleSubmit} className={classes.loginForm}>
                <Grid container className={classes.root} direction="column" spacing={4}>
                    <Grid item>
                        <InputBase
                            label="Email"
                            width="250px"
                            name="email"
                            onChange={handleChange}
                            value={values.email || ""}
                            onBlur={handleBlur}
                            error={errors.email && touched.email}
                            errorText={errors.email}
                            autoFocus={true}
                            placeholder={"example@gmail.com"}
                        />
                    </Grid>
                    <Grid item>
                        <InputBase
                            label="Password"
                            width="250px"
                            type="password"
                            name="password"
                            value={values.password}
                            disabled={isSubmitting}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.password && touched.password}
                            errorText={errors.password}
                            placeholder="Password"
                        />
                    </Grid>
                    <Grid item>
                        <div className={classes.btnSubmit}>
                            <ButtonBase
                                fullWidth
                                type="submit"
                                color="primary"
                                variant="contained"
                                disabled={isSubmitting || !isValid}
                            >
                                Login
                            </ButtonBase>
                            {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
                        </div>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
}
