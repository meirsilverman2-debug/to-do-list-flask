import { useState } from "react"

export default function useToggle(initialValue: boolean = false) {
    const [value, setValue] = useState(initialValue);

    const toggle = () => setValue(!initialValue);


  return {value, toggle}
}

// Property 'setValue' does not exist on type '[boolean, Dispatch<SetStateAction<boolean>>]'.
// This error was difficult to me to catch and understand I will explain to you this amazing error 
// when you mistakly us courly prantecees insted of normal brackets on usState you will receiv this error and to understand it you need to uknow two things one how we do destrur