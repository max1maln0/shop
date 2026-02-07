import Footer from '@components/Footer.jsx';
import Header from '@components/Header.jsx'
import Router from './router/Router.jsx';
import Basket from '@components/Basket.jsx';

export default function App(){
  return(
    <>
      <Header />
      <Basket />
      <Router />
      <Footer />
    </>
  )
}