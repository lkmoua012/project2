$(document).ready(function () {

  var $simulateBtn = $("#simulate-btn");
  var $saveBtn = $("#save-btn");
  var username;

  $("#save-btn").hide();

  // ------------------------------------
  // Simulate Button Function
  function simulate() {
    grabUsername();
    showSavebtn();
  }

  // Grabs the username and stores it into a variable.
  function grabUsername() {
    username = $("#createusername").val();
    console.log(username);
  }

  // After 5 seconds, show the save button.
  function showSavebtn() {
    setTimeout(function () {
      $("#save-btn").show();
    }, 1000)
  }
  // ------------------------------------

  // When clicking Save, posts the data into the database.
  // Grab the variables and values from the row and save them.

  function save() {
    var userData = {
      username: username,
      qb: $("#qb").text(),
      qbYards: $("#qbYards").text(),
      qbTouchdowns: $("#qbTouchdowns").text(),
      qbScore: $("#qbScore").text(),
      rb: $("#rb").text(),
      rbYards: $("#rbYards").text(),
      rbTouchdowns: $("#rbTouchdowns").text(),
      rbScore: $("#rbScore").text(),
      wr: $("#wr").text(),
      wrYards: $("#wrYards").text(),
      wrTouchdowns: $("#wrTouchdowns").text(),
      wrScore: $("#wrScore").text(),
    };

    $.post("api/users", userData)

      .then(function(data) {

        console.log(data);

      })

      console.log("Saving user information to the database.");

  };

  //-------------------------------------------------------------------------

  // Get references to page elements
  var $exampleText = $("#example-text");
  var $exampleDescription = $("#example-description");
  var $submitBtn = $("#submit");
  var $exampleList = $("#example-list");

  // The API object contains methods for each kind of request we'll make
  var API = {
    saveExample: function (example) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/examples",
        data: JSON.stringify(example)
      });
    },
    getExamples: function () {
      return $.ajax({
        url: "api/examples",
        type: "GET"
      });
    },
    deleteExample: function (id) {
      return $.ajax({
        url: "api/examples/" + id,
        type: "DELETE"
      });
    }
  };

  // refreshExamples gets new examples from the db and repopulates the list
  var refreshExamples = function () {
    API.getExamples().then(function (data) {
      var $examples = data.map(function (example) {
        var $a = $("<a>")
          .text(example.text)
          .attr("href", "/example/" + example.id);

        var $li = $("<li>")
          .attr({
            class: "list-group-item",
            "data-id": example.id
          })
          .append($a);

        var $button = $("<button>")
          .addClass("btn btn-danger float-right delete")
          .text("ｘ");

        $li.append($button);

        return $li;
      });

      $exampleList.empty();
      $exampleList.append($examples);
    });
  };

  // handleFormSubmit is called whenever we submit a new example
  // Save the new example to the db and refresh the list
  var handleFormSubmit = function (event) {
    event.preventDefault();

    var example = {
      text: $exampleText.val().trim(),
      description: $exampleDescription.val().trim()
    };

    if (!(example.text && example.description)) {
      alert("You must enter an example text and description!");
      return;
    }

    API.saveExample(example).then(function () {
      refreshExamples();
    });

    $exampleText.val("");
    $exampleDescription.val("");
  };

  // handleDeleteBtnClick is called when an example's delete button is clicked
  // Remove the example from the db and refresh the list
  var handleDeleteBtnClick = function () {
    var idToDelete = $(this)
      .parent()
      .attr("data-id");

    API.deleteExample(idToDelete).then(function () {
      refreshExamples();
    });
  };

  // Add event listeners to the submit and delete buttons
  $submitBtn.on("click", handleFormSubmit);
  $exampleList.on("click", ".delete", handleDeleteBtnClick);


  // ----------------------------------------------------------------------

  $simulateBtn.on("click", simulate);
  $saveBtn.on("click", save);

});
