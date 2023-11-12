import { Pause, PlayArrow } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import cn from 'classnames'
import { FC, useContext } from 'react'
import { AudioContext } from '../../context/AudioContext'
import { ITrack } from '../../types/types'
import secondsToMMSS from '../../utils/secondsToMMSS'
import styles from './TrackList.module.scss'

const TrackItem: FC<ITrack> = track => {
	const { id, src, preview, title, artists, duration } = track
	const { handleToggleAudio, currentTrack, isPlaying } =
		useContext(AudioContext)
	const isCurrentTrack = currentTrack.id === track.id

	const formattedDuration = secondsToMMSS(duration)
	return (
		<div className={cn(styles.track, isCurrentTrack && styles.playing)}>
			<IconButton onClick={() => handleToggleAudio(track)}>
				{isCurrentTrack && isPlaying ? <Pause /> : <PlayArrow />}
			</IconButton>
			<img className={styles.preview} src={preview} alt='' />
			<div className={styles.credits}>
				<b>{title}</b>
				<p>{artists}</p>
			</div>
			<p>{formattedDuration}</p>
		</div>
	)
}

export default TrackItem
