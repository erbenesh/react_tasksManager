import styles from '../CreateWindow.module.css'

import { useRef } from 'react'
import { useClickOutsideWithButton } from '../../../hooks/useClickOutside';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import { ru } from 'date-fns/locale/ru';

export const CreateWindowDateInputs = (props) => {

    const menuRef = useRef(null);
    useClickOutsideWithButton(menuRef, () => props.closeDateInputsWindow(),
                                                props.showDateInputs,
                                                props.buttonRef);

    return (
        <div ref={menuRef} className={styles.create_window_date_inputs} style={!props.showDateInputs ? {display:'none'} : {}}>
            <input id='date' value={String(props.dateValue.toISOString().slice(0, 10))} type="date" style={{display:'none'}}/> 

            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
                <DateCalendar sx={{ 
                    "& span": {color:"ghostwhite"},
                    "& button": {color:"ghostwhite"},
                    "& .css-qct7wd-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)": {border: "1px solid grey"},
                    "& button.Mui-selected": {color:"#292e3e"},
                    "& button:focus": {color:"#292e3e"},
                }}
                value={props.dateValue} onChange={(newValue) => props.setDateValue(newValue)} />
            </LocalizationProvider>

            <input className={styles.time_input} id='time' type="time" value={props.timeValue} onChange={props.setNewTimeValue}/>
        
        </div>
    );
}