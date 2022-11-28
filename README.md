## React Libraries

<img src="https://images.unsplash.com/photo-1527409335569-f0e5c91fa707?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="React" width="350" />

### Setup

`npm i react-hook-form`

`npm i @welldone-software/why-did-you-render`

`npm i react-query`

`npm i react-if`

`npm react-i18next i18next`

`npm i i18next-browser-languagedetector` for token

`npm i i18next-http-backend` for detecting translation.json

`npx tsc --init` to manually install `tsconfig.json`

***

_react-query_

`QueryClientProvider QueryClient` import at the root (App.ts):

```JavaScript
    const client = new QueryClient()

    <QueryClientProvider client={client}>
```

_why-did-you-render_

import pkg in separate file (wdyr.ts)

must import file at top of index.js:

```JavaScript
    import './wdyr'
```

`.whyDidYouRender` add to functional component you want to test (WhyDidYouRender.ts)

console will only log if unnecessary render & on first load (not reload)

_i18_

set language:

```JavaScript
    <html lang="en">
```

add content for various languages (public/assets/locales)