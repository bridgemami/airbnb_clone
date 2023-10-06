import './App.css'
import Navbar from './componets/navbar/Navbar'
import Hero from './componets/hero/Hero'
import Card from './componets/card/Card'
import data from './data'
function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <section className="cards-list">
    {data.map(item => {
      return (
        <Card 
        key={item.id}
        // img={info.coverImg}
        // rating={info.stats.rating} 
        // reviewCount={info.stats.reviewCount} 
        // location= {info.location}
        // title={info.title}
        // price={info.price}
        // openSpots={info.openSpots}
        item={item}
        />
      )
    })}
    </section>
    </>
  )
}

export default App
