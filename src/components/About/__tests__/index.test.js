import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //render About test
    //First test
    it('renders', () => {
        render(<About />);
    });

    //Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        // asFragment function returns a snapshot of the About component
        const { asFragment } = render(<About />);
        //This statement test and compare whether the expected and actual outcomes match. Use the 'expect' function with a matcher to assert something about a value.'toMatchSnapshot
        expect(asFragment()).toMatchSnapshot();
    })
})