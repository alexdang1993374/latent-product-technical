import { TMedication } from "@/types";

export const transformString = (medication: TMedication) => {
  let newStr = medication.replace(/\+/g, " ");

  newStr = newStr
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");

  return newStr;
};
