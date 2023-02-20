import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  login,
  selectAuthState,
  setAuthState,
} from "@/store/features/authSlice";
import { useRouter } from "next/router";
import { setUserState } from "@/store/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Toast from "@/components/utils/Toast";

// FUNCTIONAL COMPONENENT
const LoginForm = ({ styles }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  // LOGIN VALIDATION SCHEMA
  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is Required"),
    password: Yup.string()
      .required("Password is Required")
      .min(3, "Too Short!"),
  });

  // HANDLE LOGIN SUBMIT
  const handleSubmit = async (values, { setErrors }) => {
    // DISPATCHING LOGIN ACTION
    const resultAction = await dispatch(login(values));

    // EXECUTES IF THE LOGIN IS SUCCESSFUL
    if (login.fulfilled.match(resultAction)) {
      const user = resultAction.payload;
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });

      // REDIRECTING TO HOME
      router.push("/");

      // EXECUTES IF LOGIN FAILS
    } else {
      // EXECUTES IF THE RESULTACTION HAS NO PAYLOAD
      if (resultAction.payload) {
        setErrors(resultAction.payload.data);
      }
      // EXECUTES IF RESULT ACTION HAS NO PAYLOAD
      else {
        Toast.fire({
          icon: "error",
          title: `Cannot Login: ${resultAction.error.message}`,
        });
      }
    }
  };
  // const data = { data: { user: values } };

  // setUserState({ payload: data.data.user });
  // setAuthState({ payload: true });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}>
        <Form>
          <label className={styles.label} htmlFor="Email">
            Email
          </label>
          <Field className={styles.field} id="email" name="email" />
          <ErrorMessage
            component="a"
            className={styles.errorMsg}
            name="email"
          />
          <label className={styles.label} htmlFor="Email">
            Password
          </label>
          <Field className={styles.field} id="password" name="password" />
          <ErrorMessage
            component="a"
            className={styles.errorMsg}
            name="password"
          />
          <div className="mt-8">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;