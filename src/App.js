import {useState} from "react";

function App() {
	return <Calculator />;
}
const Calculator = () => {
	const [currOperand, setCurrentOperand] = useState(0);
	const [prevOperand, setPrevOperand] = useState(0);
	const [operator, setOperator] = useState(null);
	return (
		<div className="calculator-grid">
			<Output currentOperand={currOperand} prevOperand={prevOperand} operator={operator} />
			<Inputs
				currentOperand={currOperand}
				setCurrentOperand={setCurrentOperand}
				prevOperand={prevOperand}
				setPrevOperand={setPrevOperand}
				operator={operator}
				setOperator={setOperator}
			/>
		</div>
	);
};
const Output = ({currentOperand, prevOperand, operator}) => {
	return (
		<div className="output">
			<div className="previous-operand">
				{prevOperand} {operator ? operator : ""}
			</div>
			<div className="current-operand">{currentOperand}</div>
		</div>
	);
};
const Inputs = ({
	currentOperand,
	setCurrentOperand,
	prevOperand,
	setPrevOperand,
	operator,
	setOperator,
}) => {
	const onNumberClick = (e) => {
		currentOperand === 0
			? setCurrentOperand(e.target.value)
			: setCurrentOperand(currentOperand + e.target.value);
	};
	const clearOperands = () => {
		setCurrentOperand(0);
		setPrevOperand(0);
		setOperator(null);
	};
	const onHandleDelete = () => {
		if (currentOperand.length === 1) {
			setCurrentOperand(0);
		} else if (currentOperand !== 0) {
			setCurrentOperand(currentOperand.substr(0, currentOperand.length - 1));
		}
	};
	const handleOperatorClick = (e) => {
		setOperator(e.target.value);
		setPrevOperand(currentOperand);
		setCurrentOperand(0);
	};
	const handleEquate = () => {
		let result = 0;
		if (operator === "÷") {
			result = Number(prevOperand) / Number(currentOperand);
		} else if (operator === "*") {
			result = Number(prevOperand) * Number(currentOperand);
		} else if (operator === "+") {
			result = Number(prevOperand) + Number(currentOperand);
		} else if (operator === "-") {
			result = Number(prevOperand) - Number(currentOperand);
		}
		setCurrentOperand(result);
		setPrevOperand(0);
		setOperator(null);
	};
	return (
		<>
			<button className="span-two" onClick={clearOperands}>
				AC
			</button>
			<button onClick={onHandleDelete}>DEL</button>
			<button onClick={handleOperatorClick} value="÷">
				÷
			</button>
			<button onClick={onNumberClick} value="1">
				1
			</button>
			<button onClick={onNumberClick} value="2">
				2
			</button>
			<button onClick={onNumberClick} value="3">
				3
			</button>
			<button onClick={handleOperatorClick} value="*">
				*
			</button>
			<button onClick={onNumberClick} value="4">
				4
			</button>
			<button onClick={onNumberClick} value="5">
				5
			</button>
			<button onClick={onNumberClick} value="6">
				6
			</button>
			<button onClick={handleOperatorClick} value="-">
				+
			</button>
			<button onClick={onNumberClick} value="7">
				7
			</button>
			<button onClick={onNumberClick} value="8">
				8
			</button>
			<button onClick={onNumberClick} value="9">
				9
			</button>
			<button onClick={handleOperatorClick} value="-">
				-
			</button>
			<button onClick={onNumberClick} value=".">
				.
			</button>
			<button onClick={onNumberClick} value="0">
				0
			</button>
			<button className="span-two" onClick={handleEquate}>
				=
			</button>
		</>
	);
};

export default App;
