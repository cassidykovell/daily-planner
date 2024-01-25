$(function () {
  $(document).ready(function() {
    var dateTimeElement = $('#currentDay');
    setInterval(function() {
      var today = dayjs();
      var formattedDateTime = today.format('MMMM D, YYYY HH:mm:ss');
      dateTimeElement.text(formattedDateTime);
    }, 1000);
  });
    var containerEl = $("#time-block-container");
    var hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
    for (var i = 0; i < hours.length; i++) {
      var hour = hours[i];
      var hourId = "hour-" + (i + 9);
    
      var timeBlock = $('<div id="' + hourId + '" class="row time-block">');
      var hourDiv = $('<div class="col-2 col-md-1 hour text-center py-3">').text(hour);
      var textarea = $('<textarea class="col-8 col-md-10 description" rows="3">');
      var saveBtn = $('<button class="btn saveBtn col-2 col-md-1" aria-label="save">').html('<i class="fas fa-save" aria-hidden="true"></i>');
    
      timeBlock.append(hourDiv, textarea, saveBtn);
      containerEl.append(timeBlock);
    }
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
  

 