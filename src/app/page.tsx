import Image from "next/image";
import latentLogo from "../../public/latent.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-20 h-20">
        <Image src={latentLogo} alt="Latent Logo" className="object-cover" />
      </div>
    </main>
  );
}
