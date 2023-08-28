// Модули
import React from "react";
// Компоненты
import PaintingList from "./components/PaintingList/PaintingList";
import Panel from "./components/Panel/Panel"
import ColorPicker from './components/ColorPicker/ColorPicker'

// Стили
import paintings from "./paintings.json";
import './components/PaintingList/PaintingList.css'

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
]

const App = () => {
  return (
    <div>
      <ColorPicker options={colorPickerOptions} />
        <Panel title="Последние новости">
            <p>fdgdfgfhfghjhjkhjkjhkhjkh</p>
            <a href="https://www.youtube.com/@itgid/playlists">Читать...</a>
        </Panel>

        <Panel>
            <p>fdgdfgfhfghjhjkhjkjhkhjkh</p>
        </Panel>

      <h1>Главный компонент-контейнер приложения</h1>
      <PaintingList paintings={paintings} />
    </div>
  );
};

export default App;
