module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "refactor",
        "revert",
        "style",
        "test",
        "chore",
        "library",
        "build"
      ]
    ]
  }
};
