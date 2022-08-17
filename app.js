let cmaj = ["c", "d", "e", "f", "g", "a", "b"];
let cismaj = ["cis", "dis", "f", "fis", "gis", "ais", "c"];

document.getElementById("find").addEventListener("click", finder);

function finder() {
  let note1 = document.getElementById("note1").value;
  let note2 = document.getElementById("note2").value;
  let note3 = document.getElementById("note3").value;
  let note4 = document.getElementById("note4").value;
  let note5 = document.getElementById("note5").value;

  let re1 = new RegExp(note1);
  let re2 = new RegExp(note2);
  let re3 = new RegExp(note3);
  let re4 = new RegExp(note4);
  let re5 = new RegExp(note5);

  if (note1.length !== 0 && re1.test(cmaj)) {
    if (note2.length !== 0 && re2.test(cmaj)) {
      if (note3.length !== 0 && re3.test(cmaj)) {
        if (note4.length !== 0 && re4.test(cmaj)) {
          if (note5.length !== 0 && re5.test(cmaj)) {
            console.log("CMAJ GOOD");
          }
        }
      }
    }
  }
  console.log("CMAJ BAD");
}
