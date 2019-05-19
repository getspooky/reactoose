import * as React from "react";
import Header from '../src/components/layouts/Header'
import { shallow, mount } from 'enzyme';

describe('Header',function () {

    it('should render the component',function () {

        const header = shallow(<Header/>);

        expect(header.find('h1').hasClass('md:text-4xl text-grey-darkest')).toBe(true);

    });

});