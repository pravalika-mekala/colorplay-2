import React from 'react';
import './App.css';

// Import all 65 button components
import Button01 from './components/buttons/Button01';
import Button02 from './components/buttons/Button02';
import Button03 from './components/buttons/Button03';
import Button04 from './components/buttons/Button04';
import Button05 from './components/buttons/Button05';
import Button06 from './components/buttons/Button06';
import Button07 from './components/buttons/Button07';
import Button08 from './components/buttons/Button08';
import Button09 from './components/buttons/Button09';
import Button10 from './components/buttons/Button10';
import Button11 from './components/buttons/Button11';
import Button12 from './components/buttons/Button12';
import Button13 from './components/buttons/Button13';
import Button14 from './components/buttons/Button14';
import Button15 from './components/buttons/Button15';
import Button16 from './components/buttons/Button16';
import Button17 from './components/buttons/Button17';
import Button18 from './components/buttons/Button18';
import Button19 from './components/buttons/Button19';
import Button20 from './components/buttons/Button20';
import Button21 from './components/buttons/Button21';
import Button22 from './components/buttons/Button22';
import Button23 from './components/buttons/Button23';
import Button24 from './components/buttons/Button24';
import Button25 from './components/buttons/Button25';
import Button26 from './components/buttons/Button26';
import Button27 from './components/buttons/Button27';
import Button28 from './components/buttons/Button28';
import Button29 from './components/buttons/Button29';
import Button30 from './components/buttons/Button30';
import Button31 from './components/buttons/Button31';
import Button32 from './components/buttons/Button32';
import Button33 from './components/buttons/Button33';
import Button34 from './components/buttons/Button34';
import Button35 from './components/buttons/Button35';
import Button36 from './components/buttons/Button36';
import Button37 from './components/buttons/Button37';
import Button38 from './components/buttons/Button38';
import Button39 from './components/buttons/Button39';
import Button40 from './components/buttons/Button40';
import Button41 from './components/buttons/Button41';
import Button42 from './components/buttons/Button42';
import Button43 from './components/buttons/Button43';
import Button44 from './components/buttons/Button44';
import Button45 from './components/buttons/Button45';
import Button46 from './components/buttons/Button46';
import Button47 from './components/buttons/Button47';
import Button48 from './components/buttons/Button48';
import Button49 from './components/buttons/Button49';
import Button50 from './components/buttons/Button50';
import Button51 from './components/buttons/Button51';
import Button52 from './components/buttons/Button52';
import Button53 from './components/buttons/Button53';
import Button54 from './components/buttons/Button54';
import Button55 from './components/buttons/Button55';
import Button56 from './components/buttons/Button56';
import Button57 from './components/buttons/Button57';
import Button58 from './components/buttons/Button58';
import Button59 from './components/buttons/Button59';
import Button60 from './components/buttons/Button60';
import Button61 from './components/buttons/Button61';
import Button62 from './components/buttons/Button62';
import Button63 from './components/buttons/Button63';
import Button64 from './components/buttons/Button64';
import Button65 from './components/buttons/Button65';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          ColorPlay
        </h1>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          <Button01 />
          <Button02 />
          <Button03 />
          <Button04 />
          <Button05 />
          <Button06 />
          <Button07 />
          <Button08 />
          <Button09 />
          <Button10 />
          <Button11 />
          <Button12 />
          <Button13 />
          <Button14 />
          <Button15 />
          <Button16 />
          <Button17 />
          <Button18 />
          <Button19 />
          <Button20 />
          <Button21 />
          <Button22 />
          <Button23 />
          <Button24 />
          <Button25 />
          <Button26 />
          
          {/* Random Color button */}
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition"
            onClick={(e) => {
              // Pick a random button in the grid to change color
              const buttons = document.querySelectorAll('.grid button');
              const randomIndex = Math.floor(Math.random() * buttons.length);
              buttons[randomIndex].style.backgroundColor =
                '#' + Math.floor(Math.random() * 16777215).toString(16);
            }}
          >
            Random Color
          </button>

          <Button27 />
          <Button28 />
          <Button29 />
          <Button30 />
          <Button31 />
          <Button32 />
          <Button33 />
          <Button34 />
          <Button35 />
          <Button36 />
          <Button37 />
          <Button38 />
          <Button39 />
          <Button40 />
          <Button41 />
          <Button42 />
          <Button43 />
          <Button44 />
          <Button45 />
          <Button46 />
          <Button47 />
          <Button48 />
          <Button49 />
          <Button50 />
          <Button51 />
          <Button52 />
          <Button53 />
          <Button54 />
          <Button55 />
          <Button56 />
          <Button57 />
          <Button58 />
          <Button59 />
          <Button60 />
          <Button61 />
          <Button62 />
          <Button63 />
          <Button64 />
          <Button65 />
        </div>
      </div>
    </div>
  );
}

export default App;
