import { FC } from 'react'
import Playbar from './components/Playbar/Playbar'
import styles from './global.module.scss'
import MainPage from './pages/MainPage/MainPage'

const App: FC = () => {
	return (
		<div className={styles.wrapper}>
			<MainPage />
			<Playbar />
		</div>
	)
}

export default App
