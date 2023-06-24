import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { motion } from "framer-motion";
import { useState } from "react";

import { IMedicationResult } from "@/types";

interface MedicationProps {
  medication: IMedicationResult;
}

const variants = {
  open: { height: "auto" },
  closed: { height: 0 },
};

const Medication = ({ medication }: MedicationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex gap-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <PlayArrowIcon
          className={`${
            isOpen ? "transform rotate-90" : ""
          } transition-transform duration-200 ease-in-out`}
        />

        {medication.openfda.brand_name[0]}
      </div>

      <motion.div
        className="overflow-hidden rounded-lg bg-gray-500"
        variants={variants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4">{medication.description}</div>
      </motion.div>
    </>
  );
};

export default Medication;
