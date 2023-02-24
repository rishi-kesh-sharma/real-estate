import React from "react";
import Link from "next/link";
import DropdownProfileAvatar from "@/components/utils/ProfileAvatar";
import ProfileDropDown from "@/components/utils/ProfileDropDown";
import AuthButton from "@/components/utils/AuthButton";
import { profileLinks } from "@/data/Data";

const RightNavLinks = ({
  links,
  handleNavLinksClick,
  isAuthenticated,
  profile,
}) => {
  return isAuthenticated ? (
    <ProfileDropDown
      profileLinks={profileLinks}
      isAuthenticated
      profile={profile}
    />
  ) : (
    <AuthButton />
  );
};

export default RightNavLinks;
