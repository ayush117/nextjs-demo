"use clients";

import Image from "next/image";
import Link from "next/link";
import bannerImg from "../../../../public/logo-creatorcon-wy.webp";

const Banner = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 overflow-hidden bg-blue-950 lg:flex-row">
      <div className="relative z-10 shrink-0 px-6 py-4 xl:py-6">
        <div className="absolute -right-10 top-1/2 hidden size-40 -translate-y-1/2 rotate-45 rounded-lg bg-blue-950 lg:block"></div>
        <Link className="relative top-1" href="https://creatorcon.com/">
          <Image className="w-44 md:w-72" src={bannerImg} alt="banner" />
        </Link>
      </div>
      <div className="relative bg-yellow-300 px-6 py-4 text-center font-medium lg:px-24 lg:text-start xl:py-6">
        <p>
          Explore our CreatorCon <b>booth options</b> to showcase your brand, connect with Influencers, Industry Leaders
          and maximise your presence at the event. Whether you're looking to engage with our diverse audience or
          generate leads, we have the perfect booth package to help you achieve your goals.
        </p>
      </div>
    </div>
  );
};

export default Banner;
