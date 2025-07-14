import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import store from './services/store.ts'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/art-gallery/">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
