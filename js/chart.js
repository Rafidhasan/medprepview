window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Your Statistics"
        },
        axisX: {
            title: "Numbers"
        },
        axisY: {
            title: "Good marks",
            titleFontColor: "#008080",
            lineColor: "#008080",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC",
            valueFormatString: "#0"
        },
        axisY2: {
            title: "Bad Marks",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E",
            valueFormatString: "#0"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "column",
            color: "#008080",  
            name: "Right Answer",
            showInLegend: true,      
            yValueFormatString: "",
            dataPoints: [
                { label: "Physics",  y: 10.5 },
                { label: "Math", y: 50 },
                { label: "Chemestry", y: 55 },
                { label: "Biology",  y: 78 },
                { label: "Zoology",  y: 80 }
            ]
        },
        {
            type: "column",
            color: "#FF4500",  
            name: "Wrong Answer",
            axisYType: "secondary",
            showInLegend: true,
            yValueFormatString: "",
            dataPoints: [
                { label: "Physics",  y: 5.5 },
                { label: "Math", y: 80 },
                { label: "Chemestry", y: 100 },
                { label: "Biology",  y: 23 },
                { label: "Zoology",  y: 87 }
            ]
        }]
    });
    chart.render();
    
    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }
    
    }