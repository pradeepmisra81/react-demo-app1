import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';
import { isTSAnykeyword} from '@babel/types';

it("renders without crash", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button></Button>, div);
})