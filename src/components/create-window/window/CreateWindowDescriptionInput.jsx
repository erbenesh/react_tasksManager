import styles from '../CreateWindow.module.css'

export const CreateWindowDescriptionInput = (props) => {
    return (
        <div className={styles.create_window_description_input}>

            <textarea name="description" id="description" cols="30" rows="10" minLength={2} maxLength={450}
                        placeholder='Описание (до 450 символов)'>
            </textarea>
                
        </div>
    )
}