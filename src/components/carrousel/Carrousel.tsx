import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { getTracks } from '../../services/dataService';
import { Track } from '../../types/data';
import SongCard from '../songCard';
import './Carrousel.css'

type Props = {
    data: Track[],
    isActive?: boolean
}

const Carrousel = ({data, isActive}: Props) => {


  return (
    <div className="products_scroll">
        {data && data.map(track => (
          <SongCard key={track.id} track={track} isActive={isActive} />
        ))}
    </div>
  )
}

export default Carrousel