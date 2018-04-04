


import {StudyIdentifier} from '../study-identifier/study-identifier';
import {StudyGeneralInformation} from '../study-general-information/study-general-information';
import {Eligibility} from '../eligibility/eligibility';
import {TrialSite} from '../trial-site/trial-site';
import {CroUkraine} from '../cro-ukraine/cro-ukraine';
import {Sponsor} from '../sponsor/sponsor';

export class ClinicalStudy {
  id: number;
  creationDate: Date;
  studyIdentifier: StudyIdentifier;
  studyGeneralInformation: StudyGeneralInformation;
  eligibility: Eligibility;
  trialSite: TrialSite;
  croUkraine: CroUkraine;
  sponsor: Sponsor;
}
