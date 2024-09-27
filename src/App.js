import './App.css'
import Header from './components/Header'
import Tabs from './components/Tabs'
import YouTubeVideo from './components/YotubeVideo'
import Tabs2 from './components/Tabs2'
import Wizard from './components/Wizard'
import Footer from './components/Footer'
function app(){
  return(
   <>
  <Header/>
  <YouTubeVideo/>
  <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around' , marginBottom:'200px', marginTop:'-7rem' }}>
  <Tabs/>
  <Tabs2/>
  </div>
   <Wizard/>
   <Footer/>
  
 
    
   
    </>

  )
}
export default app