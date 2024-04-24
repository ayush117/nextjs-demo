"use client";

const Tabs = ({ tab, setTab }: { tab: string; setTab: (value: string) => void }) => {
  const handleTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mb-4 text-center text-xl font-bold tracking-tight text-blue-950 lg:mb-6 lg:text-3xl">
        Choose your booth
      </div>
      <div className="flex overflow-hidden rounded-full border border-blue-950 p-0.5 text-sm lg:text-base">
        <button
          onClick={() => handleTab("tab1")}
          className={`rounded-full px-4 py-2 !font-bold lg:px-6 ${tab === "tab1" ? "bg-blue-950 text-white" : "text-blue-950"}`}
        >
          Standard Booths
        </button>
        <button
          onClick={() => handleTab("tab2")}
          className={`rounded-full px-4 py-2 !font-bold lg:px-6 ${tab === "tab2" ? "bg-blue-950 text-white" : "text-blue-950"}`}
        >
          Self Build Spaces
        </button>
      </div>
    </div>
  );
};

export default Tabs;
