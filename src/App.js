import './App.css';
import { Provider } from 'react-redux';
import store from './app/store';
import routes from './routes/routes';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster></Toaster>
     <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
