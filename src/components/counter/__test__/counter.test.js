import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../counter';


it("increment when clicked", () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(<Counter/>,div);
    const button = document.body.querySelector('button');
    expect(button.textContent).toBe('0');
    console.log(document.body.innerHTML);
})

