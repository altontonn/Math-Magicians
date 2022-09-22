import { fireEvent, screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../Calculator';

describe('Testin Calculator component', () => {
  it('Test AC Button', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('AC'), (e) => {
      screen.getByTestId('result').innerHTML = '';
    });
    const data = screen.getByTestId('result');
    expect(data).toBeEmptyDOMElement();
  });

  it('Testing the number of button', () => {
    render(<Calculator />);
    const allButton = screen.getAllByRole('button');
    expect(allButton).toHaveLength(19);
  });

  it('Testing . is in the document', () => {
    render(<Calculator />);
    const dot = screen.getByText('.');
    expect(dot).toBeInTheDocument();
  });

  it('Test button 7 is on document', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('7'), (e) => {
      screen.getByTestId('result').innerHTML = e.target.innerText;
    });

    const data = screen.getByTestId('result');
    expect(data).toHaveTextContent('7');
  });

  it('Test button 7 is on document', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('5'), (e) => {
      screen.getByTestId('result').innerHTML = e.target.innerText;
    });
    const data = screen.getByTestId('result');
    expect(data).toHaveTextContent('5');
  });
});
