import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store'
import {Provider} from "react-redux"

ReactDOM.render(



 <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider> 
,
  document.getElementById('root')
);

