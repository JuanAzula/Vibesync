import "./Home.css";
import settings from "../../assets/icons/settings-icon.svg";
import CategoryBtn from "../../styledComponents/categoryBtn";
import Carrousel from "../../components/carrousel/Carrousel";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTracks } from "../../services/dataService";
import { Playlist, Track } from "../../types/data";


const Home = () => {
  const [isActive, setIsActive] = useState(true);

  const query = useQuery({
    queryKey: ["tracks"],
    queryFn: async () => await getTracks(),
  });
  const trackArray: Track[] = query.data;

  return (
    <>
      <section className="home-welcome-section">
        <h3>
          Good afternoon,
          <span className="home-username">"Nombre de usuario"</span>
        </h3>
        <button className="home-settings-btn">
          <img src={settings} />
        </button>
      </section>
      <section>
        <CategoryBtn>Music</CategoryBtn>
        <CategoryBtn>Podcasts</CategoryBtn>
        <CategoryBtn>AudioBooks</CategoryBtn>
      </section>
      <section className="home-recently-played">
        <h2>Fav Songs</h2>
        <Carrousel
        data={trackArray}
        isActive={isActive}
        />
      </section>
      <section className="home-recently-played">
        <h2>Recently played</h2>
        <Carrousel />
      </section>
    </>
  );
};

export default Home;
