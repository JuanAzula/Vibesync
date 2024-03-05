import CategoryBtn from '../../styledComponents/categoryBtn'

const SearchPage: React.FC = () => {
  return (
        <>
        <h4>Top searches</h4>
        <section>
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
        <h4>Browse all</h4>
        <section>
          <div><p>Top charts</p></div>
        </section>
        <div>
            Search Page
        </div>
        </>
  )
}

export default SearchPage
