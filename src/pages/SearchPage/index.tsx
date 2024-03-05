import './SearchPage.css'
import CategoryBtn from '../../styledComponents/categoryBtn'

const SearchPage: React.FC = () => {
  return (
        <>
        <main className="search-main-container">
        <section>
        <h2>Top searches</h2>
          <CategoryBtn>Adele</CategoryBtn>
          <CategoryBtn>Taylor Swift</CategoryBtn>
          <CategoryBtn>Ed Sheeran</CategoryBtn>
          <CategoryBtn>Michael Jackson</CategoryBtn>
          <CategoryBtn>Drake</CategoryBtn>
          <CategoryBtn>Harry Styles</CategoryBtn>
          <CategoryBtn>Bruno Mars</CategoryBtn>
          <CategoryBtn>Post Malone</CategoryBtn>
          <CategoryBtn>Harry Styles</CategoryBtn>
          <CategoryBtn>Imagine Dragons</CategoryBtn>
        </section>
        <h2>Browse all</h2>
        <section>
          <div><p>Top charts</p></div>
        </section>
        </main>
        </>
  )
}

export default SearchPage
