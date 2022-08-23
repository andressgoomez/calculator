import {
	StyledBody,
	FlexDiv,
	Visor,
	StyledContainer,
	VisorText,
	Numbers,
	Theme,
	SwitchRadio,
	SwitchLabel,
	Switch,
	SwitchSelection,
	StyledNumber,
	StyledDelete,
	StyledEquals,
	StyledTextNumber,
	StyledTextDelete,
	StyledThemeNumbers,
	StyledBox,
} from './components/styles'
import React, { Component, useState } from 'react'
import { Text, Grid } from '@chakra-ui/react'
import './app.css'

const ClickableLabel = ({ title, onChange, id }) => (
	<SwitchLabel onClick={() => onChange(title)} className={id}>
		{title}
	</SwitchLabel>
)

const ConcealedRadio = ({ value, selected }) => (
	<SwitchRadio type="radio" name="switch" checked={selected === value} />
)

class ToggleSwitch extends Component {
	state = { selected: this.props.selected }
	handleChange = (val) => {
		this.setState({ selected: val })
		if (val === '3') {
			changeTheme3()
		}
		if (val === '2') {
			changeTheme2()
		}
		if (val === '1') {
			changeTheme1()
		}
	}
	selectionStyle = () => {
		return {
			left: `${(this.props.values.indexOf(this.state.selected) / 3) * 100}%`,
		}
	}
	render() {
		const { selected } = this.state

		return (
			<Switch>
				{this.props.values.map((val) => {
					return (
						<span>
							<ConcealedRadio value={val} selected={selected} />
							<ClickableLabel title={val} onChange={this.handleChange} />
						</span>
					)
				})}
				<SwitchSelection style={this.selectionStyle()} />
			</Switch>
		)
	}
}

const changeTheme3 = () => {
	document.body.classList.add('theme3')
}
const changeTheme2 = () => {
	document.body.classList.add('theme2')
	document.body.classList.remove('theme3')
}
const changeTheme1 = () => {
	document.body.classList.remove('theme2')
	document.body.classList.remove('theme3')
}

const calculator = (x, y, o) => {
	const a = parseFloat(x)
	const b = parseFloat(y)
	switch (o) {
		case '+':
			return a + b
		case '-':
			return a - b
		case 'x':
			return (a * b).toFixed(2)
		case '/':
			if (b === 0) {
				return 'Error'
			}
			return (a / b).toFixed(2)
		default:
			return 'Error'
	}
}

