rs.initiate({
  _id: "rs0",
  members: [
    {
      _id: 0,
      host: "mongodb:27017"
    }
  ]
});

// # Check the status of the replica set
rs.status();

// # Exit the shell
exit