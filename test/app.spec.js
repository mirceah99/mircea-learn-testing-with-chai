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
  it('must be able to add only one number ', () => {
    const number1 = Math.random();
    const result = add(number1);
    expect(result).equal(number1);
  });
  it('add string numbers', () => {
    const number1 = '19.12';
    const number2 = '0.5';
    const result = add(number1, number2);
    expect(result).equal(19.62);
  });
});
