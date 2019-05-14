import {Photo} from './photo.model';

export class Albums {
  userId: number;
  id: number;
  title: string;
  photos: Photo[];
}
