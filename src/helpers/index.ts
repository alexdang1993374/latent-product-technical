import { IMedicationResult, TMedication } from "@/types";

export const transformString = (medication: TMedication) => {
  let newStr = medication.replace(/\+/g, " ");

  newStr = newStr
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");

  return newStr;
};

export const removeDuplicates = (
  medications: IMedicationResult[]
): IMedicationResult[] => {
  return medications.reduce(
    (unique: IMedicationResult[], current: IMedicationResult) => {
      const isDuplicate = unique.some(
        (medication) =>
          medication.openfda.brand_name[0] === current.openfda.brand_name[0]
      );

      if (!isDuplicate) {
        unique.push(current);
      }
      return unique;
    },
    []
  );
};
