



import {MedicalForm} from "./medical-form";
import {Dosage} from "./dosage";
import {DrugManufacturer} from "./drug-manufacturer";
import {Country} from "./country";

export class Comparator {
  id: number;
  nameUa: String;
  nameRu: String;
  nameEn: String;
  medicalForm: MedicalForm;
  dosage: Dosage;
  drugManufakturer: DrugManufacturer;
  country: Country;
}
