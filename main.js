$(document).ready(function(){
  var names = [
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
  ];

  var templateString = $("#listItemTemplate").text();
  var renderTemplate = _.template(templateString);
  var listHtml = renderTemplate(names);
  $("#myList").html(listHtml);
});