const parent = document.getElementById("parent");
// console.log(parent);
ReactDOM.createRoot(parent);
const root =ReactDOM.createRoot(parent);
const h2=React.createElement("h2",{},"Welcome to ReactDOM");
// root.render(h2);


const li1=React.createElement("li",{},"Java");
const li2=React.createElement("li",{},"Python");
const li3=React.createElement("li",{},"React");
const ul=React.createElement("ul",{} ,[li1,li2,li3]);

// root.render(ul); 


const pic=React.createElement("img",{src:"https://www.w3schools.com/w3images/lights.jpg",alt:"MyPic",style:{width:"200px",height:"200px",borderRadius:"50%"}});
root.render(pic);    
const myname=React.createElement("h1",{},"Ashutosh Kumar Singh");
const header=React.createElement("div",{style:{textAlign:"center"}},[pic,myname]);
const wrapperWithHeader = React.createElement("div",{className:"wrapper"},[header,h2,ul]);


//jsx
const h21=<h2>
    Hi,I am using JSX
</h2>
const li11=<li>React</li>
const li22=<li>JavaScript</li>
const li33=<li>HTML</li>
const ul1=<ul>{[li11,li22,li33]}</ul>
const wrapper1=(
    <>
    {h21}
    {}</>
)


root.render(ul1);





const wrapper=React.createElement("div",{className:"wrapper"},[h2,ul]);
// root.render(wrapper);















// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = document.getElementById("parent");
// if (!parent) {
//   throw new Error('No element with id="parent" found. Add <div id="parent"></div> to your index.html');
// }

// const root = ReactDOM.createRoot(parent);

// const h2 = React.createElement("h2", {}, "Welcome to ReactDOM");

// const li1 = React.createElement("li", {}, "Java");
// const li2 = React.createElement("li", {}, "Python");
// const li3 = React.createElement("li", {}, "React");
// const ul = React.createElement("ul", {}, [li1, li2, li3]);

// const pic = React.createElement("img", {
//   src: "https://www.w3schools.com/w3images/lights.jpg",
//   alt: "MyPic",
//   style: { width: "200px", height: "200px", borderRadius: "50%" }
// });

// const wrapper = React.createElement("div", { className: "wrapper" }, [h2, pic, ul]);

// root.render(wrapper);
// export default App;