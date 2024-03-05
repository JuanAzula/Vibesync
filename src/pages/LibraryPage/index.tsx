import './LibraryPage.css'
import CategoryBtn from '../../styledComponents/categoryBtn'

export default function LibraryPage () {
  return (
        <>
        <section className='library-main-page__header'>
            <h2>Your library</h2>
            <div className='library-main-page__header-icons'></div>
            <div className='library-main-page__header-divider'>
                <CategoryBtn>Music</CategoryBtn>
                <CategoryBtn>Podcasts</CategoryBtn>
            </div>
        </section>
        <main className='library-main-page'>
        </main>
        </>
  )
}
