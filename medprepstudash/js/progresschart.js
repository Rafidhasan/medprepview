new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "2.1", "2.2", "2.3", "2.4", "3.1", "3.2", "3.3", "3.5", "3.6"],
      datasets: [
        {
          label: "Chapter progress",
          backgroundColor: ["#228B22", "#228B22", "#228B22", "#D3D3D3", "#D3D3D3", "#D3D3D3", "#D3D3D3", "#f00", "#ffdb58", "#ffdb58", "#ffdb58", "#228B22", "#f00", "#D3D3D3", "#D3D3D3"],
          data: [80, 80, 95, 75, 63, 50, 60, 21, 45, 35, 40, 80, 25, 58, 60]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Lesson Progress'
      }
    }
});