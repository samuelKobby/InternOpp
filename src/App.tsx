import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
