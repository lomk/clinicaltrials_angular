
import {MedicalForm} from '../medical-form/medical-form';
import {Dosage} from '../dosage/dosage';
import {DrugManufacturer} from '../drug-manufacturer/drug-manufacturer';
import {Country} from '../country/country';

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
