import { useState } from "react";
import { CirclePicker } from "react-color";
import "./ColorApp.css";
// eslint-disable-next-line react/prop-types
function ColorApp({ onSelectColor }) {
  const [selectedColor, setSelectedColor] = useState("#FF5733");

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
    onSelectColor(color.hex);
  };

  return (
    <div className="color-picker">
      <div className="color-picker-box">
        <CirclePicker color={selectedColor} onChange={handleColorChange} />
      </div>
    </div>
  );
}

export default ColorApp;
