window.onload = function() {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: 45, label: "Correct"},
                {y: 20, label: "Incorrrect"},
                {y: 35, label: "Partially correct"}
            ]
        }]
    });
    chart.render();
}