import { getId, compairId } from '../utils.js';
const test = QUnit.test;

test('getId', assert => {
    const arrayOfThings = [
        { name: 'spot', id: 3 }, 
        { name: 'rover', id: 2 },
    ];
    const expect = { name: 'spot' };
    
    const actual = getId(arrayOfThings, 3);
    
    assert.equal(actual.name, expect.name);
});
test('getId', assert => {
    const arrayOfThings = [
        { name: 'spot', id: 3 }, 
        { name: 'rover', id: 2 },
    ];
    const expect = { name: 'rover' };
    
    const actual = getId(arrayOfThings, 2);
    
    assert.equal(actual.name, expect.name);
});
    
test('compairId', assert => {
    const arrayOfThings = [
        { name: 'spot', id: 3 }];
    const arrayOfThings2 = [
        { name: 'spot', id: 4 }];
    const expect = false;
    
    const actual = compairId(arrayOfThings, arrayOfThings2, 0);
    
    assert.equal(actual, expect);
});
  

test('compairId', assert => {
    const arrayOfThings = [
        { name: 'spot', id: 3 }];
    const arrayOfThings2 = [
        { name: 'spot', id: 3 }];
    const expect = true;
    const actual = compairId(arrayOfThings, arrayOfThings2, 0);
    
    assert.equal(actual, expect);
});

