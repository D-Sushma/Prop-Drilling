// PROP-DRILLING --> way of pass info from parent to child and from child to child of child 
// parent(App.js)--> child(Header.js)--> child of child(Subheader.js)



import './App.css';
import Header from './components/Header'


function App() {

  // 1. propdrilling---> task is give only header.js & other is give in subheader.js---------------
  let task = "i am best";
  let name ="sushma";
  let  test ="tested";
  return (
    <div className="App">

      {/*2. propdrilling--------------put variable & go header.js */}
     <Header  data={{task, name, test}}/>
    
    </div>
  );
}

export default App;
