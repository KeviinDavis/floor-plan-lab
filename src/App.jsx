// src/App.jsx
import './app.css';

// const App = () => {

//   return (
//     <h1>Hello, world!</h1>
//   );
// };

function FloorPlan() {
  return (
    <div className="floor-plan">
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum={1} />
      <Bedroom bedNum={2} />
      <Bedroom bedNum={3} />
      <Bath size="Full" />
      <Bath size="Half" />
    </div>
  )
}

function Kitchen() {
  return (
    <div className="kitchen">
      <h2>Kitchen</h2>
      <Oven />
      <Sink />
    </div>
  );
}

function Oven() {
  return <div className="oven">Oven</div>;
}

function Sink() {
  return <div className="sink">Sink</div>;
}

function LivingRoom() {
  return <div className="living-room">Living Room</div>;
}

function Bedroom({ bedNum }) {
  return <div className="bedroom">Bedroom {bedNum}</div>;
}

function Bath({ size }) {
  return <div className="bath">{size} Bath</div>;
}

function App() {
  return (
    <div>
      <h1>My Floor Plan</h1>
      <FloorPlan />
    </div>
  );
}


export default App;
