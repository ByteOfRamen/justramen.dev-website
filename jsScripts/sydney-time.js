// sydney-time.js

function updateTime() {
    var now = new Date().toLocaleString("en-US", {timeZone: "Australia/Sydney"});
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    var formattedDate = new Date(now).toLocaleString('en-AU', options);
    document.getElementById('sydney-time').textContent = formattedDate;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  