import Enzyme,{shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'react-native';
import React from 'react';
import App from '../App';
//configure the enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

test('Test with jest and enzyme', () => {
    const wrapper = shallow(<App/>);
    //checking the debug    
    console.log(wrapper.debug());
    //use Jest's expect on the wrapper 
    expect(wrapper.exists()).toBe(true);
});