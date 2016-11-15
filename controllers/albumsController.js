/************
 * DATABASE *
 ************/

// /* hard-coded data */
// var albums = [];


// GET /api/albums
function index(req, res) {
  res.json({albums});//see why the curly brackets
}

function create(req, res) {
  // FILL ME IN !
}

function show(req, res) {
  // FILL ME IN !
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
