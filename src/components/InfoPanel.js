import React from "react";
import VolumeContext from "../context";
import { useContext } from "react";
import { SoundFilled } from "@ant-design/icons"
import ActivePadContext from "../active_pad_context";
import dj_img from "../img/dj_img.jpg"


const InfoPanel = () => {
  const { volume, setVolume } = useContext(VolumeContext)
  const { activePad } = useContext(ActivePadContext)

  return (
    <div className="info_panel">
      <div className="volume_area">
        <input
          id="volume_control"
          type="range"
          value={volume}
          onChange={(event) => setVolume(event.target.value)}
          step="0.01"
          max="1"
          min="0"
        />
        <SoundFilled style={{ fontSize: '25px', color: "#27120c" }} />
      </div >
      <div className="col">
        <div className="displayActivePad">
          {activePad}
        </div>
        <div className="image_wrapper">
          <img src={dj_img} id="dj_img" />
        </div>
      </div>
    </div>
  )
}

export default InfoPanel;
