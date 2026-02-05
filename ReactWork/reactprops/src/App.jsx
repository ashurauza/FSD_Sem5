import './App.css'
import Student from './component/Student'
import ImageManupulation from './component/ImageManupulation'
import StateHandling from './component/stateHandling.jsx'

export default function App() {
  const student = [
    {
      pic: "https://via.placeholder.com/150",
      name: 'Ashutosh',
      roll: '35466',
      branch: 'CSE-AI&ML',
      section: 'B',
      college: 'Abes Engineering College'
    },
    {
      pic: "https://via.placeholder.com/150",
      name: 'Ashu',
      roll: '35467',
      branch: 'CSE-AI&ML',
      section: 'B',
      college: 'Abes Engineering College'
    },
    {
      pic: "https://via.placeholder.com/150",
      name: 'Anmol',
      roll: '35468',
      branch: 'CSE-AI&ML',
      section: 'B',
      college: 'Abes Engineering College'
    }
  ]

  return (
    <div>
      {student.map((elem, idx) => (
        <Student key={idx} props={elem} />
      ))}
      <ImageManupulation />
      <StateHandling />
    </div>
  )
}