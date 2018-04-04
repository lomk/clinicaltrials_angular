


import {MedicalCondition} from '../medical-condition/medical-condition';
import {Phase} from '../phase/phase';
import {StudyType} from '../study-type/study-type';
import {StudyDesignAllocation} from '../study-design-allocation/study-design-allocation';
import {StudyDesignEndpointClassification} from '../study-design-endpoint-classification/study-design-endpoint-classification';
import {StudyDesignInterventionModel} from '../study-design-intervention-model/study-design-intervention-model';
import {StudyDesignMasking} from '../study-design-masking/study-design-masking';
import {StudyDesignPrimaryPurpose} from '../study-design-primary-purpose/study-design-primary-purpose';
import {StudyDesignObservationModel} from '../study-design-observation-model/study-design-observation-model';
import {StudyDesignTimePerspective} from '../study-design-time-perspective/study-design-time-perspective';

export class StudyGeneralInformation {
  id: number;
  protocolTitleUa: String;
  protocolTitleRu: String;
  protocolTitleEn: String;
  detailedDescriptionUa: String;
  detailedDescriptionRu: String;
  detailedDescriptionEn: String;
  purposeUa: String;
  purposeRu: String;
  purposeEn: String;
  quantityOfTrialSites: number;

  medicalCondition: MedicalCondition
  phase: Phase
  studyType: StudyType
  studyDesignAllocation: StudyDesignAllocation
  studyDesignEndpointClassification: StudyDesignEndpointClassification
  studyDesignInterventionModel: StudyDesignInterventionModel
  masking: StudyDesignMasking
  primaryPurpose: StudyDesignPrimaryPurpose
  observationalModel: StudyDesignObservationModel
  timePerspective: StudyDesignTimePerspective







}
