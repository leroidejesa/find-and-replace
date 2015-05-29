var findReplace = function(string, searchvalue, newvalue) {
  return string.replace(searchvalue, newvalue);
};

$(function() {
  $("form#replace-form").submit(function(event) {
    var sentence = $('input#sentence').val();
    var chosenWord = $('input#chosen-word').val();
    var newWord = $('input#new-word').val();
    var results = findReplace(sentence, chosenWord, newWord);

    $("#new-sentence").text(results);

    event.preventDefault();
  });
});
