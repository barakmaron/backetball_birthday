import { useCallback, useRef } from 'react';
import { Button, TextField } from '@mui/material';
import style from './Form.module.css';

export default function Form({ 
    inputs, 
    action 
}){
    const form_ref = useRef(null);
    const submit_action = useCallback((event) => {
        event.preventDefault();
        const form_data = new FormData(form_ref?.current);
        action(event, Object.fromEntries(form_data));
    }, [form_ref, action]);

    return <form className={style.container} ref={form_ref}>
        {inputs.map(({ name, type, place_holder }, index) => {
            return <TextField 
                    name={name} 
                    type={type} 
                    label={place_holder} 
                    key={`form-input-${name}-${index}`} />
        })}
        <Button variant="contained" id="submit" type="submit" onClick={submit_action}>Submit</Button>
    </form>
}