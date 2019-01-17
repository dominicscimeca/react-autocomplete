import {FetchFromInputBuilder} from "../../lib/fetchObservable";

const filmsSearchUrlGenerator = (searchTerm) => {
    return `https://swapi.co/api/films/?search=${searchTerm}`;
};

export default new FetchFromInputBuilder({urlGenerator: filmsSearchUrlGenerator})