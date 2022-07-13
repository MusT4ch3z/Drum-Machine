import React, { useEffect, useState, useContext } from "react";
import VolumeContext from "../context";
import ActivePadContext from "../active_pad_context";

const KeyboardKey = ({ sound }) => {
  const [active, setActive] = useState(false);
  const { volume } = useContext(VolumeContext)
  const { setActivePad } = useContext(ActivePadContext)

  const playSound = () => {
    setActivePad(sound.id)
    setActive(true);
    setTimeout(() => setActive(false), 200)
    const audio = document.getElementById(sound.keyTrigger)
    audio.currentTime = 0;
    audio.volume = volume;
    audio.play()
    console.log(audio)
  }

  const handleKeydown = (event) => {
    if (event.keyCode === sound.key_code) {
      playSound()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    }
  }, [volume]);

  return (
    <div className={`drum-pad ${active && "activated_pad"}`}
      key={sound.keyTrigger}
      id={sound.id}
      onClick={() => playSound()}
    >
      <audio className="clip" src={sound.url} id={sound.keyTrigger} />
      {sound.keyTrigger}
    </div>
  )
}

export default KeyboardKey