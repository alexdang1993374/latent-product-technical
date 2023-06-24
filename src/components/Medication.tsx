import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { motion } from "framer-motion";
import { useState } from "react";

import { useUser } from "@/hooks/useUser";
import { IMedicationResult } from "@/types";

interface MedicationProps {
  medication: IMedicationResult;
  isLast: boolean;
}

const variants = {
  open: { height: "auto" },
  closed: { height: 0 },
};

const Medication = ({ medication, isLast }: MedicationProps) => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const noDetails: boolean =
    !medication.description && !medication.dosage_forms_and_strengths;

  const addToPerscriptions = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="flex w-full justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex gap-3">
          <PlayArrowIcon
            fontSize="small"
            className={`${
              isOpen ? "transform rotate-90" : ""
            } transition-transform duration-200 ease-in-out`}
          />

          {medication.openfda.brand_name[0]}
        </div>

        {user && (
          <button
            className="rounded-full bg-gray-500 py-2 px-4"
            onClick={addToPerscriptions}
          >
            Add to perscriptions
          </button>
        )}
      </div>

      <motion.div
        className={`overflow-hidden rounded-lg bg-gray-500 ${
          isLast ? "mb-8" : ""
        }`}
        variants={variants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4 text-left flex flex-col gap-5">
          {noDetails ? (
            <div>No details available</div>
          ) : (
            <>
              {medication.description && (
                <div>
                  <strong>DESCRIPTION:</strong>{" "}
                  {medication.description[0].substring(15)}
                </div>
              )}

              {medication.dosage_forms_and_strengths && (
                <div>
                  <strong>APPLICATION & DOSAGE:</strong>{" "}
                  {medication.dosage_forms_and_strengths[0].substring(29)}
                </div>
              )}
            </>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Medication;
