import Card from "../components/Card.jsx";
import Transactions from "../components/Transactions.jsx";
import Chart from "../components/Chart.jsx";
import RightCards from "../components/RightCards.jsx";
import "../Styles/dashboard.css";

function Dashboard() {
  return (
    <div className="wrapper">
      <div className="main">
        <div className="card-container">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="right">
        <RightCards />
      </div>
    </div>
  );
}

export default Dashboard;
