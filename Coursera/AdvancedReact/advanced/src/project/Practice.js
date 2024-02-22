import * as Yup from "yup";
import { useFormik } from "formik";

export default function Practice() {
  // The below code would go inside a React component
  const { values, errors, touched, getFieldProps, handleSubmit } = useFormik({
    intialValues: {
      comment: "",
    },
    onSubmit: (values) => {
      // Handle form submission
    },
    validationSchema: Yup.object({
      comment: Yup.string().required("Required"),
    }),
  });

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" {...getFieldProps("comment")} />
      {touched.comment && errors.comment ? (
        <div>{errors.comment}</div>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  )
}
