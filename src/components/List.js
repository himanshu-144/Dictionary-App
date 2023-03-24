const List = ({ result }) => {
    const { word, phonetics, meanings } = result;
  
    function playAudio() {
      try {
        let audio = new Audio(phonetics[0].audio);
        audio.play();
      } catch (e) {
        console.log({ e });
      }
    }
  
    return (
      <div className="card mt-20">
      
        <div className="word">
          <h3>Word</h3>
          <div className="wordSearch">
            <p className="word-find">{word}</p>
  
              <div className="wordAudio">
              <p className="audio" onClick={playAudio}>
                {" "}
                play audio{" "}
              </p>
            </div>
          </div>
  
          <div>
            <h3>Meaning:</h3>
            <p>{meanings[0].definitions[0].definition}</p>
          </div>
  
          <div>
            <h2>Synonyms </h2>
            <p>
              {meanings[0].synonyms.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default List;
  