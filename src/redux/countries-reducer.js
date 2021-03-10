const SET_COUNTRIES = "SET-COUNTRIES";
const SET_COUNTRY = "SET-COUNTRY"

const initialState = {
	lang: "ru",
	countries: [
		{
			name: "Afganistan",
			capital: "",
			details: {

				info: {},
				views: [
					{
						imgURL: "",
						viewName: "",
						about: "",
					},
				],
                videoURL:'',
                mapCoords:{x:0,y:0} 
			},
			photo:
				"https://interaffairs.ru/i/2018/08/0fec38c2dc45c048e156353bab8d5d6d.jpg",
			rating: 3,
		},
		{
			name: "Iran",
			capital: "",
			details: {

				info: {}, 
				views: [
					{
						imgURL: "",
						viewName: "",
						about: "",
					},
				],
                videoURL:'',
                mapCoords:{x:0,y:0}
			},
			photo:
				"https://i.pinimg.com/originals/fa/6b/7c/fa6b7c06630ad70243be0e93e998a99f.jpg",
			rating: 2,
		},
		{
			name: "Syria",
			capital: "",
			details: {

				info: {},
				views: [
					{
						imgURL: "",
						viewName: "",
						about: "",
					},
				],
                videoURL:'',
                mapCoords:{x:0,y:0}
			},
			photo:
				"https://img.tourister.ru/files/7/6/8/3/1/2/0/clones/870_578_fixedwidth.jpg?t=1614297600143",
			rating: 1,
		}
	],
};

const countryReducer = function(state = initialState, action){
  const stateCopy = {...state}
	switch (action.type) {
		case SET_COUNTRIES:
			stateCopy.countries = [...action.countries];
			return stateCopy;
			break;
		case SET_COUNTRY:
      stateCopy.currentCountry = action.country;
      return stateCopy;
			break;
      default:
      return state;
}

};


export const setCountries = function (countries){
	return({
	type: SET_COUNTRIES,countries
})
}


export const setCountry = function (country){
	return({
	type: SET_COUNTRY, country
})
}



export default countryReducer;