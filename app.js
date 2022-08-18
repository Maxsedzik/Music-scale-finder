//SCALES AND NOTES
let cmaj = ["c", "d", "e", "f", "g", "a", "b"];
let cismaj = ["c#", "d#", "f", "f#", "g#", "a#", "c"];

document.getElementById("find").addEventListener("click", finder);

function finder() {
  //SCRAPING NOTES FROM THE FORM
  let note1 = document.getElementById("note1").value;
  let note2 = document.getElementById("note2").value;
  let note3 = document.getElementById("note3").value;
  let note4 = document.getElementById("note4").value;
  let note5 = document.getElementById("note5").value;

  //CHECKING WHETER INPUTS ARE REALLY NOTES OR NOT
  let reControl = /^[a-gA-G]{1}#?$/;
  console.log(reControl.test(note1));
  if (reControl.test(note1)) {
  } else {
    document.getElementById("note1").classList.add("is-invalid");
  }

  //ARRAY MADE FROM NOTES
  let notes = [];
  notes.push(note1);
  notes.push(note2);
  notes.push(note3);
  notes.push(note4);
  notes.push(note5);

  //CLEANING ARRAY FROM EMPTY ELEMENTS
  let notesCleared = notes.filter((note) => note !== "");

  //CREATING REGEXP FROM NOTES NOMATTER THE CASE
  let re1 = new RegExp(note1, "i");
  let re2 = new RegExp(note2, "i");
  let re3 = new RegExp(note3, "i");
  let re4 = new RegExp(note4, "i");
  let re5 = new RegExp(note5, "i");

  //CHECKING THE NOTES WITH IF STATEMENTS

  //CMAJ
  if (notesCleared.length >= 1) {
    if (re1.test(cmaj)) {
      if (re2.test(cmaj)) {
        if (re3.test(cmaj)) {
          if (re4.test(cmaj)) {
            if (re5.test(cmaj)) {
              console.log("cmaj good");
            } else {
              console.log("cmaj bad");
            }
          } else {
            console.log("cmaj bad");
          }
        } else {
          console.log("cmaj bad");
        }
      } else {
        console.log("cmaj bad");
      }
    } else {
      console.log("cmaj bad");
    }
  }

  //C#MAJ

  if (notesCleared.length >= 1) {
    if (re1.test(cismaj)) {
      if (re2.test(cismaj)) {
        if (re3.test(cismaj)) {
          if (re4.test(cismaj)) {
            if (re5.test(cismaj)) {
              console.log("cismaj good");
            } else {
              console.log("cismaj bad");
            }
          } else {
            console.log("cismaj bad");
          }
        } else {
          console.log("cismaj bad");
        }
      } else {
        console.log("cismaj bad");
      }
    } else {
      console.log("cismaj bad");
    }
  }
}
