import React from 'react';
import ReactDOM from 'react-dom';
import logo from '@assets/svgs/logo.svg';
import './ui.scss';
import useStore from '@store/store';

const App = () => {
  const [state, actions] = useStore();

  return (
    <>
      <img src={logo} alt="logo" />

      <h1>Cool Plugin</h1>
      <p>A demo plugin.</p>
      <ul>
        {state.loader.loading.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <button
        disabled={state.loader.loading.includes('getMaps')}
        onClick={() => actions.addLoading('getMaps')}
      >
        Add
      </button>

      <button
        disabled={!state.loader.loading.includes('getMaps')}
        onClick={() => actions.removeLoading('getMaps')}
      >
        Remove
      </button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('react-page'));
