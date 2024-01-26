$(function () {
  $(document).ready(function() {
    var dateTimeElement = $('#currentDay');
    setInterval(function() {
      var today = dayjs();
      var formattedDateTime = today.format('MMMM D, YYYY hh:mm:ss A');
      dateTimeElement.text(formattedDateTime);
    }, 1000);
  });

  var containerEl = $("#time-block-container");
  var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17,]
  function getTimeBlockStatus(hour) {
    var currentHour = dayjs().hour();

    if (hour < currentHour) {
      return "past";
    } else if (hour === currentHour) {
      return "present";
    } else {
      return "future";
    }
  }

  for (var i = 0; i < hours.length; i++) {
    var hour = hours[i];
    var hourId = "hour-" + i;
    var status = getTimeBlockStatus(hour);
    var timeBlock = $('<div id="' + hourId + '" class="row time-block ' + status + '">');
    var hourDiv = $('<div class="col-2 col-md-1 hour text-center py-3">').text(dayjs('1/1/1 ' + hour + ':00:00').format('hA'));
    var textarea = $('<textarea class="col-8 col-md-10 description" rows="3">');
    var saveBtn = $('<button class="btn saveBtn col-2 col-md-1" aria-label="save">').html('<i class="fas fa-save" aria-hidden="true"></i>');

    timeBlock.append(hourDiv, textarea, saveBtn);
    containerEl.append(timeBlock);
  }

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

  

 