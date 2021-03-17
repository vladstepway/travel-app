import {
    fetchStateBegin, fetchStateFailure,
    fetchStateSuccess
} from "../actionCreators/fetchData";

const baseURL = 'http://damp-thicket-85004.herokuapp.com/';

const addCountry = '/create/country';

const countriesURL = 'api/get/countries';

const countryInfoURL = 'api/get/countryInfo';

export function fetchCountries() {
    return (dispatch: any) => {
        dispatch(fetchStateBegin());
        return (page = 0) => {
             return fetch(`${baseURL}${countriesURL}/${page}`)
                .then(handleErrors)
                .then(res => res.json())
                .then(json => {
                    dispatch(fetchStateSuccess(json.countries));
                    console.log(json);
                    return json.countries;
                })
                .catch(error => dispatch(fetchStateFailure(error)));
        };
    };
}

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
