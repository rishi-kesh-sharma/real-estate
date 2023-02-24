import { useState } from "react";

export default function TabsComponent({
  tabBtns,
  openTab,
  setOpenTab,
  tabItems,
}) {
  console.log(openTab);
  return (
    <div className="flex flex-col items-center justify-start flex-wrap w-full  max-w-xl overflow-hidden">
      <ul className="grid grid-cols-1  gap-[1rem]">
        {tabBtns.map((tabBtn) => {
          return (
            <li key={tabBtn.key}>
              <p
                href="#"
                onClick={() =>
                  setOpenTab((prev) => {
                    return tabBtn.key;
                  })
                }
                className={` ${
                  openTab === tabBtn.key
                    ? "bg-green-600 text-white"
                    : "bg-green-400 text-gray-300"
                } inline-block px-4 py-2 text-gray-200 bg-white rounded shadow`}>
                {tabBtn.text}
              </p>
            </li>
          );
        })}
      </ul>
      <div className="p-3 mt-6 bg-white border">
        {tabItems.map((tabItem) => {
          return (
            <div className={openTab === tabItem.id ? "block" : "hidden"}>
              {" "}
              {tabItem.component}
            </div>
          );
        })}
      </div>
    </div>
  );
}
