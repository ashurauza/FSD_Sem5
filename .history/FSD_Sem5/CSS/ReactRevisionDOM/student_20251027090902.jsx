const h21=<h2>
    Hi,I am making Student Component
</h2>
const li11=<li>Student ID:1001</li>
const li22=<li>Name:Ashutosh Kumar Singh</li>
const li33=<li>Branch:CSE(AI&ML)</li>
const ul1=<ul>{[li11,li22,li33]}</ul>
const wrapper1=(
    <>
    {h21}
    {ul1}
    </>
)


// root.render(ul1);
root.render(wrapper1);
