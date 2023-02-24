import TabsComponent from "@/components/utils/Tabs";
import React, { useEffect, useState } from "react";

const PropertyAreaTabs = ({ tabBtns, tabItems }) => {
  const [openTab, setOpenTab] = useState(1);
  //   console.log(tabBtns[openTab].split("-"));
  //
  return (
    <TabsComponent
      openTab={openTab}
      setOpenTab={setOpenTab}
      tabBtns={tabBtns}
      tabItems={tabItems}
    />
  );
};

export default PropertyAreaTabs;
