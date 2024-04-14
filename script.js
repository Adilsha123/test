

const barChartOptions = {
    series: [
        {
            data: [20, 25, 15, 10, 6],
        },
    ],
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: false,
        },
    },
    colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: '40%',
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        // show: false,
    },
    xaxis: {
        categories: ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5'],
    },
    yaxis: {
        title: {
            text: 'Count',
        },
    },
};

const barChart = new ApexCharts(
    document.querySelector('#bar-chart'),
    barChartOptions
);
barChart.render();


const areaChartOptions = {
    series: [
        {
            name: 'Noise Level',
            data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
            name: 'Air Quality',
            data: [11, 32, 45, 32, 34, 52, 41],
        },
    ],
    chart: {
        height: 350,
        type: 'area',
        toolbar: {
            show: false,
        },
    },
    colors: ['#4f35a1', '#246dec'],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
    },
    labels: ['Area 1', 'Area 2', 'Area 3', 'Area 4', 'Area 5', ' Area 6', 'Area 7'],
    markers: {
        size: 0,
    },
    yaxis: [
        {
            title: {
                text: 'Noise Level dB',
            },
        },
        {
            opposite: true,
            title: {
                text: 'Air Quality %',
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
    },
};

const areaChart = new ApexCharts(
    document.querySelector('#area-chart'),
    areaChartOptions
);
areaChart.render();


  // Simulated JSON data
  const responseData = {
    "code": 200,
    "message": "Fetched all rooms",
    "data": [
      { "id": 1, "name": "S125", "capacity": 100 },
      { "id": 2, "name": "S123", "capacity": 100 },
      { "id": 3, "name": "S121", "capacity": 100 }
    ]
  };

  // Function to populate room names in the dropdown
  function populateRoomNames() {
    try {
      const roomNames = responseData.data.map(room => room.name);
      const dropdown = document.getElementById('roomNamesDropdown');
      dropdown.innerHTML = ''; // Clear existing options
      roomNames.forEach(name => {
        const option = document.createElement('option');
        option.textContent = name;
        dropdown.appendChild(option);
      });
    } catch (error) {
      console.error('Error populating room names:', error);
    }
  }


  async function updateRoomCapacity(roomId) {
    try {
      // Simulated room capacity data
       // Fetch room total capacity from the server
    // const response = await fetch(`http://localhost:8080/room/total-capacity/${roomId}`);
    // const data = await response.json();
    
    // // Update the room count element with the fetched capacity
    // document.getElementById('roomCount').textContent = data.data;
      const sampleData = {
        "code": 200,
        "message": "Room total capacity fetched.",
        "data": 100
      };
      
      // Update the room count element with the simulated capacity
      document.getElementById('roomCount').textContent = sampleData.data;
    } catch (error) {
      console.error('Error updating room capacity:', error);
    }
  }

  async function updateoccupancy(roomId) {
    try {
      // Simulated room capacity data
      const sampleData = {
        "code": 200,
        "message": "Room total capacity fetched.",
        "data": 100
      };
      
      // Update the room count element with the simulated capacity
      document.getElementById('occupancy').textContent = sampleData.data;
    } catch (error) {
      console.error('Error updating room capacity:', error);
    }
  }
  
  async function updateRoomAirQuality(roomId) {
    try {
    //   const response = await fetch(`http://localhost:8080/room-air-quality-level/get-by-room/${roomId}`);
    // const data = await response.json();
    
    // // Extract the latest air quality value
    // const latestAirQuality = data.data[0].value; // Assuming the latest value is at index 0
    
      // Sample room air quality data
      const sampleData = {
        "code": 200,
        "message": "Room air quality level values fetched.",
        "data": [
          {
            "id": 1,
            "value": 25.3,
            "date": "2024-04-13T10:00:00",
            "room": {
              "id": 1,
              "name": "S125",
              "capacity": 100
            }
          },
          {
            "id": 2,
            "value": 26.2,
            "date": "2024-04-13T11:00:00",
            "room": {
              "id": 1,
              "name": "S125",
              "capacity": 100
            }
          },
          {
            "id": 3,
            "value": 27.5,
            "date": "2024-04-13T12:00:00",
            "room": {
              "id": 1,
              "name": "S125",
              "capacity": 100
            }
          },
          {
            "id": 4,
            "value": 28.1,
            "date": "2024-04-13T13:00:00",
            "room": {
              "id": 1,
              "name": "S125",
              "capacity": 100
            }
          }
        ]
      };
  
      // Extract the latest air quality value
      const latestAirQuality = sampleData.data[0].value; // Assuming the latest value is at index 0
      
      // Update the air quality element with the latest value
      document.getElementById('airQualityValue').textContent = latestAirQuality;
    } catch (error) {
      console.error('Error updating room air quality:', error);
    }
  }
  
  async function updateRoomNoiseLevel(roomId) {
    try {

    //   const response = await fetch(`http://localhost:8080/room-noise-level/get-by-room/${roomId}`);
    // const data = await response.json();
    
    // // Extract the latest noise level value
    // const latestNoiseLevel = data.data[0].value;
      // Sample room noise level data
      const sampleData = {
        "code": 200,
        "message": "Room noise level values fetched.",
        "data": [
          {
            "id": 1,
            "value": 65.5,
            "date": "2024-04-13T10:00:00",
            "room": {
              "id": 1,
              "name": "S125",
              "capacity": 100
            }
          },
          {
            "id": 2,
            "value": 70.2,
            "date": "2024-04-13T11:00:00",
            "room": {
              "id": 1,
              "name": "S125",
              "capacity": 100
            }
          },
          {
            "id": 3,
            "value": 75.3,
            "date": "2024-04-13T12:00:00",
            "room": {
              "id": 1,
              "name": "S125",
              "capacity": 100
            }
          },
          {
            "id": 4,
            "value": 80.1,
            "date": "2024-04-13T13:00:00",
            "room": {
              "id": 1,
              "name": "S125",
              "capacity": 100
            }
          }
        ]
      };
  
      // Extract the latest noise level value
      const latestNoiseLevel = sampleData.data[0].value; // Assuming the latest value is at index 0
      
      // Update the noise level element with the latest value
      document.getElementById('noiseLevelValue').textContent = latestNoiseLevel;
    } catch (error) {
      console.error('Error updating room noise level:', error);
    }
  }
  