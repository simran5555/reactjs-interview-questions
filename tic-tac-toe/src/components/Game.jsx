import useGame from "../hooks/useGame"

function Game() {
  
    const {board, handleClick, resetGame, getStatusMessage} = useGame()
  
  return (
    <div className='game'>
      <h1>TIC TAC TOE</h1>
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>Reset Game</button>
      </div>
      <div className="board">
        {board.map((b, index) => {
          return ( <button 
                    className = 'cell' 
                    key = {index}
                    onClick = {() => handleClick(index)}
                    disabled = {b!==null}
          >{b}</button> )
        })}
      </div>
    </div>
  )
  }

export default Game
