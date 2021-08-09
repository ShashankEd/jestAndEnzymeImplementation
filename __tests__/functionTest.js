import { test } from 'picomatch';
import {sumNumbers} from '../src/util/commonFunctions';
import 'react-native';
import renderer, {create} from 'react-test-renderer'
it('Sum of two numbers', () => {
    expect(sumNumbers(1,2)).toBe(3);
})