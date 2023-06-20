import { BrowserRouter,Route,Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store03';

import Home from './component/Home';
import Cart01 from './component/Cart01';
import Cart02 from './component/Cart02';
import Cart03 from './component/Cart03';
import Cart04 from './component/Cart04';



function App() {
 return (
  <Provider store={store}>
  <BrowserRouter>
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart01" element={<Cart01 />} />
      <Route path="/cart02" element={<Cart02 />} />
      <Route path="/cart03" element={<Cart03 />} />
      <Route path="/cart04" element={<Cart04 />} />
    </Routes>
  </div>
  </BrowserRouter>
  </Provider>
 )
}

export default App;
