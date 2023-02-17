import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { register } from "@/apiCalls/auth";
import { getSingleErrorMessage } from "@/utils/Errors";
import { setUserState } from "@/store/features/userSlice";
import { useRouter } from "next/router";
import { setAuthState } from "@/store/features/authSlice";

const SignUpForm = ({ styles }) => {
  const router = useRouter();
  const signUpSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email().required("Email is Required"),
    password: Yup.string()
      .required("Password is Required")
      .min(3, "Too Short!"),
    password_confirmation: Yup.string()
      .required("Confirm Password is Required")
      .min(3, "Too Short!"),
  });

  const handleSubmit = async (
    { name, email, password, password_confirmation },
    { setErrors }
  ) => {
    // setErrors();
    alert(
      JSON.stringify({ name, email, password, password_confirmation }, null, 2)
    );
    const res = await register({
      name,
      email,
      password,
      password_confirmation,
    });
    const { data, status } = res;
    if (status != 200 || status != 201) {
      const messages = getSingleErrorMessage(data.errors);
      setErrors(messages);
    }

    setUserState({ payload: data.data.user });
    setAuthState({ payload: true });
    router.push("/");
  };
  return (
    <>
      <Formik
        validationSchema={signUpSchema}
        initialValues={{
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label className={styles.label} htmlFor="Name">
            Full Name
          </label>
          <Field className={styles.field} id="name" name="name" />
          <ErrorMessage component="a" className={styles.errorMsg} name="name" />

          <label className={styles.label} htmlFor="Email">
            Email
          </label>
          <Field className={styles.field} id="email" name="email" />
          <ErrorMessage
            component="a"
            className={styles.errorMsg}
            name="email"
          />

          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <Field className={styles.field} id="password" name="password" />
          <ErrorMessage
            component="a"
            className={styles.errorMsg}
            name="password"
          />
          <label className={styles.label} htmlFor="password_confirmation">
            Confirm password
          </label>
          <Field
            className={styles.field}
            id="password_confirmation"
            name="password_confirmation"
          />
          <ErrorMessage
            component="a"
            className={styles.errorMsg}
            name="password_confirmation"
          />
          <div class="mt-8">
            <button type="submit" className={styles.button}>
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default SignUpForm;
