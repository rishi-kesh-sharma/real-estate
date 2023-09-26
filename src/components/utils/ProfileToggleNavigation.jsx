import React from "react";
import Link from "next/link";
import { logoutFunctionality } from ".";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const ProfileToggleNavigation = ({ profileLinks }) => {
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);
  const router = useRouter();
  const handleLogout = async () => {
    await logoutFunctionality(removeCookie, router);
  };
  return (
    <div>
      <ul className="space-y-2 mt-[1rem] border border-t-gray-200  border-b-gray-border-t-gray-200 border-solid px-[2rem]">
        {profileLinks?.map((item) => {
          return (
            <li key={item?.name} className="border-b-[1px] border-b-gray-300">
              {item.path ? (
                <Link
                  href={item?.path}
                  className="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg hover:bg-gray-100 hover:text-black">
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    {item.name}
                  </span>
                </Link>
              ) : (
                <div
                  onClick={handleLogout}
                  className="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg hover:bg-gray-100 hover:text-black">
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfileToggleNavigation;
