import Enzyme,{shallow, ShallowWrapper} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'react-native';
import React from 'react';
import CounterComponentHook from '../src/components/CounterComponentHook';
import { expect, test } from '@jest/globals';
//configure the enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
/**
 * 
 * @param {*} comp 
 * @returns {ShallowWrapper}
 */
const setup = (comp) => shallow(comp);
/**
 * 
 * @param {*} wrapper 
 * @param {*} val 
 * @returns matched component
 */
const findByDataTest = (wrapper,val) => wrapper.find(`[data-test='${val}']`);

test('render counter component', () => {
    const wrapper = setup(<CounterComponentHook/>);
    const counterComponent = findByDataTest(wrapper,'component-counter');
    //assertion to check if there is a match exactly one element 
    expect(counterComponent.length).toBe(1)
})
test('render counter component text', () => {
    const wrapper = setup(<CounterComponentHook/>);
    const counterText = findByDataTest(wrapper,'component-countertext');
    //assertion to check if there is a match exactly one element 
    expect(counterText.length).toBe(1)
})
test('render counter component button', () => {
    const wrapper = setup(<CounterComponentHook/>);
    const counterButton = findByDataTest(wrapper,'component-counterButton');
    //assertion to check if there is a match exactly one element 
    expect(counterButton.length).toBe(1)
})
