import React, { useState } from 'react';
import pikachuImage from './37470-6-pikachu-transparent-background.png';

export default function ImageManupulation() {
  const [catHeight, setCatHeight] = useState(200);
  const [catWidth, setCatWidth] = useState(200);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [bgColor, setBgColor] = useState('black');
  const [imageAngle, setImageAngle] = useState(0);

  function increaseCatwidth() {
    setCatWidth(catWidth + 20);
  }
  function decreaseCatwidth() {
    setCatWidth(catWidth - 20);
  }
  
  function changeBGcolour() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setRed(r);
    setGreen(g);
    setBlue(b);
    setBgColor(`rgb(${r}, ${g}, ${b})`);
  }

  function imageRotate() {
    setImageAngle(imageAngle + 30);
  }

  return (
    <div
      style={{
        border: '2px solid red',
        minHeight: 500,
        width: 400,
        margin: '40px auto',
        textAlign: 'center',
        padding: '20px',
        boxSizing: 'border-box',
        backgroundColor: bgColor
      }}
    >
      <h2 style={{ color: 'white' }}>Image Manipulation Component</h2>
      <div style={{ margin: '20px 0' }}>
        <img 
          src={pikachuImage} 
          height={catHeight} 
          width={catWidth} 
          alt='Pikachu'
          style={{ 
            display: 'block', 
            margin: '0 auto',
            transform: `rotate(${imageAngle}deg)`
          }}
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setCatHeight(catHeight + 20)}>
          Increase Height
        </button>
        <button
          style={{ marginLeft: '10px' }}
          onClick={() => setCatHeight(catHeight > 40 ? catHeight - 20 : 20)}
        >
          Decrease Height
        </button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => setCatWidth(catWidth + 20)}>
          Increase Width
        </button>
        <button
          style={{ marginLeft: '10px' }}
          onClick={() => setCatWidth(catWidth > 40 ? catWidth - 20 : 20)}
        >
          Decrease Width
        </button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => { setCatHeight(200); setCatWidth(200); }}>
          Reset
        </button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <button onClick={changeBGcolour}>
          Background Colour Change
        </button>
        <button style={{ marginLeft: '10px' }} onClick={imageRotate}>
          Image Rotate
        </button>
        <h2 style={{ color: 'white' }}>Red Color value: {red}</h2>
        <h2 style={{ color: 'white' }}>Green Color value: {green}</h2>
        <h2 style={{ color: 'white' }}>Blue Color value: {blue}</h2>
      </div>
    </div>
  );
}