var skipped = 0;

function clearAll() {
  setProperty("text_inputInsta", "text", "");
  setProperty("dropdown1", "text", "");
  setProperty("dropdown2", "text", "");
  setProperty("dropdown3", "text", "");
  setProperty("dropdown4", "text", "");
  setProperty("dropdown5", "text", "");
  setProperty("dropdown6", "text", "");
  setProperty("text_input7", "text", "");
  setProperty("dropdown8", "text", "");
  setProperty("dropdown9", "text", "");
  setProperty("text_input10", "text", "");
  setProperty("text_input101", "text", "");
}


function addToSkipped(label){
  if(getProperty(label, "text") == "") {
    skipped += 1
  }
}

function goodAmount(num) {
  if (num >= 5) {
    return(", which indicates that you're somewhat worried about your data.")
  } else {
    return(", which shows that you are not really concerned about your data privacy.")
  }
}

timedLoop(1, function () {
  if (getProperty("text_inputInsta", "text") == "") {
    setProperty("buttonInsta", "text", "Skip");
  } else {
    setProperty("buttonInsta", "text", "Continue");
  }
  if (getProperty("text_input3", "text") == "") {
    setProperty("button14", "text", "Skip");
  } else {
    setProperty("button14", "text", "Continue");
  }
  if (getProperty("text_input4", "text") == "") {
    setProperty("button16", "text", "Skip");
  } else {
    setProperty("button16", "text", "Continue");
  }
  if (getProperty("text_input5", "text") == "") {
    setProperty("button18", "text", "Skip");
  } else {
    setProperty("button18", "text", "Continue");
  }
  if (getProperty("dropdown1", "text") == "") {
    setProperty("button1", "text", "Skip");
  } else {
    setProperty("button1", "text", "Continue");
  }
  if (getProperty("dropdown2", "text") == "") {
    setProperty("button2", "text", "Skip");
  } else {
    setProperty("button2", "text", "Continue");
  }
  if (getProperty("dropdown3", "text") == "") {
    setProperty("button3", "text", "Skip");
  } else {
    setProperty("button3", "text", "Continue");
  }
  if (getProperty("dropdown4", "text") == "") {
    setProperty("button4", "text", "Skip");
  } else {
    setProperty("button4", "text", "Continue");
  }
  if (getProperty("dropdown5", "text") == "") {
    setProperty("button5", "text", "Skip");
  } else {
    setProperty("button5", "text", "Continue");
  }
  if (getProperty("dropdown6", "text") == "") {
    setProperty("button6", "text", "Skip");
  } else {
    setProperty("button6", "text", "Continue");
  }
  if (getProperty("text_input7", "text") == "") {
    setProperty("button7", "text", "Skip");
  } else {
    setProperty("button7", "text", "Continue");
  }
  if (getProperty("dropdown8", "text") == "") {
    setProperty("button8", "text", "Skip");
  } else {
    setProperty("button8", "text", "Continue");
  }
  if (getProperty("dropdown9", "text") == "") {
    setProperty("button9", "text", "Skip");
  } else {
    setProperty("button9", "text", "Continue");
  }
  if (getProperty("text_input10", "text") == "" && getProperty("text_input101", "text") == "") {
    setProperty("button10", "text", "Skip");
  } else {
    setProperty("button10", "text", "Continue");
  }
});

onEvent("buttonInfo", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("buttonInfo clicked!");
  setScreen("screenInfo");
});
onEvent("buttonS", "click", function (event) {
  clearAll();
  playSound("assets/audio_click.mp3", false);
  console.log("buttonS clicked!");
  setScreen("screenInsta");
});
onEvent("buttonInsta", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("buttonInsta clicked!");
  setScreen("screen1");
});
onEvent("button1", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  addToSkipped("dropdown1");
  console.log("button1 clicked!");
  setScreen("screen2");
});
onEvent("button2", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  addToSkipped("dropdown2");
  console.log("button2 clicked!");
  setScreen("screen3");
});
onEvent("button3", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  addToSkipped("dropdown3");
  let labelInput = document.getElementById('text_inputInsta').value;
  let validAccount = document.getElementById('validAccount').innerHTML;
  if (labelInput == " " || labelInput == "" || validAccount == "false") {
    setScreen("screen4");
  } else {
    setScreen("screenConditional2");
  }
});
onEvent("button16", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  addToSkipped("input4");
  console.log("button16 clicked!");
  setScreen("screen4")
})
onEvent("button4", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button4 clicked!");
  addToSkipped("dropdown4");
  setScreen("screen5");
});
onEvent("button5", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button5 clicked!");
  addToSkipped("dropdown5");

  let labelInput = document.getElementById('text_inputInsta').value;
  let validAccount = document.getElementById('validAccount').innerHTML;
  if (labelInput == " " || labelInput == "" || validAccount == "false") {
    setScreen("screen6");
  } else {
    setScreen("screenConditional1");
  }
});
onEvent("button14", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button14 clicked!");
  addToSkipped("input3");
  setScreen("screen6")
})
onEvent("button6", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button6 clicked!");
  addToSkipped("dropdown6");
  setScreen("screen7");
});
onEvent("button7", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  addToSkipped("text_input7")
  console.log("button7 clicked!");
  let labelInput = document.getElementById('text_inputInsta').value;
  let hasPosts = document.getElementById('hasPosts').innerHTML;
  let validAccount = document.getElementById('validAccount').innerHTML;
  if (labelInput == " " || labelInput == "" || validAccount == "false"|| hasPosts == "false") {
    setScreen("screen8");
  } else {
    setScreen("screenConditional3");
  }
});
onEvent("button18", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button18 clicked!");
  addToSkipped("input5");
  setScreen("screen8")
})
onEvent("button8", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button8 clicked!");
  addToSkipped("dropdown8");
  setScreen("screen9");
});
onEvent("button9", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button9 clicked!");
  addToSkipped("dropdown9");
  setScreen("screen10");
});
onEvent("button10", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button10 clicked!");
  addToSkipped("text_input10");
  document.getElementById("label16").innerHTML = `In reality, it was &nbsp;a test of your data privacy awareness.&nbsp;Apparently, you skipped ${skipped/2}
  questions${goodAmount(skipped/2)}`;
  setScreen("screenExplanation1");
});
onEvent("buttonE1", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("buttonE1 clicked!");
  setScreen("screenExplanation2");
});
onEvent("buttonE2", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("buttonE2 clicked!");
  let labelInput = document.getElementById('text_inputInsta').value;
  let validAccount = document.getElementById('validAccount').innerHTML;
  if (labelInput == " " || labelInput == "" || validAccount == "false") {
    setScreen("screenExplanation3");
  } else {
    setScreen("screenExplanation2B");
  }
});
onEvent("button26", "click", function(event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button26 clicked!")
  setScreen("screenExplanation3")
})
onEvent("buttonE3", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("buttonE3 clicked!");
  setScreen("screenLinks");
});
onEvent("buttonL1", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("buttonL1 clicked!");
  open("https://www.privacymonitor.com/articles/privacy-guide/");
});
onEvent("buttonL2", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("buttonL2 clicked!");
  open("https://www.pcmag.com/how-to/12-simple-things-you-can-do-to-be-more-secure-online");
});
onEvent("buttonL3", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("buttonL3 clicked!");
  open("https://www.cbc.ca/news/canada/nova-scotia/tech-columnist-warns-against-taking-social-media-quizzes-for-fun-1.5442282");
});


