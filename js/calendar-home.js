var today = $.fullCalendar.moment();//.toISOString().substring(0,10);
var tomorrow = $.fullCalendar.moment().add(1, 'day');//.toISOString().substring(0,10);

$(document).ready(function() {
    $('#minicalendar1').fullCalendar({
        googleCalendarApiKey: 'AIzaSyDHPZYzPYwFPZRT6tWA_jmuZdA9j7jgLgM',
        eventSources: [
        {
            googleCalendarId: 'mekorhabracha@gmail.com',
            color: 'lightgray',
            textColor: 'black'
        },
        {
            googleCalendarId: 'en.usa#holiday@group.v.calendar.google.com',
            color: 'darkred',
            textColor: 'white'
        },
        {
            url: 'http://www.hebcal.com/hebcal/?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=s&s=on&c=on&m=42&b=18&o=on&geo=zip&zip=19103',
            cache: true
        }
        ],
        header: '',
        height: 125,
        defaultDate: today,
        columnFormat: 'dddd, MMMM D',
        timeFormat: 'h:mmt',
        defaultView: 'basicDay'
    });
});

$(document).ready(function() {
    $('#minicalendar2').fullCalendar({
        googleCalendarApiKey: 'AIzaSyDHPZYzPYwFPZRT6tWA_jmuZdA9j7jgLgM',
        eventSources: [
        {
            googleCalendarId: 'mekorhabracha@gmail.com',
            color: 'lightgray',
            textColor: 'black'
        },
        {
            googleCalendarId: 'en.usa#holiday@group.v.calendar.google.com',
            color: 'darkred',
            textColor: 'white'
        },
        {
            url: 'http://www.hebcal.com/hebcal/?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=s&s=on&c=on&m=42&b=18&o=on&geo=zip&zip=19103',
            cache: true
        }
        ],
        header: '',
        height: 125,
        defaultDate: tomorrow,
        columnFormat: 'dddd, MMMM D',
        timeFormat: 'h:mmt',
        defaultView: 'basicDay'
    });
});