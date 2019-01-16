import { switchMap } from "rxjs/operators";
import * as rx from "rxjs";
import inputEventObservable from "./inputObservable";

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
    fetchFromInput,
    fetchURLFromObservable,
    fetchURL
}