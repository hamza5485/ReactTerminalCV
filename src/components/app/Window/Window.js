import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TEXT } from '../../../constants/style'
import Cursor from '../Cursor/Cursor';
import TerminalInfo from '../TerminalInfo/TerminalInfo';
import Transpiler from '../../../transpiler';

const useStyles = makeStyles((theme) => ({
	window: {
		backgroundColor: '#000000AB',
		...TEXT,
		height: 'calc(100% - 64px)',
		overflowY: 'scroll',
		border: '1px solid black'
	}
}));

const Window = props => {
	const classes = useStyles();
	const [commandList, setCommandList] = React.useState([]);
	const [cursorList, setCursorList] = React.useState([]);
	const [count, setCount] = React.useState(1);
	const transpiler = new Transpiler();

	const handleCommand = com => {
		let res = transpiler.transpile(com);
		let command = {
			count: count,
			ts: res.timestamp,
			command: res.command
		}; //`${count} ${res.timestamp} ${res.command}`;
		setCommandList([...commandList, command]);
		setCount(count + 1);
		return res.response;
	};

	const getPrevCommand = i => {
		if (i === 0) {
			return "";
		} else if (commandList.length !== 0 && !(i > commandList.length)) {
			const com = commandList[commandList.length - i];
			return com.command;
		}
	};

	const getCursor = () => {
		return <Cursor
			key={cursorList.length + 1}
			newCommand={handleCommand}
			getPrevCommand={getPrevCommand} />
	};

	useEffect(() => {
		setCursorList([...cursorList, getCursor()]);
	}, [commandList]);

	return (
		<div className={classes.window}>
			<TerminalInfo isMax={props.isMax} />
			{cursorList.length > 0 && cursorList.map(elem => elem)}
		</div>
	);
};

export default Window;
