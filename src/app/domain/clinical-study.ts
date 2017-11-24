


import {StudyIdentifier} from "./study-identifier";
import {StudyGeneralInformation} from "./study-general-information";
import {Eligibility} from "./eligibility";
import {TrialSite} from "./trial-site";
import {CroUkraine} from "./cro-ukraine";
import {Sponsor} from "./sponsor";

export class ClinicalStudy {
  id: number;
  creationDate: Date;
  studyIdentifier: StudyIdentifier
  studyGeneralInformation: StudyGeneralInformation;
  eligibility: Eligibility;
  trialSite: TrialSite;
  croUkraine: CroUkraine;
  sponsor: Sponsor;
}
