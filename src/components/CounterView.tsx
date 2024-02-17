import styled from 'styled-components'
import { Btn } from './Button'
import { FC } from 'react'

type CounterType = {
	counter: number
	setCounter: () => void
	onReset: () => void
	maxValue: number
}

export const CounterView: FC<CounterType> = (props: CounterType) => {
	const addNumber = () => {
		props.setCounter()
	}
	const resetHandler = () => {
		props.onReset()
	}
	return (
		<Container>
			<SectionOne>
				<MaxStartValue maxValue={props.counter >= props.maxValue}>
					{props.counter}
				</MaxStartValue>
			</SectionOne>
			<SectionTwo>
				<Btn
					onClick={addNumber}
					disabled={props.counter >= props.maxValue}
					title={'inc'}
					width={'100px'}
				/>
				<Btn onClick={resetHandler} title={'reset'} width={'130px'} />
			</SectionTwo>
		</Container>
	)
}

const Container = styled.div`
	background-color: #078603d1;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	display: flex;
	margin: 0;
	width: 40%;
	height: 60%;
	border: 5px solid #ffffff;
`
const SectionOne = styled.div`
	width: 90%;
	height: 50%;
	margin-top: 5%;
	border: 3px solid #ffffff;
	background-color: #000000;
`
const SectionTwo = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
	width: 90%;
	height: 30%;
	margin-top: 5%;
	margin-bottom: 5%;
	border: 3px solid #ffffff;
	color: #ffffff;
`
const MaxStartValue = styled.div<{ maxValue: boolean }>`
	display: flex;
	justify-content: space-around;
	margin-top: 5%;
	flex-direction: column;
	font-size: 100px;
	gap: 30px;
	color: ${({ maxValue }) => (maxValue ? 'red' : '')};
`
