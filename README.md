# useParams Hook Returns Empty Object Outside Route Component in React Router v6

This repository demonstrates a common error encountered when using the `useParams` hook in React Router v6.  The `useParams` hook, when used outside a route's `Route` component, will always return an empty object, even if the URL matches a defined route.

The `useParamsBug.js` file showcases the problematic code. The `useParamsSolution.js` file provides a corrected implementation.

**Problem:** Incorrect usage of `useParams` leads to an empty object being returned.

**Solution:**  Ensure `useParams` is used within a component that's nested within a `<Route>` component that matches a route path. Consider refactoring your component structure to achieve this.