const h21=<h2>
    Hi,I am using JSX
</h2>
const li11=<li>Student ID:</li>
const li22=<li>JavaScript</li>
const li33=<li>HTML</li>
const ul1=<ul>{[li11,li22,li33]}</ul>
const wrapper1=(
    <>
    {h21}
    {ul1}
    </>
)


// root.render(ul1);
root.render(wrapper1);
