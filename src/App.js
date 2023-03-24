import axios from "axios";
import { useState } from "react";
import List from "./components/List";
import "./App.css";


export default function App() {
  const [FindWord, setWord] = useState("");

  const [result, setResult] = useState(null);
  

  const dataApi = "https://api.dictionaryapi.dev/api/v2/entries/en";

  async function handleSearch() {
    try {
      const res = await axios.get(`${dataApi }/${FindWord}`);
      console.log(res, "res");
      setResult(res.data[0]);
    } catch (e) {
      console.log({ e });
    }
  }

  function handleClear() {
    setWord("");
    setResult(null);
  }
 
  return (
   
    <div className="App">
       <span>{FindWord ? FindWord : "Word Hunt"}</span>
       <div className="container">
      <input value={FindWord} onChange={(e) => setWord(e.target.value)} />
      <button className="button" type="submit" onClick={handleSearch}>
        Search
      </button>
      <button
        disabled={!result}
        className="button"
        type="submit"
        onClick={handleClear}
      >
        Clear
      </button>

      {result && <List {...{ result }} />}
    </div>
    </div>
    
  );
}
