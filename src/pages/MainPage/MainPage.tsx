import { ChangeEvent, FC, useState } from 'react'
import tracksList from '../../assets/tracksList'
import TrackItem from '../../components/TrackList/TrackItem'
import styles from './MainPage.module.scss'

const runSearch = (query: string) => {
	if (!query) {
		return tracksList
	}
	const lowerCaseQuery = query.toLowerCase()
	return tracksList.filter(
		track =>
			track.title.toLowerCase().includes(lowerCaseQuery) ||
			track.artists.toLowerCase().includes(lowerCaseQuery)
	)
}

const MainPage: FC = () => {
	const [tracks, setTracks] = useState(tracksList)
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const foundTracks = runSearch(event.target.value)
		setTracks(foundTracks)
	}
	return (
		<div className={styles.search}>
			<input
				className={styles.input}
				placeholder='Search tracks'
				onChange={handleChange}
			/>
			<div className={styles.list}>
				{tracks.map(track => (
					<TrackItem key={track.id} {...track} />
				))}
			</div>
		</div>
	)
}

export default MainPage
