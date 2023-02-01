import React from "react";
import Back from "../common/Back";
import styles from "./Contact.module.css";

import img from "../../../public/images/general/house.jpg";

const Contact = () => {
  return (
    <>
      <section
        className={`${styles.contact} ${styles.mb}  contact mb pt-[5rem]`}>
        <Back
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={img.src}
        />
        <div className={`${styles.container} container`}>
          <form className={`${styles.shadow} shadow mt-[3rem]`}>
            <h4 className="text-gray-500 font-semibold">Fillup The Form</h4>{" "}
            <br />
            <div>
              <input
                type="text"
                placeholder="Name"
                className="text-lg text-gray-600"
              />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows="5"></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
