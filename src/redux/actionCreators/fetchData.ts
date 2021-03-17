import { FETCH_STATE_BEGIN, FETCH_STATE_FAILURE, FETCH_STATE_SUCCESS, FETCH_DETAILS_SUCCESS , FETCH_DELETE_DETAILS} from "../actions/actionTypes";

const baseURL = 'http://damp-thicket-85004.herokuapp.com/';

const addCountry = '/create/country';

const countriesURL = 'api/get/countries';

const countryInfoURL = 'api/get/countryInfo';

export const fetchStateBegin = () => ({
    type: FETCH_STATE_BEGIN
});

export const fetchStateSuccess = (countries: any) => ({
    type: FETCH_STATE_SUCCESS,
    payload: countries
});

export const fetchStateFailure = (error: any)=> ({
    type: FETCH_STATE_FAILURE,
    payload: { error }
});

export const fetchDetailsSuccess = (details: any) => ({
    type: FETCH_DETAILS_SUCCESS,
    payload: details
});


export const fetchDeleteDetails = () =>({
    type: FETCH_DELETE_DETAILS
})


export function fetchCountries() {
    console.log('1 fetch');
    return (dispatch: any) => {
        console.log('fetch');
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

function handleErrors(response: any) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

// export async function getCountriesData(page = 0) {
//     const resp = await fetch(`${baseURL}${countriesURL}/${page}`);
//     const countries = await resp.json();
//     console.log(countries);
//
//     return countries;
// }
export const aasfasf = 'asdas';
