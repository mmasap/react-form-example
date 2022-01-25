import StateForm from './components/StateForm';
import RefForm from './components/RefForm';

function App() {
  return (
    <>
      <div className='app'>
        <div>RefForm</div>
        <RefForm />
      </div>
      <div className='app'>
        <div>StateForm</div>
        <StateForm />
      </div>
    </>
  );
}

export default App;
