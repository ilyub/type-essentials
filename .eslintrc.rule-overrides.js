const { eslint } = require("real-config/api");

const consistentImport = eslint.rules["misc/consistent-import"];

module.exports = {
  rules: {
    "misc/consistent-import": [
      "warn",
      {
        sources: [
          {
            _id: "types/function",
            localName: "fn",
            source: "type-essentials/src/function",
            wildcard: true
          },
          {
            _id: "types/index.types",
            source: "type-essentials/src/index.types",
            wildcard: true
          },
          {
            _id: "types/index.types.object",
            localName: "object",
            source: "type-essentials/src/index.types.object",
            wildcard: true
          },
          {
            _id: "types/object.keys",
            localName: "keys",
            source: "type-essentials/src/object.keys",
            wildcard: true
          },
          {
            _id: "types/object.style",
            localName: "style",
            source: "type-essentials/src/object.style",
            wildcard: true
          },
          {
            _id: "types/string",
            source: "type-essentials/src/string",
            wildcard: true
          },
          ...consistentImport.sources
        ]
      }
    ],
    "misc/no-sibling-import": [
      "warn",
      {
        rules: [
          {
            filesToLint: ["./*"],
            hierarchy: [["./jest.config"], ["./jest.config.fast"]]
          },
          { filesToLint: ["./src/*"], hierarchy: [["./*"], ["./*"]] }
        ]
      }
    ]
  }
};
