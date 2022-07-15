const Form = (props) => {
    const { data } = props;


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hi");
    }
    return (
        <form onSubmit={handleSubmit}>
            {data.map((dt, index) => {
                if (dt.type === "inputText") {
                    <><label>{dt.label}</label>
                        <input type={dt.inputType} /></>
                }
            })}
            <label></label>
        </form>
    )
}

export default Form;