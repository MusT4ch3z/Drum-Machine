import './App.css';
import React, { useState } from 'react';
import Pads from './components/Pads';
import VolumeContext from './context';
import ActivePadContext from './active_pad_context';
import InfoPanel from './components/InfoPanel';
import AnimatedBackground from './components/AnimatedBackground';

function App() {

  const [volume, setVolume] = useState(0.5);
  const [activePad, setActivePad] = useState("Let's Rock!")

  return (
    <VolumeContext.Provider value={{ volume, setVolume }}>
      <ActivePadContext.Provider value={{ activePad, setActivePad }}>
        <div className="app">
          <div id='body'>
            <AnimatedBackground />
            <div id="drum_body_container">
              <div id="pads_control">
                <Pads />
              </div>
              <InfoPanel />
            </div>
          </div>
        </div>
      </ActivePadContext.Provider>
    </VolumeContext.Provider>
  );
}

export default App;
