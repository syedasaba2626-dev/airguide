
import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
const aqiHistory = [
  { time: "6 AM", aqi: 82 },
  { time: "9 AM", aqi: 105 },
  { time: "12 PM", aqi: 96 },
  { time: "3 PM", aqi: 128 },
  { time: "6 PM", aqi: 118 },
];
export default function App() {
  const [page, setPage] = useState("Dashboard");

  const menu = [
    "Dashboard",
    "AI Prediction",
    "Hotspot Map",
    "Report Pollution",
  ];

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      background: "#f0f7f6",
      color: "#18383e",
    }}>
      <aside style={{
        width: "240px",
        padding: "24px",
        background: "#10383d",
        color: "white",
        flexShrink: 0,
      }}>
        <h2>🌿 AirGuard <span style={{color:"#58ddbd"}}>AI</span></h2>
        <p style={{fontSize:"11px"}}>CLEANER AIR, SMARTER CITIES</p>

        {menu.map((item) => (
          <button
            key={item}
            onClick={() => setPage(item)}
            style={{
              display: "block",
              width: "100%",
              padding: "14px",
              marginTop: "10px",
              border: "none",
              borderRadius: "8px",
              textAlign: "left",
              cursor: "pointer",
              color: "white",
              background: page === item ? "#24625f" : "transparent",
            }}
          >
            {item}
          </button>
        ))}
      </aside>

      <main style={{padding:"30px", flex:1, minWidth:0}}>
        <p style={{color:"#138575"}}>INNOVATEX 2026–27</p>
        <h1>{page}</h1>
        <p>Intelligent Urban Air Quality Monitoring Platform</p>

        {page === "Dashboard" && (
          <>
            <p style={{
              background:"#fff0d4",
              padding:"12px",
              borderRadius:"8px",
            }}>
              DEMO MODE — All displayed values are illustrative, not live readings.
            </p>

            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",
              gap:"16px",
            }}>
              {[
                ["Sample AQI","128"],
                ["PM2.5","42 µg/m³"],
                ["PM10","76 µg/m³"],
              ]
               .map(([title,value]) => (
                <section key={title} style={{
                  background:"white",
                  padding:"20px",
                  borderRadius:"12px",
                }}>
                  <p>{title}</p>
                  <h2 style={{color:"#138575"}}>{value}</h2>
                  <small>Illustrative data only</small>
                </section>
              ))}
            </div>

            <section style={{
              background:"white",
              padding:"22px",
              marginTop:"20px",
              borderRadius:"12px",
            }}>
              <h2>Air Quality Overview</h2>
              <p>Illustrative AQI trend — sample data, not live readings.</p>

<div style={{ width: "100%", height: 280 }}>
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={aqiHistory}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="aqi"
        stroke="#138575"
        strokeWidth={3}
        dot={{ r: 5 }}
      />
    </LineChart>
  </ResponsiveContainer>
</div>
            </section>

            <section style={{
              background:"white",
              padding:"22px",
              marginTop:"20px",
              borderRadius:"12px",
            }}>
              <h2>💚 Health Recommendations</h2>
              <p>Check local air quality before outdoor activities.
              Consider reducing prolonged strenuous outdoor activity
              when pollution levels are unhealthy.</p>
            </section>
          </>
        )}

        {page === "AI Prediction" && (
          <section>
            <h2>AI-Based AQI Prediction</h2>
            <p>Forecast unavailable until historical data and a trained
            forecasting model are connected.</p>
          </section>
        )}

        {page === "Hotspot Map" && (
          <section>
            <h2>Pollution Hotspot Map</h2>
            <p>Next, we will add an interactive Hyderabad map with
            OpenStreetMap and available monitoring stations.</p>
          </section>
        )}

        {page === "Report Pollution" && (
          <section>
            <h2>Report a Pollution Concern</h2>
            <p>We will add a report form, location fields, photo uploads,
            and database storage in the next steps.</p>
          </section>
        )}
      </main>
    </div>
  );
}

