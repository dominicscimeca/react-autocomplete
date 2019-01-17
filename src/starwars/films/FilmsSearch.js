import {fetchFromInputCurry} from "../../lib/fetchObservable";

const filmsSearchUrlGenerator = (searchTerm) => {
    return `https://swapi.co/api/films/?search=${searchTerm}`;
};

export default fetchFromInputCurry({urlGenerator: filmsSearchUrlGenerator})