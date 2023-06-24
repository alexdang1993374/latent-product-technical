import Image from "next/image";

import DrugSelector from "@/components/DrugSelector";
import MedicationList from "@/components/MedicationList";
import latentLogo from "../../public/latent.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="w-full flex flex-col md:flex-row items-center fixed top-0 z-50 px-24 py-5 gap-1 bg-black">
        <div className="w-20 h-10 flex items-center">
          <Image
            src={latentLogo}
            alt="Latent Logo"
            width={73}
            height={14}
            className="object-cover"
          />
        </div>

        <div className="w-full flex justify-center">
          <DrugSelector />
        </div>
      </nav>

      <div className="mt-10 md:mt-5 w-screen md:w-full h-[50vh] text-center px-4 md:px-0">
        <MedicationList />
      </div>
    </main>
  );
}
