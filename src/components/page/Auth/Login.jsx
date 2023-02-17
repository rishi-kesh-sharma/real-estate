import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { wrapper } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthState, setAuthState } from "@/store/features/authSlice";
import { login } from "./../../../apiCalls/auth";
const LoginForm = ({ styles }) => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  // login schema
  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is Required"),
    password: Yup.string()
      .required("Password is Required")
      .min(3, "Too Short!"),
  });
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
    login(values);
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      await store.dispatch(setAuthState(false));
      console.log("State on server", store.getState());
      return {
        props: {
          authState: false,
        },
      };
    }
);

export default LoginForm;
