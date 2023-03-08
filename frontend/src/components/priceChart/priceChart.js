import React from 'react'; 
import { useRef } from 'react';
import { 
  Chart as ChartJS,
  BarElement,
  CategoryScale, 
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar, getElementAtEvent, getElementsAtEvent } from 'react-chartjs-2';
import './priceChart.css'

ChartJS.register(
  BarElement,
  CategoryScale, 
  LinearScale,
  Tooltip,
  Legend
)

const PriceChart = ( { chartData } ) => {
  const priceData = []
  const carrierLabels = []
  const flights = chartData.items;

  flights.forEach(flight => {
    priceData.push(flight.price.raw)
    
  });

  flights.forEach(flight => {
    carrierLabels.push(flight.legs[0].carriers["marketing"][0].name)
    carrierLabels.push(flight.legs[1].carriers["marketing"][0].name)
  })

  const labelOne = `${carrierLabels[0]} - ${carrierLabels[1]}`
  const labelTwo = `${carrierLabels[2]} - ${carrierLabels[3]}`
  const labelThree = `${carrierLabels[4]} - ${carrierLabels[5]}`
  
  const labels = [labelOne, labelTwo, labelThree]

  const data = {
    labels: labels,
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: 'Flight prices',
          data: priceData,
          // you can set indiviual colors for each bar
          backgroundColor: [
            '#395B64',
            '#A5C9CA',
            '#4E6E81',
          ],
          borderWidth: 1,
          borderRadius: 10,
          links: [chartData.items[0].deeplink, chartData.items[1].deeplink, chartData.items[2].deeplink]
        }
    ]
  }

  const options = { 
    
  }

  const chartRef = useRef();
  const onClick = (event) => {
    if(getElementAtEvent(chartRef.current, event).length > 0) {
      const datasetIndexNum = getElementAtEvent(chartRef.current, event)[0].datasetIndex;
      const dataPoint = getElementAtEvent(chartRef.current, event)[0].index;
      window.open(data.datasets[datasetIndexNum].links[dataPoint], '_blank')
    }
  }

  return (
    <div className='pc-container'>
      <div className="priceChart-wrapper">
        <h3 id="chart-title">Here's your flight info</h3>
        <Bar
          id="bar-chart"
          data = {data}
          options = {options}
          onClick = {onClick}
          ref = {chartRef}
        ></Bar>
      </div>
    </div>
  )
}


export default PriceChart;

