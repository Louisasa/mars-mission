export default {
  transform: {
    ".(ts|tsx)": "ts-jest",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$":
      "identity-obj-proxy",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
