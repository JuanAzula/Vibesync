import './LibraryPage.css'
import CategoryBtn from '../../styledComponents/categoryBtn'
import likedSongsImg from '../../assets/default-mylibrary/likedsongs.png'
import newEpisodesImg from '../../assets/default-mylibrary/newepisodes.png'
import myLifeIsAMovieImg from '../../assets/default-mylibrary/mylifeisamovie.png'
import topSongsImg from '../../assets/default-mylibrary/topsong2023.png'
import acousticChillImg from '../../assets/default-mylibrary/acousticchill.png'
import amourDeIyceeImg from '../../assets/default-mylibrary/amourdeiycee.png'

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
        <ul className='library-main-page__list'>
          <li>
            <img src={likedSongsImg} alt='Liked Songs' />
            <div>
              <h3>Liked Songs</h3>
              <p>Subtitle text here</p>
            </div>
          </li>
          <li>
            <img src={newEpisodesImg} alt='New Episodes' />
            <div>
              <h3>New Episodes</h3>
              <p>Subtitle text here</p>
            </div>
          </li>
          <li>
            <img src={myLifeIsAMovieImg} alt='My Life is a Movie' />
            <div>
              <h3>My Life is a Movie</h3>
              <p>Subtitle text here</p>
            </div>
          </li>
          <li>
            <img src={topSongsImg} alt='Your Top Songs 2023' />
            <div>
              <h3>Your Top Songs 2023</h3>
              <p>Subtitle text here</p>
            </div>
          </li>
          <li>
            <img src={acousticChillImg} alt='Acoustic Chill' />
            <div>
              <h3>Acoustic Chill</h3>
              <p>Subtitle text here</p>
            </div>
          </li>
          <li>
            <img src={amourDeIyceeImg} alt='Amour de Iycee' />
            <div>
              <h3>Amour de Iycee</h3>
              <p>Subtitle text here</p>
            </div>
          </li>
          {/* Restarting hardcode list */}
          <li>
            <img src={likedSongsImg} alt='Liked Songs' />
            <div>
              <h3>Liked Songs</h3>
              <p>Subtitle text here</p>
            </div>
          </li>
          <li>
            <img src={newEpisodesImg} alt='New Episodes' />
            <div>
              <h3>New Episodes</h3>
              <p>Subtitle text here</p>
            </div>
          </li>
          <li>
            <img src={myLifeIsAMovieImg} alt='My Life is a Movie' />
            <div>
              <h3>My Life is a Movie</h3>
              <p>Subtitle text here</p>
            </div>
          </li>
          <li>
            <img src={topSongsImg} alt='Your Top Songs 2023' />
            <div>
              <h3>Your Top Songs 2023</h3>
              <p>Subtitle text here</p>
            </div>
          </li>
          <li>
            <img src={acousticChillImg} alt='Acoustic Chill' />
            <div>
              <h3>Acoustic Chill</h3>
              <p>Subtitle text here</p>
            </div>
          </li>
          <li>
            <img src={amourDeIyceeImg} alt='Amour de Iycee' />
            <div>
              <h3>Amour de Iycee</h3>
              <p>Subtitle text here</p>
            </div>
          </li>
          <li>
            <img src={likedSongsImg} alt='Liked Songs' />
            <div>
              <h3>Liked Songs</h3>
              <p>Subtitle text here</p>
            </div>
          </li>
          <li>
            <img src={newEpisodesImg} alt='New Episodes' />
            <div>
              <h3>New Episodes</h3>
              <p>Subtitle text here</p>
            </div>
          </li>
          <li>
            <img src={myLifeIsAMovieImg} alt='My Life is a Movie' />
            <div>
              <h3>My Life is a Movie</h3>
              <p>Subtitle text here</p>
            </div>
          </li>
          <li>
            <img src={topSongsImg} alt='Your Top Songs 2023' />
            <div>
              <h3>Your Top Songs 2023</h3>
              <p>Subtitle text here</p>
            </div>
          </li>
          <li>
            <img src={acousticChillImg} alt='Acoustic Chill' />
            <div>
              <h3>Acoustic Chill</h3>
              <p>Subtitle text here</p>
            </div>
          </li>
          <li>
            <img src={amourDeIyceeImg} alt='Amour de Iycee' />
            <div>
              <h3>Amour de Iycee</h3>
              <p>Subtitle text here</p>
            </div>
          </li>
        </ul>
        </main>
        </>
  )
}
