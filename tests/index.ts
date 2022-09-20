// eslint-disable-next-line misc/consistent-import -- Ok
import * as index from "@";

test("AddPrefix", () => {
  expect(index).toMatchInlineSnapshot(`
    {
      "types": {
        "fn": {},
        "object": {
          "keys": {},
          "style": {},
        },
        "string": {},
      },
    }
  `);
});
