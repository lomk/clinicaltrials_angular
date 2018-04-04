


import {AcademicDegree} from '../academic-degree/academic-degree';
import {InvestigatorPhone} from '../phone/phone';
import {InvestigatorPhoneMobileService} from '../mobile-phone/mobile-phone.service';
import {InvestigatorPhoneMobile} from '../mobile-phone/mobile-phone';
import {InvestigatorFax} from '../fax/fax';

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
