import { Layout } from 'antd';
import { HeaderUI } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Gallery } from './pages/Gallery/Gallery';
import { useDispatch } from './services/store';
import { fetchArtGallery } from './services/cardListSlice';
import { useEffect } from 'react';
import { CardPage } from './pages/CardPage/CardPage';
import { AddArtPage } from './pages/AddArtPage/AddArtPage';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';



const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArtGallery());
  }, [dispatch])
  return (
    <Layout style ={{ backgroundColor: '#f8e6db'}}>
      <HeaderUI />
      <Routes>
        <Route path='/' element={<Gallery />}/>
        <Route path='/products/:id' element={<CardPage />}/>
        <Route path='/create-product' element={<AddArtPage />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </Layout>
  );
};

export default App;
