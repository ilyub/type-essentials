module.exports = {
  // eslint-disable-next-line no-warning-comments -- Wait for eslint-plugin-misc update
  // fixme - Add "./node_modules/real-config/eslint/packages/type-essentials"
  extends: [
    "./node_modules/real-config/eslint",
    "./node_modules/real-config/eslint/special-locations",
    "./.eslintrc.overrides",
    "./.eslintrc.rule-overrides",
    "./.eslintrc.temp"
  ]
};
