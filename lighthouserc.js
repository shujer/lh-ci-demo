module.exports = {
  ci: {
    collect: {
      staticDistDir: "./build",
    },
    upload: {
      target: "temporary-public-storage",
    },
    assertions: {
      "categories:performance": ["error", { minScore: 0.1 }],
      "categories:accessibility": ["error", { minScore: 0.6 }],
      "categories:best-practices": ["error", { minScore: 0.6 }],
      "categories:seo": ["error", { minScore: 0.6 }],
    },
  },
};
