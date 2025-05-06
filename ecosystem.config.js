module.exports = {
    apps: [
      {
        name: "app",
        script: "npm",
        args: "start",
        cwd: "./", // Current directory
        instances: "max", // Run with cluster mode for max performance
        exec_mode: "cluster",
        watch: false,
        env: {
          PORT: 3001,
          NODE_ENV: "production",
        },
      },
    ],
  };