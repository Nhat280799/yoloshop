import React , {useRef} from 'react'
import PropTypes from 'prop-types'
import {FaCheck} from "react-icons/fa";
const Checkbox = props => {
 
    const check = useRef(null);

    const onchange = () => {
        if(props.onChange){
            props.onChange(check.current);
        }
    }

 
  return (
    <label className='custom-checkbox'>
        <input type="checkbox" ref={check} checked={props.checked} onChange={onchange} />
        <span className='custom-checkbox__checkmark'>
            <FaCheck />
        </span>
        {props.label}
    </label>
  )
}

Checkbox.propTypes = {
    label : PropTypes.string.isRequired,
    checkbox : PropTypes.string,
}

export default Checkbox
