let cmaj = ["c", "d", "e", "f", "g", "a", "b"];
let cismaj = ["cis", "dis", "f", "fis", "gis", "ais", "c"];

document.getElementById("find").addEventListener("click", finder);

function finder() {
  let note1 = document.getElementById("note1").value;
  let note2 = document.getElementById("note2").value;
  let note3 = document.getElementById("note3").value;
  let note4 = document.getElementById("note4").value;
  let note5 = document.getElementById("note5").value;

  let notes = [];
  notes.push(note1);
  notes.push(note2);
  notes.push(note3);
  notes.push(note4);
  notes.push(note5);

  let re1 = new RegExp(note1);
  let re2 = new RegExp(note2);
  let re3 = new RegExp(note3);
  let re4 = new RegExp(note4);
  let re5 = new RegExp(note5);

  if (note1.length >= 1) {
    if (re1.test(cmaj) === true) {
    
  } else {
    console.log("CMAJ BAD");
  }
}
