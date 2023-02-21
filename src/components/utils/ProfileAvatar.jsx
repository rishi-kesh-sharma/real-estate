import React from "react";
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import { person1 } from "public/assets/images/people";
const ProfileAvatar = () => {
  return (
    <div className=" text-[4rem]">
      <Image
        src={person1}
        width={100}
        height={100}
        id="avatarButton"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        class="w-10 h-10 rounded-full cursor-pointer"
        alt="User dropdown"
      />
    </div>
  );
};

export default ProfileAvatar;
