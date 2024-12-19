const assert = require('assert');

// Path relative to test.js
const Sparrow = require("../modules/sparrow.js");

describe("Sparrow", () => {
  describe(".getLifeSpan()", () => {
    it('returns 42', () => {
      const expectedLifeSpan = 42;

      const actualLifeSpan = Sparrow.getLifeSpan();

      assert.strictEqual( expectedLifeSpan, actualLifeSpan, "wrong lifespan"
      );
    });
  });
});
