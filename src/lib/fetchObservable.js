import { switchMap } from "rxjs/operators";
import * as rx from "rxjs";
import inputEventObservable from "./inputObservable";

class FetchFromInputBuilder {
    options = {};

    constructor(initialOptions){
        this.options = initialOptions
    }

    withDebounce = (debounceInMillis) => {
        this.options.debounce = debounceInMillis;
        return this
    };

    withEventName = (eventName) => {
        this.options.eventName = eventName;
        return this
    };

    withUrlGenerator = (urlGenerator) => {
        this.options.urlGenerator = urlGenerator;
        return this
    };

    withInput = (input) => {
        this.options.input = input;
        return this
    };

    build = () => {
        return fetchFromInput(this.options)
    }
}

const fetchFromInput = ({input, urlGenerator, debounce = 100, eventName = 'keypress'}) => {
    const observable = inputEventObservable({input, debounceDuration: debounce, eventName});
    return fetchURLFromObservable(observable, urlGenerator)
};

const fetchURLFromObservable = (observable, urlGenerator) => {
    return observable.pipe(
        switchMap((...urlProps) => {
            return rx.from(fetchURL(urlGenerator(...urlProps)))
        })
    )
};

const fetchURL = (url) => {
    return fetch(url).then((resp) => resp.json())
};


export {
    FetchFromInputBuilder,
    fetchFromInput,
    fetchURLFromObservable,
    fetchURL
}