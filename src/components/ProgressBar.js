import classes from './ProgressBar.module.css'
import { useState } from 'react';
const ProgressBar = (props) => {
	const [style, setStyle] = useState({});

	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${props.done}%`
		}

		setStyle(newStyle);
	}, 200);

	return (
		<div className={classes.body}>	<div className={classes.progress}>
			<div className={classes.progressDone} style={style}>
				{props.done}%
			</div>
		</div>
		</div>

	)
}

export default ProgressBar;