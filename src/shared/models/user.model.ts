import {Post} from './post.model';
import {Albums} from './album.model';
import {DaysOfWeek} from './daysOfWeek.model';
import {RideGroup} from './rideGroup.model';

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  posts: Post[];
  albums: Albums[];
  daysOfWeek: DaysOfWeek;
  rideInGroup: RideGroup;


  constructor() {
    this.id = null;
    this.name = '';
    this.username = '';
    this.email = '';
    this.address = new Address();
    this.phone = '';
    this.website = '';
    this.company = new Company();
    this.posts = [new Post()];
    this.albums = [new Albums()];
    this.daysOfWeek = new DaysOfWeek();
    this.rideInGroup = new RideGroup();
  }
}

export class Address {
  city: string;
  geo: Geo;
  street: string;
  suite: string;
  zipcode: string;


  constructor() {
    this.geo = new Geo();
  }
}

export class Geo {
  lat: string;
  lng: string;
}

export class Company {
  bs: string;
  catchPhrase: string;
  name: string;
}
