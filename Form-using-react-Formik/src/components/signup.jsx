import React from "react";
import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

let validationSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email("The email address you gave was incorrect")
    .required(),
  gender: yup.string().required(),
  country: yup.string().required(),
});

export default function Signup() {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          isTall: false,
          gender: "",
          country: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setTimeout(() => {
            console.log(data);
            setSubmitting(false);
          }, 3000);
        }}
      >
        {({ values, errors, touched, isSubmitting }) => (
          <Form>
            {/* name */}
            <div className="form-group">
              <Field
                name="name"
                type="input"
                placeholder="Name"
                className="form-control"
              />
              {touched.name && errors.name ? (
                <small className="text-danger ">{errors.name}</small>
              ) : null}
            </div>
            {/* email */}
            <div className="form-group">
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="form-control"
              />
              {touched.email && errors.email ? (
                <small className="text-danger ">{errors.email}</small>
              ) : null}
              {/* <ErrorMessage name="email" className="text-danger" /> */}
            </div>
            {/* country */}
            <div className="form-group">
              <Field as="select" name="country" class="form-control">
                <option value="">Select your country</option>
                <option value="Canada">Canada</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="India">India</option>
              </Field>
              {touched.country && errors.country ? (
                <small className="text-danger ">{errors.country}</small>
              ) : null}
            </div>
            {/* checkBox */}
            <div className="form-check">
              <Field
                name="isTall"
                type="checkBox"
                className="form-check-input"
              />
              <label> Tall </label>
            </div>

            {/* Gender */}
            <label>Gender</label>
            <div class="form-check">
              <Field
                name="gender"
                type="radio"
                className="form-check-input"
                value="Male"
              />
              <label class="form-check-label">Male</label>
            </div>
            <div class="form-check">
              <Field
                name="gender"
                type="radio"
                className="form-check-input"
                value="Female"
              />
              <label class="form-check-label">Female</label>
            </div>
            <div class="form-check">
              <Field
                name="gender"
                type="radio"
                className="form-check-input"
                value="Female"
              />
              <label class="form-check-label">Others</label>
            </div>
            {touched.gender && errors.gender ? (
              <small className="text-danger ">{errors.gender}</small>
            ) : null}

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary float-right"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving" : "Submit"}
              </button>
            </div>
            <pre>{JSON.stringify(values)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}
