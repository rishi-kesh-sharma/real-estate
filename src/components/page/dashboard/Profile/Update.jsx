import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
// import { register } from "@/apiCalls/auth";
import { getSingleErrorMessage } from "@/utils/Errors";
// import { setUserState } from "@/store/features/userSlice";
// import { setUserState } from "@/store/features/profileSlice";
import { useRouter } from "next/router";
import ImageField from "@/components/utils/ImageField";
import { updateProfile } from "@/apiCalls/profile";
import Container from "@/components/utils/Container";
const styles = {
  label: "block text-gray-600 text-sm  pt-2 pb-1",
  field:
    "bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-[1rem]  block w-full appearance-none max-w-[600px]",
  button:
    " bg-green-700 w-[130px] text-white py-3 px-4 w-full rounded hover:bg-green-600 font-light",
  errorMsg: "text-red-500 text-xs",
};

const UpdateUser = () => {
  const router = useRouter();
  const signUpSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email().required("Email is Required"),
    mobile: Yup.number().required("Mobile is Required"),
    dob: Yup.date().required("Date Of Birth is Required"),
    email: Yup.string().required("Email is Required"),
  });

  const [selectedFile, setSelectedFile] = useState();
  const [checkFile, setCheckFile] = useState(false);

  const imageHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setCheckFile(true);
  };

  const handleSubmit = async (
    { name, email, mobile, gender, dob, about_me, picture },
    { setErrors }
  ) => {
    alert(
      JSON.stringify(
        { name, email, mobile, gender, dob, about_me, picture },
        null,
        2
      )
    );
    const res = await updateProfile({
      name,
      email,
      mobile,
      gender,
      dob,
      about_me,
      picture,
    });
    const { data, status } = res;
    if (status != 200 || status != 201) {
      const messages = getSingleErrorMessage(data.errors);
      setErrors(messages);
    }

    // setUserState({ payload: data.data.user });
    // setAuthState({ payload: true });
    // router.push("/");
  };
  return (
    <div className="overflow-hidden shadow bg-white flex-1 rounded-lg py-[2rem] md:flex-[0.6]">
      <Container className="">
        <Formik
          validationSchema={signUpSchema}
          initialValues={{
            name: "",
            email: "",
            mobile: "",
            gender: "",
            dob: "",
            about_me: "",
            picture: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-[1rem]">
            <div>
              <label className={styles.label} htmlFor="name">
                Full Name
              </label>
              <Field className={styles.field} id="name" name="name" />
              <ErrorMessage
                component="a"
                className={styles.errorMsg}
                name="name"
              />
            </div>

            <div>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <Field className={styles.field} id="email" name="email" />
              <ErrorMessage
                component="a"
                className={styles.errorMsg}
                name="email"
              />
            </div>

            <div>
              <label className={styles.label} htmlFor="mobile">
                Mobile
              </label>
              <Field className={styles.field} id="mobile" name="mobile" />
              <ErrorMessage
                component="a"
                className={styles.errorMsg}
                name="mobile"
              />
            </div>
            <div>
              <label className={styles.label} htmlFor="dob">
                Date Of Birth
              </label>
              <Field type="date" className={styles.field} id="dob" name="dob" />
            </div>
            <div>
              <label className={styles.label} htmlFor="dob">
                About Me
              </label>
              <Field
                as="textarea"
                className={styles.field}
                id="dob"
                name="about_me"
                rows={5}
              />
            </div>

            <div>
              <label className={styles.label}>Upload Your Picture</label>
              <ImageField
                imageHandler={imageHandler}
                checkFile={checkFile}
                selectedFile={selectedFile}
                className={styles.field}
              />
            </div>
            <div className="mt-8 flex justify-end max-w-[600px]">
              <button type="submit" className={styles.button}>
                Update
              </button>
            </div>
          </Form>
        </Formik>
      </Container>
    </div>
  );
};

export default UpdateUser;
