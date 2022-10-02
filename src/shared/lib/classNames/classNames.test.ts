import { classNames } from './classNames'

describe('classnames', () => {
  test('with 1st patam', () => {
    expect(classNames('someClass')).toBe('someClass')
  })
  test('with 2 params', () => {
    expect(classNames('someClass', { foo: true, bar: true })).toBe('someClass foo bar')
  })
  test('with 2 params', () => {
    expect(classNames('someClass', { foo: true, bar: false })).toBe('someClass foo')
  })
  test('with 3 params', () => {
    expect(classNames('someClass', { foo: true, bar: false }, ['one two'])).toBe('someClass one two foo')
  })
})
