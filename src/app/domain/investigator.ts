


import {AcademicDegree} from './academic-degree';
import {InvestigatorPhone} from './investigator-phone';
import {InvestigatorPhoneMobileService} from '../services/investigator-phone-mobile.service';
import {InvestigatorPhoneMobile} from './investigator-phone-mobile';
import {InvestigatorFax} from './investigator-fax';

export class Investigator {
  id: number;
  firstNameUa: String;
  firstNameRu: String;
  firstNameEn: String;
  lastNameUa: String;
  lastNameRu: String;
  lastNameEn: String;
  patronymicNameUa: String;
  patronymicNameRu: String;
  patronymicNameEn: String;
  birthDate: String;
  academicDegrees: Array<AcademicDegree>;
  phoneList: Array<InvestigatorPhone>;
  phoneMobileList: Array<InvestigatorPhoneMobile>;
  faxList: Array<InvestigatorFax>;












}
