


import {TerapeuticArea} from '../terapeutic-area/terapeutic-area';

export class MedicalCondition {
  id: number;
  nameUa: String;
  nameRu: String;
  nameEn: String;
  shortDescriptionUa: String;
  shortDescriptionRu: String;
  shortDescriptionEn: String;
  fullDescriptionUa: String;
  fullDescriptionRu: String;
  fullDescriptionEn: String;
  therapeuticArea: TerapeuticArea;

}
