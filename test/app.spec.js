/* eslint-disable no-undef */
const { expect } = require('chai');
// const assert = require('assert');
// const { describe, it } = require('mocha');
const { add } = require('../application/app');

describe('test the add function', () => {
  it('must add 2 numbers', () => {
    const number1 = Math.random();
    const number2 = Math.random();
    const result = add(number1, number2);
    expect(result).equal(number1 + number2);
  });
});
