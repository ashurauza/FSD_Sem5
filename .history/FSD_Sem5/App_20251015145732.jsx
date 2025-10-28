const parent = document.getElementById("parent");
// console.log(parent);
ReactDOM.createRoot(parent);
const root =ReactDOM.createRoot(parent);
const h2=React.createElement("h2",{},"Welcome to ReactDOM");
root.render(h2);
const li1=React.createElement("li",{},"Java");
const li2=React.createElement("li",{},"Python");
const li3=React.createElement("li",{},"React");
const ul=React.createElement("ul",{} ,[li1,li2,li3]);
root.render(ul); 
const pic=React.createElement("img",{src:"https://www.w3schools.com/w3images/lights.jpg",alt:"MyPic",style:{width:"200px"}});
root.render(pic);    



const wrapper=React.createElement("div",{className:"wrapper"},[h2,ul]);
root.render(wrapper);
