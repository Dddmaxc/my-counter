import { FC } from 'react'
import styled, { css } from 'styled-components'

export type BtnType = {
	title: string
	width?: string
	disabled?: boolean
	onClick?: () => void
}

export const Btn: FC<BtnType> = (props: BtnType) => {
	const onClickHandler = () => {
		props.onClick?.()
	}

	return (
		<Button
			onClick={onClickHandler}
			$primary={props.width}
			disabled={props.disabled}
		>
			{props.title}
		</Button>
	)
}

const Button = styled.button<{ $primary?: string }>`
	width: 40%;
	height: 50%;
	margin-top: 5%;
	border-radius: 15%;
	font-size: 36px;
	color: #dffd;
	background-color: #000000;
	${props =>
		props.$primary &&
		css`
			width: ${props.$primary};
		`}
`
