import React from "react";
import Back from "../../utils/Back";
import styles from "./index.module.css";
import featureImage from "../../../../public/assets/images/house.jpg";

const Contact = () => {
  return (
    <>
      <section
        className={`${styles.contact} ${styles.mb}  contact mb pt-[1rem]`}>
        <Back
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={featureImage.src}
        />
        <div className={`${styles.container} container`}>
          <form className={`${styles.shadow} shadow mt-[3rem]`}>
            <h4 className="text-gray-400 font-semibold">Fillup The Form</h4>{" "}
            <br />
            <div>
              <input
                type="text"
                placeholder="Name"
                className="text-lg text-gray-600"
                required
              />
              <input type="email" placeholder="Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea cols="30" rows="5"></textarea>
            <button
              type="submit"
              className="bg-green-500 px-[1rem] py-[0.5rem] font-light">
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
