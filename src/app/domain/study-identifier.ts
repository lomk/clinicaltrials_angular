



import {MohOfUkraineOrder} from './moh-of-ukraine-order';
import {Country} from './country';
import {Sponsor} from './sponsor';
import {StudyStatus} from './study-status';

export class StudyIdentifier {
  id: number;
  sponsorsProtocolNumber: number;
  clinicalTrialsComUaIdentifier: number;
  clinicalTrialsGovIdentifier: number;
  eudraCTNumber: number;
  MohOfUkraineOrder: MohOfUkraineOrder;
  sponsorCountry: Country;
  sponsor: Sponsor;
  estimatedEnrollmentAllClinicaltrialsGov: number;
  estimatedEnrollmentAllMoHOfUkraine: number;
  estimatedEnrollmentAllCompany: number;
  startDateEnrolingInUkraine: number;
  studyStatus: StudyStatus;
  comletitionDate: String;
  finalEnrollmentInUkraineMoH: number;
  finalEnrollmentInUkraineCompany: number;
  lastUpdateDate: String;

}
