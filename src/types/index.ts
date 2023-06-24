export type TMedication =
  | "Tumor+Necrosis+Factor+Blocker"
  | "Thiazide+Diuretic"
  | "nonsteroidal+anti-inflammatory+drug";

export interface IDrug {
  name: string;
  query: TMedication;
}

export interface IMedicationResult {
  indications_and_usage: string[];
  dosage_and_administration: string[];
  dosage_forms_and_strengths: string[];
  description: string[];
  openfda: {
    brand_name: string[];
  };
}

export interface MenuItem {
  label: string;
  onClick: VoidFunction;
}
