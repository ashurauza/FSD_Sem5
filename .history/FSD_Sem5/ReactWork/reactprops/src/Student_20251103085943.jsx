function Student(props) {
    return (
        <div style={{
            height: "180px",
            width: "290px",
            backgroundColor: "yellow",
            border: "2px solid red",
            margin: "40px auto",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"        
        }}>
            <h2>Hi, I am {props.Name}</h2>
            <ul>
                <li>Roll Number: {props.roll}</li>
                <li>Roll Number: {props.roll}</li>
                <li>Roll Number: {props.roll}</li>
                <li>Roll Number: {props.roll}</li>
            </ul>
        </div>
    );
}

export default Student;