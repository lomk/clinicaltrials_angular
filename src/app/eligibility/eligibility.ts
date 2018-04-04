




import {Gender} from '../gender/gender';
import {AcceptHealthyVolunteers} from '../accept-healthy-volunteers/accept-healthy-volunteers';

export class Eligibility {
  id: number;
  minAge: number;
  gender: Gender;
  acceptHealthyVolunteers: AcceptHealthyVolunteers;
  inclusionCriteriaUa: String;
  inclusionCriteriaRu: String;
  inclusionCriteriaEn: String;
  exclusionCriteriaUa: String;
  exclusionCriteriaRu: String;
  exclusionCriteriaEn: String;
}
