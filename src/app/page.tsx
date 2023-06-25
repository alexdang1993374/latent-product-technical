import MedicationList from "@/components/MedicationList";

export default function Home() {
  return (
    <div className="mt-10 md:mt-0 w-screen md:w-full h-[50vh] text-center px-4 md:px-0">
      <MedicationList />
    </div>
  );
}
