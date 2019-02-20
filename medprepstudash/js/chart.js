window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Your scoreboard"
    },
    axisY: {
      title: "Score (out of 10)",
      includeZero: true
    },
    axisX: {
      title: "days"
    },
    data: [{
      type: "column",
      yValueFormatString: "#,##0.0#\"%\"",
      dataPoints: [
        { label: "1", y: 10 },	
        { label: "2", y: 8 },	
        { label: "3", y: 0 },
        { label: "4", y: 3 },	
        { label: "5", y: 2 },
        { label: "6", y: 5 },
        { label: "7", y: 6 },
        { label: "8", y: 1 },
        { label: "9", y: 0 },
        { label: "10", y: 3 },
        { label: "11", y: 5 },
        { label: "12", y: 4 },
        { label: "13", y: 6 },
        { label: "14", y: 2 },
        { label: "15", y: 6 },
        { label: "16", y: 3 },
        { label: "17", y: 7 },
        { label: "18", y: 9 },
        { label: "19", y: 1 },
        { label: "20", y: 1 },
        { label: "21", y: 0 },
        { label: "22", y: 0 },
        { label: "23", y: 10 },
        { label: "24", y: 3 },
        { label: "25", y: 10 },
        { label: "26", y: 4 },
        { label: "27", y: 3 },
        { label: "28", y: 2 },
        { label: "29", y: 6 },
        { label: "30", y: 1 }
      ]
    }]
  });
  chart.render();
  
  }

