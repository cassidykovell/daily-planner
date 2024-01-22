$(function () {
  $(document).ready(function() {
    var dateTimeElement = $('#currentDay');
    setInterval(function() {
      var currentDate = new Date();
      var formattedDateTime = currentDate.toLocaleString();
      dateTimeElement.text(formattedDateTime);
    }, 1000);
  });
  $(document).ready(function() {
    $('.saveBtn').click(function() {
      var timeBlockId = $(this).closest('.time-block').attr('id');
      var savedText = $(this).siblings('.description').val();
      localStorage.setItem(timeBlockId, savedText);
    });
  
    $('.time-block').each(function() {
      var timeBlockId = $(this).attr('id');
      var savedText = localStorage.getItem(timeBlockId);
      if (savedText) {
        $(this).find('.description').val(savedText);
      }
    });
  });
});
 