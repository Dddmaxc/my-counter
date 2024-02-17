import styled from 'styled-components'
import { Btn } from './Button'
import { FC } from 'react'
// import { ChangeEvent, useState } from 'react'

type OneType = {
	minVal: number
	maxVal: number
	setMax: (value: number) => void
	setMin: (value: number) => void
	onStart: () => void
}

export const Settings: FC<OneType> = (props: OneType) => {
	const onChangeMinVal = (e: any) => {
		const value = +e.currentTarget.value
		if (value < props.maxVal) {
			props.setMin(value)
		}
	}
	const onChangeMaxVal = (e: any) => {
		const value = +e.currentTarget.value
		if (value > props.minVal) {
			props.setMax(value)
		}
	}
	return (
		<Container>
			<SectionOne>
				<MaxStartValue>
					<Max>
						<span>max value:</span>
						<input
							value={props.maxVal}
							onChange={onChangeMaxVal}
							type='number'
						/>
					</Max>
					<Start>
						<span>start value:</span>
						<input
							value={props.minVal}
							onChange={onChangeMinVal}
							type='number'
						/>
					</Start>
				</MaxStartValue>
			</SectionOne>
			<SectionTwo>
				<Btn title={'Set'} onClick={props.onStart} width={'100px'} />
			</SectionTwo>
		</Container>
	)
}

const Container = styled.div`
	background-color: #078603d1;
	justify-content: center;
	align-items: center;
	flex-direction: column;
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
`
const SectionTwo = styled.div`
	width: 90%;
	height: 30%;
	margin-top: 5%;
	margin-bottom: 5%;
	border: 3px solid #ffffff;
`
const MaxStartValue = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 5%;
	flex-direction: column;
	gap: 30px;
`
const Max = styled.div`
	display: flex;
	justify-content: center;
	gap: 30px;
	& input {
		font-size: 25px;
		color: #dffd;
		background-color: #000000;
	}
`
const Start = styled.div`
	display: flex;
	justify-content: center;
	gap: 30px;
	& input {
		font-size: 25px;
		color: #dffd;
		background-color: #000000;
	}
`
