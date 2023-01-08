import ArticleRank from "./components/ArticleRank/ArticleRank"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"

function App() {

  return (
    <>
      <div className="mainContainer">
        <Header />
        <Hero />
        <ArticleRank />
      </div>
    </>
  )
}

export default App
