function AI(grid) {
	this.grid = grid;
	this.lastMove = 0;
	this.moves = [0, 1, 2, 3];
}

// Return an int:
// 0: up, 1: right, 2: down, 3: left
AI.prototype.getBest = function () {
	possibleMoves = [];
	for(var direction in this.moves) {
		var newGrid = this.grid.clone();
		if(newGrid.move(direction)) {
			possibleMoves.push({direction: direction, score:  newGrid.scoreGrid()});
		}
	}
	return this.selectBestMove(possibleMoves).direction;
}

AI.prototype.isBottomFull = function () {
	for(var x=0; x<this.grid.size; x++) {
		if(!this.grid.cells[x][3]) return false;
	}
	return true;
}

/*
Return the move from the given list of possible moves
 - Never up unless only possible
 - Don't move left unless bottom is full

A move is an object defined as { direction: direction, score: score }
with score being the gridScore after the move is completed in the given direction
*/
AI.prototype.selectBestMove = function(possibleMoves) {

}








