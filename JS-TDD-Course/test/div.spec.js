const { expect } = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { sum } = require('../Learning/Sum');

lab.test('returns true when 1 + 1 equals 2', () => {
    let x = 1;
    let y = 1;
    expect(sum(x, y)).to.equal(2);
});
