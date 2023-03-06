
import './home.scss'
import Header from '../../components/Layout/component/Header/Header'
import Search from '../../components/Layout/component/Search/Search'
import Body from '../../components/Layout/component/Body/Body'



const Home = () => {
  return (
    <>
      <Header className='header_home' />
      <Search />
      <Body/>
    </>
  )
}

export default Home
 