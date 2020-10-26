var data = [
    {
      name: "John",
      age: 21,
      location: "New York"
    },
    {
      name: "Smith",
      age: 27,
      location: "Texas"
    },
    {
      name: "Lisa",
      age: 23,
      location: "Chicago"
    }
  ];



	
employees.insertMany(data, function(err, result) {
  if (err) {
    res.send(err);
  } else {
    res.send(result);
  }
});

router.route("/fetchdata").get(function(req, res) {
    employees.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

  router.route("/insertdata").post(function(req, res) {});