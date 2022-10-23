import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import loadModel from '../model/Main'
import Draw from './model/Draw.js';

test('Test draw', () => {
    render(<Draw />);

    const testCanvas = screen.getByTestId('testCanvas')
    const drawButton = screen.getByText('Draw')
    fireEvent.click(drawButton)

    const context = canvas.getContext("2d");
    const imageData = context.getImageData(0, 0, 1, 1)
    expect(imageData.colorSpace).toBe('srgb')
});