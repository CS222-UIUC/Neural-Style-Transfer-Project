import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import loadModel from '../model/Main'
import Draw from './model/Draw.js';
import Recieve from './model/Recieve.js'

test("Test fetch from express", () => {
    render(<Recieve route="api" />);
    const ele = screen.getByTestId("apiRecieve");
    expect(ele.innerHTML == "Backend query recieved");
})