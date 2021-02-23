import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget)
    }

    const saveUser = () => {
        alert('User should be saved')
    }

    const onNameChanged = () => {
        console.log('Name changed')
    }

    const onAgeChanged = (event:ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
    }

    const focusLostHandler = () => {
        alert('focus lost')
    }

    return (
        <div>
            Temich
            <textarea onBlur={focusLostHandler} onChange={onNameChanged}>
                Temich
            </textarea>
            <input onChange={onAgeChanged} type="number"/>
            <button onClick={deleteUser}>
                del
            </button>
            <button onClick={saveUser}>
                save
            </button>
        </div>
    )
}
