import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { motion } from "framer-motion";
import { useState } from "react";

import { IMedicationResult } from "@/types";
import LikedButton from "./LikedButton";

interface MedicationProps {
  medication: IMedicationResult;
}

const variants = {
  open: { height: "auto" },
  closed: { height: 0 },
};

const Medication = ({ medication }: MedicationProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const noDetails: boolean =
    !medication.description && !medication.dosage_forms_and_strengths;

  return (
    <>
      <div
        className="flex flex-row w-full justify-between cursor-pointer"
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

        <LikedButton medicationName={medication.openfda.brand_name[0]} />
      </div>

      <motion.div
        className="overflow-hidden rounded-lg bg-gray-500"
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
