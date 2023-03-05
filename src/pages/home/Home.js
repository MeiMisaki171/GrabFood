
import './home.scss'
import Header from '../../components/Layout/component/Header/Header'
import Search from '../../components/Layout/component/Search/Search'
import Body from '../../components/Layout/component/Body/Body'



const Home = () => {
  return (
    <>
      <Header className='header_home' />
      <Body/>
      <Search className={'search'} /> 
    </>
  )
}

export default Home
 