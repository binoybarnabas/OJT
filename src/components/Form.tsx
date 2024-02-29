'use client'
import React, {  useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  Button,
  Container,
  Grid,
  Typography,
  InputLabel,
} from "@mui/material";

import  {FormProviderContext,FormProvider} from "@/contexts/FormContext";
import { UserData } from "@/Models";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  gender: Yup.string().required("Gender is required"),
  phoneNumber: Yup.string().required("Phone Number is required")
  .matches(/^\d+$/, "Phone number must contain only digits")
  .length(10, "Phone number must 10 digits long"),
  place: Yup.string().required("Place is required"),
  hobbies: Yup.array().min(1, "At least one hobby is required"),
  nationality: Yup.string().required("Nationality is required"),
  photo: Yup.mixed().required("Photo is required"),
});

const SignupForm = () => {
  const [FileName, setFileName] = useState("");
  const { formValues,updateFormValues } = useContext(FormProviderContext);
  

  const handleSubmit = (values:UserData,actions: FormikHelpers<UserData>)  =>{
    console.log("before");
    updateFormValues(values);
    console.log("after"); 
    setFileName("")
    actions.resetForm();
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      
        <Formik
          initialValues={formValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >

          {({ isSubmitting, errors, touched, isValid, setFieldValue }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name="firstName" // name is connected with the inital values of formik forms
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={<ErrorMessage name="firstName" />}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    name="lastName"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={<ErrorMessage name="lastName" />}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <Field as={RadioGroup} name="gender">
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </Field>
                    <ErrorMessage name="gender" />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="phoneNumber"
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    maxLength={10}
                    error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                    helperText={<ErrorMessage name="phoneNumber" />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="place"
                    label="Place"
                    variant="outlined"
                    fullWidth
                    error={touched.place && Boolean(errors.place)}
                    helperText={<ErrorMessage name="place" />}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <FormLabel component="legend">Hobbies</FormLabel>
                    <Grid container>
                      <Grid item xs={6}>
                        <Field
                          type="checkbox"
                          name="hobbies"
                          value="reading"
                          as={Checkbox}
                        />
                        <label>Reading</label>
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          type="checkbox"
                          name="hobbies"
                          value="cooking"
                          as={Checkbox}
                        />
                        <label>Cooking</label>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={6}>
                        <Field
                          type="checkbox"
                          name="hobbies"
                          value="sports"
                          as={Checkbox}
                        />
                        <label>Sports</label>
                      </Grid>
                      <Grid item xs={6}>
                        <Field
                          type="checkbox"
                          name="hobbies"
                          value="music"
                          as={Checkbox}
                        />
                        <label>Music</label>
                      </Grid>
                    </Grid>
                    <ErrorMessage name="hobbies" />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel>Nationality</InputLabel>
                    <Field as={Select} name="nationality">
                      <MenuItem value="us">United States</MenuItem>
                      <MenuItem value="uk">United Kingdom</MenuItem>
                      <MenuItem value="ca">Canada</MenuItem>
                      <MenuItem value="au">Australia</MenuItem>
                      {/* Add more countries as needed */}
                    </Field>
                    <ErrorMessage name="nationality" />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <InputLabel>Photo</InputLabel>
                  <input
                    id="photo"
                    name="photo"
                    type="file"
                    onChange={(event) => {
                      const file =
                        event.currentTarget.files &&
                        event.currentTarget.files[0];
                      if (file) {
                        setFieldValue("photo", file);
                        if (file !== null && file !== undefined) {
                          setFileName(file.name);
                        }
                      }
                    }}
                    style={{ display: "none" }}
                  />

                  <label htmlFor="photo">
                    <Button variant="outlined" component="span">
                      Upload
                    </Button>
                  </label>

                  {/* show the file name once the file is uploaded. */}
                  {FileName && <Typography>{FileName}</Typography>}

                  <ErrorMessage name="photo" />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={!isValid}
                  >
                    Add info
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
    </Container>
    
  );
};

export default SignupForm;
