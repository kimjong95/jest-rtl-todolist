import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export const TodoForm = () => {
  return (
    <div>
      <div>
        <label htmlFor="todoText">Todo</label>
        <input id="todoText" />
      </div>
      <div>
        <label htmlFor="todoStartDate">StartDate</label>
        <input id="todoStartDate" />
      </div>
      <div>
        <label htmlFor="todoEndDate">EndDate</label>
        <input id="todoEndDate" />
      </div>
      <div>
        <label htmlFor="todoSecret">Secret</label>
        <input id="todoSecret" type="checkBox" />
      </div>
      <button>Cancel</button>
      <button>Register</button>
    </div>
  );
};
