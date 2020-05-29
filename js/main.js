document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("demoCalendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ["dayGrid", "interaction", "timeGrid", "list"],
    themeSystem: "bootatrap",
    header: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
  });
  calendar.setOption("locale", "Kg");
  calendar.render();
});
