"use client";

import { useState } from "react";
import Banner from "./components/banner";
import Tabs from "./components/tabs";
import Slider from "./components/slider";

const BoothsPage = () => {
  const [tab, setTab] = useState("tab1");

  return (
    <div className="grid gap-5">
      <Banner />
      <Tabs tab={tab} setTab={setTab} />
      {tab === "tab1" ? <Slider /> : <div></div>}
    </div>
  );
};

export default BoothsPage;
