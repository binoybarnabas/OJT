export interface UserData {
    firstName: string;
    lastName: string;
    gender: string;
    phoneNumber: string;
    place: string;
    hobbies: string[]; 
    nationality: string;
    photo: File | null;
  }

  export interface Game {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
}


export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
}
