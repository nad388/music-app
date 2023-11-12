import { PropsWithChildren, createContext, useState } from 'react'
import tracksList from '../assets/tracksList'
import { ITrack } from '../types/types'

const audio = new Audio()

export const AudioContext = createContext({})
const AudioProvider = ({ children }: PropsWithChildren) => {
	const [currentTrack, setCurrentTrack] = useState(tracksList[0])
	const [isPlaying, setIsPlaying] = useState(false)

	const handleToggleAudio = (track: ITrack) => {
		if (currentTrack.id !== track.id) {
			setCurrentTrack(track)
			setIsPlaying(true)

			audio.src = track.src
			audio.currentTime = 0
			audio.play()
			return
		}

		if (isPlaying) {
			audio.pause()
			setIsPlaying(false)
		} else {
			audio.play()
			setIsPlaying(true)
		}
	}
	const value = { audio, currentTrack, isPlaying, handleToggleAudio }
	return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}

export default AudioProvider
