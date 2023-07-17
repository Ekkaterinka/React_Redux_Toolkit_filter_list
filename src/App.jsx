import { Provider } from 'react-redux';
import store from './reduxToolkit/store'
import List from "./components/List";

export default function App() {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
}
