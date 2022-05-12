import React from 'react';
import { render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

//add the cleanup statement
afterEach(cleanup);

//add the describe function to declare what this test suite will be testing
describe('Nav component', () => {
    //baseline test
    it('renders', () => {
        render(<Nav />);
    });

    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });

})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        //Arrange
        const { getByLabelText } = render(<Nav />);
        //Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    });
})

//test for link visibility 
describe('links are visible', () => {
    it('inserts text into the links', () => {
        //Arrange
        it('inserts text into the links', () => {
            const { getByTestId } = render(<Nav />);
        });
        
        //Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})