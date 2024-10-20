import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);



const Sidebar = ({ visualizations }) => {
  if (!visualizations) return <div className="w-1/3 bg-white p-4 border-l">No visualizations available</div>;

  return (
    <div className="w-1/3 bg-white p-4 border-l overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Visualizations</h2>
      {visualizations.barChart && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Bar Chart</h3>
          <Bar data={visualizations.barChart} />
        </div>
      )}
      {visualizations.lineChart && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Line Chart</h3>
          <Line data={visualizations.lineChart} />
        </div>
      )}
      {visualizations.pieChart && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Pie Chart</h3>
          <Pie data={visualizations.pieChart} />
        </div>
      )}
      {visualizations.map && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Map</h3>
          <ComposableMap>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#EAEAEC"
                    stroke="#D6D6DA"
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
