# nospace

[![npm (scoped)](https://img.shields.io/npm/v/@nataliajagiello/nospace-react.svg)](https://www.npmjs.com/package/@nataliajagiello/nospace-react)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@nataliajagiello/nospace-react.svg)](https://www.npmjs.com/package/@nataliajagiello/nospace-react)


## Install

```
$ npm install @nataliajagiello/nospace-react
```

## Usage

```js
import {nospace} from "@nataliajagiello/nospace-react";

<NoSpace text="So much space!"/>
//=> "Somuchspace!"

<NoSpace text={1337}/>
//=> Uncaught TypeError: String is required!
//    at nospace (<anonymous>:2:41)
//    at <anonymous>:1:1
```

Package that removes all spaces from a string
