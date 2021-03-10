interface views {
  imgURL: string
  viewName: string
  about: string
}

interface details {
  info: string
  views: views[]
  videoURL: string
  mapCoords: object
}

interface countries {
  name: string
  capital: string
  details: details
  rating: any
  photo: string
}

export interface initialStateType {
  countries: countries[];
  lang: string;
}
