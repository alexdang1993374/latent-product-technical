import Image from "next/image";

import latentLogo from "../../public/latent.svg";

const Default = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-16">
      <div>
        <Image
          src={latentLogo}
          alt="Latent Logo"
          width={334}
          height={64}
          className="object-cover"
        />
      </div>

      <div>
        <p className="text-xl">
          Building Medical Language Models to automate hospital operations,
          starting with insurance authorizations
        </p>
      </div>
    </div>
  );
};

export default Default;
