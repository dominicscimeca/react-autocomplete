import {fetchFromInputCurry} from "../../lib/fetchObservable";

const peopleSearchUrlGenerator = (searchTerm) => {
    return `https://swapi.co/api/people/?search=${searchTerm}`;
};

export default fetchFromInputCurry({urlGenerator: peopleSearchUrlGenerator})