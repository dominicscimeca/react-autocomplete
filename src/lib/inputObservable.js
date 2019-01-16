import * as rx from "rxjs";
import {debounce, map} from "rxjs/operators";

const inputEventObservable = ({input, debounceDuration = 100, eventName = "keypress"}) => {
    return rx.fromEvent(input, eventName)
        .pipe(
            debounce(() => rx.timer(debounceDuration)),
            map(event => {console.log(event); return event.target.value})
        )
};

export default inputEventObservable