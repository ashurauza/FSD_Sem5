const parent=document.getElementById('parent');
// console.log(parent);
const root=ReactDOM.createRoot(parent);
const h2=React.createElement("h2",{style:{backgroundColor:'brown',color:'white',textAlign:'center'}},"ABES Engineering College");
const li1=React.createElement('li',{},"java");
const li2=React.createElement('li',{},"Python");
const li3=React.createElement('li',{},"React");
const ul=React.createElement('ul',{style:{backgroundColor:'cyan'}},li1,li2,li3);

const pic=React.createElement('img',{src:'https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg', style:{height:'200px', width:'200px', borderRadius:'50%'}});
const myname=React.createElement('h1',{},"Vansh Tomar");
const header=React.createElement('div',{style:{display:'flex',gap:'200px'}},pic,myname);
const wrapper=React.createElement("div",{},h2,header,ul);+

//jsx
const h21=<h2>Hi, I m using JSX</h2>;
const li11=<li>React</li>;
const li12=<li>Java Programming</li>
const ul1=<ul>{li11}{li12}</ul>;
const wrapper1=(
    <>
    {h21},
    {ul1}
    </>
)
root.render(wrapper1);























// const parent = document.getElementById("parent");
// // console.log(parent);
// ReactDOM.createRoot(parent);
// const root =ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{},"Welcome to ReactDOM");
// // root.render(h2);


// const li1=React.createElement("li",{},"Java");
// const li2=React.createElement("li",{},"Python");
// const li3=React.createElement("li",{},"React");
// const ul=React.createElement("ul",{} ,[li1,li2,li3]);

// // root.render(ul); 


// const pic=React.createElement("img",{src:"https://www.w3schools.com/w3images/lights.jpg",alt:"MyPic",style:{width:"200px",height:"200px",borderRadius:"50%"}});
// root.render(pic);    
// const myname=React.createElement("h1",{},"Ashutosh Kumar Singh");
// const header=React.createElement("div",{style:{textAlign:"center"}},[pic,myname]);
// const wrapperWithHeader = React.createElement("div",{className:"wrapper"},[header,h2,ul]);


// //jsx
// const h21=<h2>
//     Hi,I am using JSX
// </h2>
// const li11=<li>React</li>
// const li22=<li>JavaScript</li>
// const li33=<li>HTML</li>
// const ul1=<ul>{[li11,li22,li33]}</ul>
// const wrapper1=(
//     <>
//     {h21}
//     {ul1}
//     </>
// )


// // root.render(ul1);
// root.render(wrapper1);





// const wrapper=React.createElement("div",{className:"wrapper"},[h2,ul]);
// // root.render(wrapper);















// // import React from "react";
// // import ReactDOM from "react-dom/client";

// // const parent = document.getElementById("parent");
// // if (!parent) {
// //   throw new Error('No element with id="parent" found. Add <div id="parent"></div> to your index.html');
// // }

// // const root = ReactDOM.createRoot(parent);

// // const h2 = React.createElement("h2", {}, "Welcome to ReactDOM");

// // const li1 = React.createElement("li", {}, "Java");
// // const li2 = React.createElement("li", {}, "Python");
// // const li3 = React.createElement("li", {}, "React");
// // const ul = React.createElement("ul", {}, [li1, li2, li3]);

// // const pic = React.createElement("img", {
// //   src: "https://www.w3schools.com/w3images/lights.jpg",
// //   alt: "MyPic",
// //   style: { width: "200px", height: "200px", borderRadius: "50%" }
// // });

// // const wrapper = React.createElement("div", { className: "wrapper" }, [h2, pic, ul]);

// // root.render(wrapper);
// // export default App;