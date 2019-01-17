import {FetchFromInputBuilder} from "../../lib/fetchObservable";

const peopleSearchUrlGenerator = (searchTerm) => {
    return `https://swapi.co/api/people/?search=${searchTerm}`;
};

export default new FetchFromInputBuilder({urlGenerator: peopleSearchUrlGenerator})