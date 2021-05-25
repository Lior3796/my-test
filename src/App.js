import logo from './logo.svg';
import './App.css';
import DogCard from './Components/Featurs/DogCard/DogCard';
function App() {
  return (
    <div className="App">
     <Home />
     

    </div>
  );
}
function Home() {
    
  const dogsArray = [{},{},{},{}];
//   dogsArray.forEach((field)=> {field.FName = "dog1"; field.type = "bulldog"; field.age = Math.floor(Math.random() * 6); })
  
    return (
   <div>
      <p> {dogsArray[0].Dog1 = (<DogCard FName="rexi" type="bulldog" age={2} />) }</p>
      <p> {dogsArray[1].Dog2 = (<DogCard FName="sky" type="bulldog" age={4} />)}</p> 
      <p> {dogsArray[2].Dog3 = (<DogCard FName="sami" type="bulldog" age={3} />)}</p> 
      <p> {dogsArray[3].Dog4 = (<DogCard FName="marly" type="bulldog" age={7} />)}</p> 
   </div>
    )
}

export default App;
