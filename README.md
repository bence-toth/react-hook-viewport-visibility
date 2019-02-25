# react-hook-viewport-visibility :see_no_evil:

A React hook for detecting [viewport visibility state](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState).

## Installation

Using `npm`:

```sh
npm install --save react-hook-viewport-visibility
```

Using `yarn`:

```sh
yarn add react-hook-viewport-visibility
```

## Usage

```jsx
import React from 'react'
import useViewportVisibility from 'react-hook-viewport-visibility'

const ComponentWithViewportVisibility = () => {
  const viewportVisibility = useViewportVisibility()
  
  return (
    <p>Viewport visibility: {viewportVisibility}</p>
  )
}
```

## Notes

The value returned by the hook can either be `'visible'`, `'hidden'` and `'prerender'`.

However the value `'prerender'` is a non-standard feature and therefore browser support for this value is optional and might be poor.

## Contributions

Contributions are welcome. File bug reports, create pull requests, feel free to reach out at tothab@gmail.com.

## Licence

LGPL-3.0
