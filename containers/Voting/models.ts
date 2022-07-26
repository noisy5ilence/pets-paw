import { Breed } from '@/models';

export interface RandomCat {
  breeds: Breed[];
  id:     string;
  url:    string;
  width:  number;
  height: number;
}