import "./form.css";

const Form = (props) => {
    const { list, data, setData, edit, handleSubmit } = props;

    const handleChange = (value, id) => {
        console.log(value, id);
        setData({ ...data, [id]: value });
    }

    console.log(data);

    return (
        <form onSubmit={handleSubmit}>
            {list.map((dt, index) => {
                if (dt.type === "input") {
                    return (<div key={index}>
                        <label>{dt.label}</label>
                        <input
                            style={!edit ? { backgroundColor: "grey", color: "white" } : { backgroundColor: "lightgrey" }}
                            id={dt.id}
                            type={dt.inputType}
                            value={dt.value}
                            onChange={(e) => handleChange(e.target.value, dt.id)}
                            disabled={!edit} />
                    </div>)
                }
                else if (dt.type === "submit") {
                    return (<div key={index}>
                        <input type={dt.inputType} value={dt.label} />
                    </div>)
                }
                else if (dt.type === "disabled") {
                    return (<div key={index}>
                        <label>{dt.label}</label>
                        <input style={{ backgroundColor: "navy", color: "white" }} type={dt.inputType} value={dt.value} disabled />
                    </div>)
                }
            })}
        </form>
    )
}

export default Form;