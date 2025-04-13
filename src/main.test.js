import { it, expect } from 'vitest';
import { isIsomorphic } from './main.mjs';

it('returns true for isomorphic strings "egg" and "add"', () => {
  expect(isIsomorphic('egg', 'add')).toBe(true);
});

it('returns false for non-isomorphic strings "foo" and "bar"', () => {
  expect(isIsomorphic('foo', 'bar')).toBe(false);
});

it('returns true for isomorphic strings "paper" and "title"', () => {
  expect(isIsomorphic('paper', 'title')).toBe(true);
});

it('returns false when characters map to multiple values', () => {
  expect(isIsomorphic('ab', 'aa')).toBe(false);
});

it('returns true for single-letter strings', () => {
  expect(isIsomorphic('a', 'z')).toBe(true);
});

it('returns true for two identical strings', () => {
  expect(isIsomorphic('abc', 'abc')).toBe(true);
});

it('returns false for mismatched lengths (edge case)', () => {
  expect(isIsomorphic('abc', 'ab')).toBe(false);
});

it('handles long strings correctly', () => {
  const s = 'abababababababababab';
  const t = 'cdcdcdcdcdcdcdcdcdcd';
  expect(isIsomorphic(s, t)).toBe(true);
});
