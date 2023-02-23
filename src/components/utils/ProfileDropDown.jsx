import Link from "next/link";
import ProfileAvatar from "./ProfileAvatar";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { logoutFunctionality } from ".";

const ProfileDropDown = ({ profileLinks, isAuthenticated }) => {
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);
  const router = useRouter();

  const handleClick = (e) => {
    e.currentTarget.parentNode.lastChild.classList.toggle("hidden");
  };
  const handleLogout = async (e) => {
    await logoutFunctionality(removeCookie, router);
  };
  return (
    <div className="relative">
      <div
        className="flex items-center justify-center gap-[0.4rem]"
        onClick={handleClick}>
        <ProfileAvatar />
        <svg
          sidebar-toggle-item
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </div>
      <ul
        id="dropdown-example"
        class="hidden absolute bg-white left-0 w-[200px] ">
        {profileLinks.map((dropItem) => {
          return !dropItem.path ? (
            <li className="border" onClick={handleLogout}>
              <div class="flex items-center w-full p-2 text-base font-normal text-gray-600 transition duration-75 rounded-lg pl-[1rem] group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {dropItem.name}
              </div>
            </li>
          ) : (
            <li className="border">
              <Link
                href={dropItem.path}
                // href={""}
                class="flex items-center w-full p-2 text-base font-normal text-gray-600 transition duration-75 rounded-lg pl-[1rem] group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                {dropItem.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ProfileDropDown;