onEvent("button11", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button11 clicked!");
  document.getElementById("label16").innerHTML = `In reality, it was &nbsp;a test of your data privacy awareness.&nbsp;Apparently, you skipped ${skipped/2}
  questions${goodAmount(skipped/2)}`;
  setScreen("screenExplanation1");
});
onEvent("button21", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button21 clicked!");
  document.getElementById("label16").innerHTML = `In reality, it was &nbsp;a test of your data privacy awareness.&nbsp;Apparently, you skipped ${skipped/2}
  questions${goodAmount(skipped/2)}`;
  setScreen("screenExplanation1");
});
onEvent("button31", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button31 clicked!");
  document.getElementById("label16").innerHTML = `In reality, it was &nbsp;a test of your data privacy awareness.&nbsp;Apparently, you skipped ${skipped/2}
  questions${goodAmount(skipped/2)}`;
  setScreen("screenExplanation1");
});
onEvent("button41", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button41 clicked!");
  document.getElementById("label16").innerHTML = `In reality, it was &nbsp;a test of your data privacy awareness.&nbsp;Apparently, you skipped ${skipped/2}
  questions${goodAmount(skipped/2)}`;
  setScreen("screenExplanation1");
});
onEvent("button51", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button51 clicked!");
  document.getElementById("label16").innerHTML = `In reality, it was &nbsp;a test of your data privacy awareness.&nbsp;Apparently, you skipped ${skipped/2}
  questions${goodAmount(skipped/2)}`;
  setScreen("screenExplanation1");
});
onEvent("button61", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button61 clicked!");
  document.getElementById("label16").innerHTML = `In reality, it was &nbsp;a test of your data privacy awareness.&nbsp;Apparently, you skipped ${skipped/2}
  questions${goodAmount(skipped/2)}`;
  setScreen("screenExplanation1");
});
onEvent("button71", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button71 clicked!");
  document.getElementById("label16").innerHTML = `In reality, it was &nbsp;a test of your data privacy awareness.&nbsp;Apparently, you skipped ${skipped/2}
  questions${goodAmount(skipped/2)}`;
  setScreen("screenExplanation1");
});
onEvent("button81", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button81 clicked!");
  document.getElementById("label16").innerHTML = `In reality, it was &nbsp;a test of your data privacy awareness.&nbsp;Apparently, you skipped ${skipped/2}
  questions${goodAmount(skipped/2)}`;
  setScreen("screenExplanation1");
});
onEvent("button91", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button91 clicked!");
  document.getElementById("label16").innerHTML = `In reality, it was &nbsp;a test of your data privacy awareness.&nbsp;Apparently, you skipped ${skipped/2}
  questions${goodAmount(skipped/2)}`;
  setScreen("screenExplanation1");
});
onEvent("button101", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("button101 clicked!");
  document.getElementById("label16").innerHTML = `In reality, it was &nbsp;a test of your data privacy awareness.&nbsp;Apparently, you skipped ${skipped/2}
  questions${goodAmount(skipped/2)}`;
  setScreen("screenExplanation1");
});
onEvent("buttonInsta1", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("buttonInsta1 clicked!");
  document.getElementById("label16").innerHTML = `In reality, it was &nbsp;a test of your data privacy awareness.&nbsp;Apparently, you skipped ${skipped/2}
  questions${goodAmount(skipped/2)}`;
  setScreen("screenExplanation1");
});
onEvent("buttonE11", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("buttonE11 clicked!");
  skipped = 0;
  setScreen("startScreen");
});
onEvent("buttonE21", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("buttonE21 clicked!");
  skipped = 0;
  setScreen("startScreen");
});
onEvent("buttonE31", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("buttonE31 clicked!");
  skipped = 0;
  setScreen("startScreen");
});
onEvent("buttonL4", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("buttonL4 clicked!");
  skipped = 0;
  setScreen("startScreen");
});
onEvent("buttonI1", "click", function (event) {
  playSound("assets/audio_click.mp3", false);
  console.log("buttonI1 clicked!");
  skipped = 0;
  setScreen("startScreen");
});
