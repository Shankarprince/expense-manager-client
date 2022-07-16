import "./form.css";

const Form = (props) => {
    const { data } = props;
    console.log(data);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hi");
    }
    return (
        <form onSubmit={handleSubmit}>
            {data.map((dt, index) => {
                if (dt.type === "input") {
                    return (<div key={index}>
                        <label>{dt.label}</label>
                        <input type={dt.inputType} />
                    </div>)
                }
                else if (dt.type === "submit") {
                    return (<div key={index}>
                        <input type={dt.inputType} value={dt.label} />
                    </div>)
                }
            })}
        </form>
    )
}

export default Form;