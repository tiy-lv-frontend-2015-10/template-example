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
      'Mike'
    ]
  };

  var templateString = $("#listItemTemplate").text();

  var listHtml = Mustache.render(templateString, data);
  console.log(listHtml);
  $("#container").html(listHtml);
});