export type TMedication =
  | "Tumor+Necrosis+Factor+Blocker"
  | "Thiazide+Diuretic"
  | "nonsteroidal+anti-inflammatory+drug";

export interface IMedicationResult {
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

export interface IUserDetails {
  id: string;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
}
