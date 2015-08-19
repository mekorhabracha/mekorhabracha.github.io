$(document).ready(function() {
    $("#calendar").fullCalendar({
        height: 650,
        header: {
            left: "prev,next today",
            center: "title",
            right: "month,agendaWeek,agendaDay"
        },
        editable: false,
        fixedWeekCount: false,
        timezone: false,
        events: {
            url: "https://www.hebcal.com/hebcal/?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=sh&d=on&s=on&geo=zip&zip=19103&m=42",
            cache: true
        }
    });
    $("body").keydown(function(e) {
        if (e.keyCode == 37) {
            $('#calendar').fullCalendar('prev');
        } else if (e.keyCode == 39) {
            $('#calendar').fullCalendar('next');
        }
    });
});