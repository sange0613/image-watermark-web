import { test } from 'node:test';
import assert from 'node:assert/strict';
import { originalCrop } from './original-export.ts';

test('native crop keeps source pixels and clamps rounded edges without resizing', () => {
  assert.deepEqual(originalCrop({ width: 6000, height: 4000, crop: { x: 100.4, y: 20.8, width: 2999.6, height: 3979.6 } }), { x: 100, y: 21, width: 3000, height: 3979 });
  assert.deepEqual(originalCrop({ width: 100, height: 200, crop: { x: 0, y: 0, width: 100, height: 200 } }), { x: 0, y: 0, width: 100, height: 200 });
});
