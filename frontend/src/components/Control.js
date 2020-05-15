import React from 'react'

const Emoji = props => (
    <option
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
        value={props.label}
    >
        {props.symbol}
    </option>
)
const Control = ({ control, index }) => {
    const result = []
        result.push(
            <tr key={control.name + index}>
                <td> {control.name} </td>
                <td> {control.dev} </td>
                <td> {control.devOutTotal} </td>
                <td> {(control.expected === -1) ? <Emoji label="bad" symbol="❌" /> : (control.expected === 0) ? <Emoji label="attention" symbol="⚠️" /> : <Emoji label="good" symbol="✅" />} </td>
            </tr>)
    return result;
};

export default Control