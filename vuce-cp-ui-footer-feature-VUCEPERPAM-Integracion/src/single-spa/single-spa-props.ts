import { ReplaySubject } from 'rxjs';
import { AppProps } from 'single-spa';

export const singleSpaPropsSubject = new ReplaySubject<AppProps>(1);

// Add any custom single-spa props you have to this type def
// https://single-spa.js.org/docs/building-applications.html#custom-props
// export type SingleSpaProps = AppProps & {};
