import React from "react";
import { Track } from "../../types/data";
import './SongCard.css'
import { StyledLink } from "../../styledComponents/styledLink";

type Props = {
  track: Track;
  isActive?: boolean;
};

const SongCard = ({ track, isActive }: Props) => {
  return (
    <div className="songcard-container">
      <StyledLink to={`/tracks/:${track.id}`}>
      <img src={track.thumbnail} />
      <div>
        <h3>{track.name}</h3>
        <p>{track.id}</p>
        {isActive && <p>{track.artist}</p>}
      </div>
      </StyledLink>
    </div>
  );
};

export default SongCard;