function App() {
	const [a, setA] = useState('0')
	const [b, setB] = useState('0')
	const [operator, setOperator] = useState('0')
	const [visorNumber, setVisorNumber] = useState('0')
	const [finish, setFinish] = useState(false)

	const calculate = (number) => {
		if (a == '0' && operator == '0' && b == '0') {
			if (number != '=' && visorNumber.length != 17) {
				setVisorNumber(number)
			}
		}
		if (finish == true) {
			if (
				number !== '+' ||
				number !== '-' ||
				number !== 'x' ||
				number !== '/'
			) {
				setFinish(false)
				setVisorNumber(number)
				setA('0')
				setB('0')
				setOperator('0')
			}
			if (
				number === '+' ||
				number === '-' ||
				number === 'x' ||
				number === '/'
			) {
				setA(visorNumber)
				setB(b)
				setOperator(number)
				setVisorNumber(number)
			}
		}
		if (visorNumber === 'Error rango') {
			setVisorNumber(number)
		} else {
			if (number === '=' && operator !== '0') {
				setB(visorNumber)
				const result = calculator(a, b, operator).toString()

				if (result.length < 17) {
					if (result == 'Error') {
						setVisorNumber('Error')
					} else {
						setVisorNumber(parseFloat(result))
					}
					setFinish(true)
					if (visorNumber == result) {
						setA('0')
						setB('0')
						setOperator('0')
						setFinish(false)
					}
				} else {
					setVisorNumber('Error rango')
					setA('0')
					setB('0')
					setOperator('0')
				}
			} else {
				if (operator !== '0') {
					if (
						number !== '+' &&
						number !== '-' &&
						number !== 'x' &&
						number !== '/' &&
						number !== '=' &&
						visorNumber.length < 17
					) {
						if (
							visorNumber === '+' ||
							visorNumber === '-' ||
							visorNumber === 'x' ||
							visorNumber === '/'
						) {
							setVisorNumber(number)
							setB(number)
						} else {
							setVisorNumber(visorNumber + number)
							setB(visorNumber + number)
						}
					}
				} else {
					if (number !== '=') {
						if (
							number === '+' ||
							number === '-' ||
							number === 'x' ||
							number === '/'
						) {
							setA(visorNumber)
							setOperator(number)
							setVisorNumber(number)
						} else {
							if (visorNumber.length < 17) {
								if (visorNumber === '0') {
									setVisorNumber(number)
								} else {
									setVisorNumber(visorNumber + number)
								}
							}
						}
					}
				}
			}
		}
	}

	const floatNumber = (point) => {
		if (visorNumber.length < 17) setVisorNumber(visorNumber + '.')
	}

	const deleteNumber = () => {
		if (
			visorNumber != '0' &&
			visorNumber != 'Error' &&
			visorNumber != 'Error rango'
		) {
			if (visorNumber.length == 1) {
				if (
					visorNumber == '+' ||
					visorNumber == '-' ||
					visorNumber == 'x' ||
					visorNumber == '/'
				) {
					setOperator('0')
					setVisorNumber(a)
				} else {
					setVisorNumber('0')
				}
			} else {
				setVisorNumber(visorNumber.slice(0, -1))
			}
		}
	}

	const reset = () => {
		setVisorNumber('0')
		setA('0')
		setB('0')
		setOperator('0')
		setFinish(false)
	}

	const handleKeyDown = (event) => {
		switch (event.key) {
			case '0':
				const number0 = document.getElementById('number0')
				number0.classList.add('active')
				calculate('0')
				setTimeout(() => {
					number0.classList.remove('active')
				}, 150)
				break
			case '1':
				const number1 = document.getElementById('number1')
				number1.classList.add('active')
				calculate('1')
				setTimeout(() => {
					number1.classList.remove('active')
				}, 150)
				break
			case '2':
				const number2 = document.getElementById('number2')
				number2.classList.add('active')
				calculate('2')
				setTimeout(() => {
					number2.classList.remove('active')
				}, 150)
				break
			case '3':
				const number3 = document.getElementById('number3')
				number3.classList.add('active')
				calculate('3')
				setTimeout(() => {
					number3.classList.remove('active')
				}, 150)
				break
			case '4':
				const number4 = document.getElementById('number4')
				number4.classList.add('active')
				calculate('4')
				setTimeout(() => {
					number4.classList.remove('active')
				}, 150)
				break
			case '5':
				const number5 = document.getElementById('number5')
				number5.classList.add('active')
				calculate('5')
				setTimeout(() => {
					number5.classList.remove('active')
				}, 150)
				break
			case '6':
				const number6 = document.getElementById('number6')
				number6.classList.add('active')
				calculate('6')
				setTimeout(() => {
					number6.classList.remove('active')
				}, 150)
				break
			case '7':
				const number7 = document.getElementById('number7')
				number7.classList.add('active')
				calculate('7')
				setTimeout(() => {
					number7.classList.remove('active')
				}, 150)
				break
			case '8':
				const number8 = document.getElementById('number8')
				number8.classList.add('active')
				calculate('8')
				setTimeout(() => {
					number8.classList.remove('active')
				}, 150)
				break
			case '9':
				const number9 = document.getElementById('number9')
				number9.classList.add('active')
				calculate('9')
				setTimeout(() => {
					number9.classList.remove('active')
				}, 150)
				break
			case '+':
				const numberPlus = document.getElementById('number+')
				numberPlus.classList.add('active')
				calculate('+')
				setTimeout(() => {
					numberPlus.classList.remove('active')
				}, 150)
				break
			case '-':
				const numberMinus = document.getElementById('number-')
				numberMinus.classList.add('active')
				calculate('-')
				setTimeout(() => {
					numberMinus.classList.remove('active')
				}, 150)
				break
			case 'x':
				const numberX = document.getElementById('numberx')
				numberX.classList.add('active')
				calculate('x')
				setTimeout(() => {
					numberX.classList.remove('active')
				}, 150)
				break
			case '/':
				const numberDiv = document.getElementById('number/')
				numberDiv.classList.add('active')
				calculate('/')
				setTimeout(() => {
					numberDiv.classList.remove('active')
				}, 150)
				break
			case '=':
				const numberEqual = document.getElementById('number=')
				numberEqual.classList.add('activeEqual')
				calculate('=')
				setTimeout(() => {
					numberEqual.classList.remove('activeEqual')
				}, 150)
				break
			case '.':
				const numberPoint = document.getElementById('number.')
				numberPoint.classList.add('active')
				floatNumber('.')
				setTimeout(() => {
					numberPoint.classList.remove('active')
				}, 150)
				break
			case 'Enter':
				const numberEnter = document.getElementById('number=')
				numberEnter.classList.add('activeEqual')
				calculate('=')
				setTimeout(() => {
					numberEnter.classList.remove('activeEqual')
				}, 150)
				break
			case 'Backspace':
				const numberBackspace = document.getElementById('numberD')
				numberBackspace.classList.add('activeD')
				deleteNumber()
				setTimeout(() => {
					numberBackspace.classList.remove('activeD')
				}, 150)
				break
			case 'Escape':
				const numberEscape = document.getElementById('numberR')
				numberEscape.classList.add('activeD')
				reset()
				setTimeout(() => {
					numberEscape.classList.remove('activeD')
				}, 150)
				break
			default:
				break
		}
	}

	return (
		<>
			<StyledBody tabIndex={-1} onKeyDown={handleKeyDown}>
				<StyledContainer>
					<StyledThemeNumbers>
						<StyledBox>1</StyledBox>
						<StyledBox>2</StyledBox>
						<StyledBox>3</StyledBox>
					</StyledThemeNumbers>
					<FlexDiv>
						<Text fontWeight="bold" fontSize="2xl">
							calc
						</Text>
						<Theme>
							<Text display="flex" fontWeight="bold" fontSize="xs" mr={5}>
								THEME
							</Text>
							<ToggleSwitch values={['1', '2', '3']} selected="1" />
						</Theme>
					</FlexDiv>
					<Visor>
						<VisorText>{visorNumber}</VisorText>
					</Visor>
					<Numbers>
						<Grid templateColumns="repeat(4, 1fr)" gap={5}>
							<StyledNumber>
								<StyledTextNumber id="number7" onClick={() => calculate('7')}>
									7
								</StyledTextNumber>
							</StyledNumber>
							<StyledNumber>
								<StyledTextNumber id="number8" onClick={() => calculate('8')}>
									8
								</StyledTextNumber>
							</StyledNumber>
							<StyledNumber>
								<StyledTextNumber id="number9" onClick={() => calculate('9')}>
									9
								</StyledTextNumber>
							</StyledNumber>
							<StyledDelete id="numberD">
								<StyledTextDelete onClick={() => deleteNumber()}>
									DEL
								</StyledTextDelete>
							</StyledDelete>

							<StyledNumber>
								<StyledTextNumber id="number4" onClick={() => calculate('4')}>
									4
								</StyledTextNumber>
							</StyledNumber>
							<StyledNumber>
								<StyledTextNumber id="number5" onClick={() => calculate('5')}>
									5
								</StyledTextNumber>
							</StyledNumber>
							<StyledNumber>
								<StyledTextNumber id="number6" onClick={() => calculate('6')}>
									6
								</StyledTextNumber>
							</StyledNumber>
							<StyledNumber>
								<StyledTextNumber id="number+" onClick={() => calculate('+')}>
									+
								</StyledTextNumber>
							</StyledNumber>

							<StyledNumber>
								<StyledTextNumber id="number1" onClick={() => calculate('1')}>
									1
								</StyledTextNumber>
							</StyledNumber>
							<StyledNumber>
								<StyledTextNumber id="number2" onClick={() => calculate('2')}>
									2
								</StyledTextNumber>
							</StyledNumber>
							<StyledNumber>
								<StyledTextNumber id="number3" onClick={() => calculate('3')}>
									3
								</StyledTextNumber>
							</StyledNumber>
							<StyledNumber>
								<StyledTextNumber id="number-" onClick={() => calculate('-')}>
									-
								</StyledTextNumber>
							</StyledNumber>

							<StyledNumber>
								<StyledTextNumber id="number." onClick={() => floatNumber('.')}>
									.
								</StyledTextNumber>
							</StyledNumber>
							<StyledNumber>
								<StyledTextNumber id="number0" onClick={() => calculate('0')}>
									0
								</StyledTextNumber>
							</StyledNumber>
							<StyledNumber>
								<StyledTextNumber id="number/" onClick={() => calculate('/')}>
									/
								</StyledTextNumber>
							</StyledNumber>
							<StyledNumber>
								<StyledTextNumber id="numberx" onClick={() => calculate('x')}>
									x
								</StyledTextNumber>
							</StyledNumber>

							<StyledDelete id="numberR" colSpan={2}>
								<StyledTextDelete onClick={() => reset()}>
									RESET
								</StyledTextDelete>
							</StyledDelete>
							<StyledEquals id="number=" colSpan={2}>
								<StyledTextDelete onClick={() => calculate('=')}>
									=
								</StyledTextDelete>
							</StyledEquals>
						</Grid>
					</Numbers>
				</StyledContainer>
			</StyledBody>
		</>
	)
}

export default App
