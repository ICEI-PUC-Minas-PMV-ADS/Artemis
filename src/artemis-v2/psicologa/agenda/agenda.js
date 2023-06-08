$(document).ready(function () {

    // Initialize the calendar
   let calendar= $('#calendar').fullCalendar({
        editable: true,
        selectable: true,
        eventLimit: true,
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        events: getEventsFromLocalStorage(), // Load events from local storage
        // Event click handler
        eventClick: function (calEvent, jsEvent, view) {
            $('#modalTitle').text(calEvent.title);
            $('#title').val(calEvent.title);
            $('#start').val(moment(calEvent.start).format('YYYY-MM-DD HH:mm:ss'));
            $('#end').val(moment(calEvent.end).format('YYYY-MM-DD HH:mm:ss'));
            $('#eventId').val(calEvent.id);
            $('#eventModal').css('display', 'block');
        },
        // Day click handler
        dayClick: function (date, jsEvent, view) {
            $('#modalTitle').text('Create Event');
            $('#title').val('');
            $('#start').val(moment(date).format('YYYY-MM-DD HH:mm:ss'));
            $('#end').val(moment(date).format('YYYY-MM-DD HH:mm:ss'));
            $('#eventId').val('');
            $('#eventModal').css('display', 'block');
        }
    });



    // Save event handler
    $('#eventForm').submit(function (e) {
        e.preventDefault();
        var eventData = {
            title: $('#title').val(),
            start: $('#start').val(),
            end: $('#end').val(),
            id: $('#eventId').val()
        };

        saveEventToLocalStorage(eventData); // Save event to local storage
        $('#eventModal').css('display', 'none');
        // calendar.refetchEvents();
        window.location.reload()
    });

    // Delete event handler
    $('#deleteBtn').click(function () {
        if (confirm('Are you sure you want to delete this event?')) {
            var eventId = $('#eventId').val();
            deleteEventFromLocalStorage(eventId); // Delete event from local storage
            $('#eventModal').css('display', 'none');
            // $calendar.refetchEvents();
            window.location.reload()
        }
    });

    // Close modal handler
    $('.close').click(function () {
        $('#eventModal').css('display', 'none');
    });

    // Get events from local storage
    function getEventsFromLocalStorage() {
        var events = JSON.parse(localStorage.getItem('calendarEvents')) || [];
        return events.map(function (event) {
            return {
                id: event.id,
                title: event.title,
                start: event.start,
                end: event.end
            };
        });
    }

    // Save event to local storage
    function saveEventToLocalStorage(eventData) {
        var events = JSON.parse(localStorage.getItem('calendarEvents')) || [];
        if (eventData.id) {
            // Update existing event
            events = events.map(function (event) {
                if (event.id === eventData.id) {
                    event.title = eventData.title;
                    event.start = eventData.start;
                    event.end = eventData.end;
                }
                return event;
            });
        } else {
            // Create new event
            eventData.id = generateEventId();
            events.push(eventData);
        }
        localStorage.setItem('calendarEvents', JSON.stringify(events));
        // $('#calendar').fullCalendar('refetchEvents');
    }

    // Delete event from local storage
    function deleteEventFromLocalStorage(eventId) {
        var events = JSON.parse(localStorage.getItem('calendarEvents')) || [];
        events = events.filter(function (event) {
            return event.id !== eventId;
        });
        localStorage.setItem('calendarEvents', JSON.stringify(events));
        calendar.refetchEvents();
    }

    // Generate unique event ID
    function generateEventId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
});
