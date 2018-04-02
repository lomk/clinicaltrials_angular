


import {User} from "../user/user";
import {Tag} from '../domain/tag';


export class Article {
  id: number;
  titleUa: String;
  titleRu: String;
  titleEn: String;
  descUa: String;
  descRu: String;
  descEn: String;
  seoDescUa: String;
  seoDescRu: String;
  seoDescEn: String;
  bodyUa: String;
  bodyRu: String;
  bodyEn: String;
  dateField: Date;
  rating: number;
  imgUrl: String;
  comments: Array<Comment>;
  user: User;
  tags: Array<Tag>;

}
