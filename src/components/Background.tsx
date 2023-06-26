import Image from "next/image";

import background from "../../public/herobg.png";

const Background = () => {
  return (
    <Image
      alt="background image"
      src={background}
      placeholder="blur"
      fill
      sizes="100vw"
      className="object-cover absolute inset-0 z-0"
    />
  );
};

export default Background;
