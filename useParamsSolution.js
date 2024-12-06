The solution involves restructuring the component tree to ensure that the component using `useParams` is nested within a `Route` component. Here's how you would modify the code:

```javascript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams(); //This line will work as expected now.

  return (
    <div>
      <h1>Details for ID: {id}</h1>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/item/:id" element={<MyComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
```
By correctly nesting `MyComponent` within the `Route` component, the `useParams` hook now has access to the router context and can correctly retrieve the parameter values from the URL.