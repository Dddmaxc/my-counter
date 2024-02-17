import styled from 'styled-components'
import './App.css'
import { Settings } from './components/Settings'
import mainFon from './assets/mainFon.jpg'
import { CounterView } from './components/CounterView'
import { useState } from 'react'

function App() {
	const [maxValue, setMaxValue] = useState(0)
	const [startValue, setStartValue] = useState(0)

	const [counter, setCounter] = useState(0)

	const onStart = () => {
		setCounter(startValue)
	}
	const onInc = () => {
		setCounter(counter + 1)
	}
	const onReset = () => {
		setCounter(startValue)
	}

	return (
		<div className='App'>
			<Container>
				<Settings
					onStart={onStart}
					setMin={setStartValue}
					setMax={setMaxValue}
					minVal={startValue}
					maxVal={maxValue}
				/>
				<CounterView
					counter={counter}
					setCounter={onInc}
					onReset={onReset}
					maxValue={maxValue}
				/>
			</Container>
		</div>
	)
}

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5%;
	width: 100%;
	height: 100%;
	background-image: url(${mainFon});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`

export default App
