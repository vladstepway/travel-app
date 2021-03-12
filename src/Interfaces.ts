interface views {
  imgURL: string;
  viewName: string;
  about: string;
}

interface details {
  info: string;
  views: views[];
  videoURL: string;
  mapCoords: object;
}

interface countries {
  name: string;
  capital: string;
  details: details;
  rating: any;
  photo: string;
}

interface searchInput {
  text:string,
  enabled:boolean
}

export interface initialStateType {
  countries: countries[];
  lang: string;
  searchInput: object;
}
