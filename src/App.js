import Map from "./components/Maps";
let mapData = {
  longitude:31.233334,
  latitude: 30.033333,
  zoom:7,
  markers:[
    {longitude: 50, latitude: 30,},
    {longitude: 30, latitude: 10,},
    {longitude: 50, latitude: 20,},
    {longitude: 31.233334, latitude: 30.033333,},
  ]
}
function App() {
  return (
    <div className="App">
      <Map {...mapData}/>
    </div>
  );
}

export default App;
