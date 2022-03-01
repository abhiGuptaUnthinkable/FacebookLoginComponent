import React from 'react';

interface Props {
	id: string;
	name: string;
	isRequired?: boolean;
	isDisabled?: boolean;
	value?: string | number;
	placeholder?: string;
	type?: string;
	className?: string;
	error?: string;
	onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.SFC<Props> = props => {
	const changeValue = (e: any) => {
		if (props.onChange) {
			props.onChange(e);
		}
	};


	const handleChange = (e: any) => {
		changeValue(e);
	};


	return (
			<div>
			   <input id={props.id} name={props.name} type={props.type} placeholder={props.placeholder} onChange={handleChange}/>
				{props.error && <div className="invalid-feedback">{props.error}</div>}
			</div>
	);
};
