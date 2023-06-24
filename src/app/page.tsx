import Image from "next/image";

import DrugSelector from "@/components/DrugSelector";
import MedicationList from "@/components/MedicationList";
import latentLogo from "../../public/latent.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="w-full flex flex-col md:flex-row items-center fixed top-0 z-50 px-24 py-10 gap-1 bg-black">
        <div className="w-20 h-10 flex items-center">
          <Image src={latentLogo} alt="Latent Logo" className="object-cover" />
        </div>

        <div className="w-full flex justify-center">
          <div className="md:mr-20">
            <DrugSelector />
          </div>
        </div>
      </nav>

      <div className="mt-20 md:mt-10 w-full flex flex-col text-center">
        <MedicationList />
      </div>
    </main>
  );
}
