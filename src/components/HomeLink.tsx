"use client";

import { useRouter } from "next/navigation";

const HomeLink = () => {
  const router = useRouter();

  return (
    <div className="cursor-pointer" onClick={() => router.push("/")}>
      Home
    </div>
  );
};

export default HomeLink;
