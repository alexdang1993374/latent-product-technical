"use client";

import { BounceLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="mt-10 h-full flex items-center justify-center">
      <BounceLoader color="#ffffff" speedMultiplier={2} />
    </div>
  );
};

export default Loading;
