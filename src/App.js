import './App.css';
import Navbar from './components/Navbar';
import TextForm from  './components/TextForm';
import  React, {useState} from  'react';
import Alert from './components/Alert';


function App() {
  // eslint-disable-next-line no-undef
  const[mode, setMode] = useState('light');
const [alert,setAlert]= useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
setAlert(null);
  },1500);
}

  const toggleMode =()=>{
if(mode ==='light'){
  setMode('dark');
  document.body.style.backgroundColor='#042743' ;
  showAlert("Dark mode has been enabled","success");
  document.title='TextUtils-Dark mode';
}
else{
  setMode('light');
    document.body.style.backgroundColor = 'white';
  showAlert("Light mode has been enabled", "success");
    document.title = "TextUtil-Light mode";


}
}
const toggleMode1 =()=>{
if(mode ==='light'){
  setMode("dark");
  document.body.style.backgroundColor = '#d63384';
  showAlert("Pink mode has been enabled","success");
  document.title='TextUtils-Dark mode';
}
else{
  setMode('light');
    document.body.style.backgroundColor = 'white';
  showAlert("Light mode has been enabled", "success");
    document.title = "TextUtil-Light mode";


}
  }
  const toggleMode2 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#eb0d0d";
      showAlert("Red mode has been enabled", "success");
      document.title = "TextUtils-Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtil-Light mode";
    }
  }
  const toggleMode3 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#8f0dfd";
      showAlert("Purple mode has been enabled", "success");
      document.title = "TextUtils-Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtil-Light mode";
    }
  }
  return (
    <>
      
        {/*<Navbar title="TextUtils23" aboutText="About TextUtils" /> */}
        <Navbar
          title="TextUtils23"
          mode={mode}
          toggleMode={toggleMode}
          toggleMode1={toggleMode1}
          toggleMode3={toggleMode3}
          toggleMode2={toggleMode2}
        />
        <Alert alert={alert} />
                <div className="container">
<TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze  below"
      mode={mode} />
      </div>
        {/*<TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze  below"
      mode={mode} />
        <div className="container">
          <Routes>
          <Route exact path="/about"element={
              <About />}/>
            <Route  exact path="/"
            element={<TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze  below" mode={mode}/>}/>
          </Routes>
        </div>
            </Router>*/}
    </>
  );
}

export default App;
