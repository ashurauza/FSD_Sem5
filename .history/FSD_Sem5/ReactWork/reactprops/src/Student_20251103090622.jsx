function Student(data) {
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
            <img src =(data.pic) hei ></img>
            <ul>
                <li>Roll Number: {props.roll}</li>
                <li>Name: {props.name}</li>
                <li>Branch: {props.branch}</li>
                <li>Section {props.section}</li>
            </ul>
        </div>
    );
}

export default Student;