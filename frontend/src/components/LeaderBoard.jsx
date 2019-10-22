import React from "react";
import "./LeaderBoard.scss";

function LeaderBoard() {
  return (
    <div className="leaderBoard">
      <div className="leaderBoardLeft">
        <img src="players_title.png" alt="Players Title" />
        <ol>
          <li id="player1">Adrien</li>
          <li id="player2">Blandine</li>
          <li id="player3">Léo</li>
        </ol>
      </div>
      <div className="leaderBoardRight">
        <img src="score_title.png" alt="Score Title" />
        <ul>
          <li>978846</li>
          <li>678541</li>
          <li>559743</li>
        </ul>
      </div>
    </div>
  );
}

export default LeaderBoard;
