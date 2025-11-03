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
            <img style={borderRadius} src =(data.pic) height={200} width={200} alt='profile image'></img>
            <ul>
                <li>Roll Number: {data.roll}</li>
                <li>Name: {data.name}</li>
                <li>Branch: {data.branch}</li>
                <li>Section {data.section}</li>
            </ul>
        </div>
    );
}

export default Student;