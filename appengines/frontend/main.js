const port = process.env.port || 8080;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
