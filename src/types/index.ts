export type TMedication =
  | "Tumor+Necrosis+Factor+Blocker"
  | "Thiazide+Diuretic"
  | "nonsteroidal+anti-inflammatory+drug";

export interface IDrug {
  name: string;
  query: TMedication;
}

export interface IMedicationResult {
  openfda: {
    brand_name: string[];
  };
}
