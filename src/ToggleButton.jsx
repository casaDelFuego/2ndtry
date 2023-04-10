import React from 'react';
import { useMachine } from '@xstate/react';
import { toggleMachine } from './toggleMachine';

export const ToggleButton = () => {
  const [state, send] = useMachine(toggleMachine);

  return (
    <button onClick={() => send('TOGGLE')}>
      {state.value === 'off' ? 'Off' : 'On'}
    </button>
  );
};