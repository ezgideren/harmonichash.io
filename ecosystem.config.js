module.exports = {
  apps: [
    {
      name: "app",
      script: "npm",
      args: "start",
      cwd: "/var/www/app",
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
