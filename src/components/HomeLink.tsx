"use client";

import { useRouter } from "next/navigation";

const HomeLink = () => {
  const router = useRouter();

  return (
    <div className="cursor-pointer mr-10" onClick={() => router.push("/")}>
      <p className="font-bold">Home</p>
    </div>
  );
};

export default HomeLink;
