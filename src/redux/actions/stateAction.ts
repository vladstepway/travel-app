import {
    fetchStateBegin, fetchStateFailure,
    fetchStateSuccess
} from "../actionCreators/fetchData";

const baseURL = 'http://damp-thicket-85004.herokuapp.com/';

const addCountry = '/create/country';

const countriesURL = 'api/get/countries';

const countryInfoURL = 'api/get/countryInfo';

export function fetchCountries() {
    console.log('fetching');
    return async (dispatch: any) => {
            console.log(`${baseURL}${countriesURL}/0`);
            const resp = await fetch(`${baseURL}${countriesURL}/0`);
            const countries = await resp.json();
            dispatch(fetchStateSuccess(countries));
            console.log(countries);
            return countries;
    };
};

// Handle HTTP errors since fetch won't.
function handleErrors(response: any) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
//
// export async function getCountryDetails(country: string) {
//     const resp = await fetch(`${baseURL}${countryInfoURL}/${country}`);
//     const countryInfo = await resp.json();
//
//     console.log(countryInfo);
// }

// export function fetchCountries() {
//     console.log('fetching');
//     return (dispatch: any) => {
//         console.log('fetching 2');
//         dispatch(fetchStateBegin());
//         return (page = 0) => {
//             console.log('fetching 3');
//             return fetch(`${baseURL}${countriesURL}/${page}`)
//                 .then(handleErrors)
//                 .then(res => res.json())
//                 .then(json => {
//                     dispatch(fetchStateSuccess(json.countries));
//                     console.log(json);
//                     return json.countries;
//                 })
//                 .catch(error => {
//                     console.log('error');
//                     return dispatch(fetchStateFailure(error));
//                 });
//         };
//     };
// };
