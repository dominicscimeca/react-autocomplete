import {debounce, map, switchMap} from "rxjs/operators";
import * as rx from "rxjs";

const fetchFromInput = ({input, urlGenerator, debounce = 100, eventName = 'keypress'}) => {
    const observable = inputEventObservable({input, debounceDuration: debounce, eventName});
    return getURLFromObservable(observable, urlGenerator)
};

const getURLFromObservable = (observable, urlGenerator) => {
    return observable.pipe(
        switchMap((urlProp) => {
            return rx.from(getURL(urlGenerator(urlProp)))
        })
    )
};

const getURL = (url) => {
    return fetch(url).then((resp) => resp.json())
};

const inputEventObservable = ({input, debounceDuration = 100, eventName = "keypress"}) => {
    return rx.fromEvent(input, eventName)
        .pipe(
            debounce(() => rx.timer(debounceDuration)),
            map(event => event.srcElement.value)
        )
};

export default fetchFromInput