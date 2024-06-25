const ctx = document.getElementById("costBreakdownChart").getContext("2d");
const costBreakdownChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Domain Name",
      "Web Hosting",
      "SSL Certificate",
      "Social Media Ads",
      "ChatGPT Subscription",
      "Email Marketing Tools",
      "Social Media Management Tools",
    ],
    datasets: [
      {
        label: "Cost Breakdown",
        data: [10, 120, 55, 1440, 240, 0, 0], // Adjust the SSL Certificate cost as needed
        backgroundColor: [
          "#ff9999",
          "#66b3ff",
          "#99ff99",
          "#ffcc99",
          "#c2c2f0",
          "#ffb3e6",
          "#c4e17f",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: $${tooltipItem.raw}`;
          },
        },
      },
    },
  },
});
