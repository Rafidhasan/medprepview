new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Accuracy", "Speed", "Effort", "Consistency", "Dedication", "Improvement"],
      datasets: [
        {
          label: "Score (%)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#6b8e23"],
          data: [30, 20, 10, 25, 15, 10]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Your Statistics'
      }
    }
});