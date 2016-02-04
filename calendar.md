---
title: Calendar
layout: defaultwide
area: learning
---

<div id="calendar"></div>

<script type='text/javascript'>

$(document).ready(function() {
    $('#calendar').fullCalendar({
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
        header: {
            left:   'today prev,next',
            center: 'title',
            right:  'month,agendaWeek'
        }
    });
});

</script>