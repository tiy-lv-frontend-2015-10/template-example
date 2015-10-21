$(document).ready(function(){
  var data = {
    names: [
      'Domingo',
      'Kristie',
      'Phil',
      'Noemi',
      'Elijah',
      'Ralph',
      'Jaimarie',
      'Thomas',
      'Mychelle',
      'Nick',
      'Monica',
      'Mike'
    ],
    instructor: "Sweeney",
    fruits: [
      'Strawberries',
      'Oranges',
      'Apples'
    ],
    car: {
      type: 'truck',
      make: 'toyotoa',
      model: 'tacoma'
    }
  };

  var templateString = $("#listItemTemplate").text();
  console.log(templateString);
  var listHtml = Mustache.render(templateString, data);
  console.log(listHtml);
  $("#container").html(listHtml);
});