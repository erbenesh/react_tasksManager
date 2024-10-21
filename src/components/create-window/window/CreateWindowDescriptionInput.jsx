import styles from '../CreateWindow.module.css';
import InputBase from '@mui/material/InputBase';

export const CreateWindowDescriptionInput = (props) => {
    return (
        <div className={styles.create_window_description_input}>

            <InputBase
                id="title"
                sx={{ color: 'white', fontSize: 14, width: 100 + "%" }}
                multiline
                placeholder="Название задачи"
                inputProps={{ 'aria-label': 'Название задачи' }}
                size='small'
            />

            <InputBase
                id="description"
                sx={{ color: 'white', fontSize: 12, width: 100 + "%"}}
                multiline
                placeholder="Описание"
                inputProps={{ 'aria-label': 'Описание' }}
                size='small'
            />

        </div>
    )
}