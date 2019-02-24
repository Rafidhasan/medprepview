new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["Correct", "Incorrect"],
    datasets: [
      {
        label: "Answer",
        backgroundColor: ["#228B22", "#f00"],
        data: [30, 70]
      }
    ]
  },
  options: {
    title: {
      display: true,
    }
  }
});