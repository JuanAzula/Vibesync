import { Track } from '../../types/data'
import './songInLine.css'
import { CardInLine } from './components/cardInline'
import { SongMenu } from './components/songMenu'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  track: Track,
  menuSwitchTrigger: Dispatch<SetStateAction<boolean>>;
  menuSwitch: boolean
}

export const SongInLine = ({ track, menuSwitch, menuSwitchTrigger }: Props) => {

  return (
    <>
      <CardInLine menuSwitch={menuSwitch} menuSwitchTrigger={menuSwitchTrigger} track= {track} />
      {menuSwitch && (
        <SongMenu track= {track} />
      )}
    </>
  )
}

