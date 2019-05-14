import {Post} from './post.model';
import {Albums} from './album.model';
import {DaysOfWeek} from './daysOfWeek.model';
import {RideGroup} from './rideGroup.model';

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string
    }
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string
  };
  posts: Post[];
  albums: Albums[];
  daysOfWeek: DaysOfWeek;
  rideInGroup: RideGroup;
}
