export const useInput = (initialvalue, validator) => {
    const [value, setvalue] = useState(initialvalue);
    const onChange = (event) => {
        const {
            target:{value}
        } = event;

        let willUpdate = true

        if(typeof validator ==='function'){
        willUpdate = validator(value)
        }

        if(willUpdate){
            setvalue(value)
        }
    };
    return { value, onChange };
};