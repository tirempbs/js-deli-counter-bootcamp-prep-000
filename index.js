function takeANumber(katzDeliLine, name) {
  var newLine = [];
  
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var customer = katzDeliLine.shift();
    return `Currently serving ${customer}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var line = [];
  let i = 0;
  while (i < katzDeliLine.length) {
    line.push(` ${i + 1}` + ". " + katzDeliLine[i]);
    i++;
  }
  if (katzDeliLine.length > 0) {
    return "The line is currently:" + line;
  } else {
    return "The line is currently empty.";
  }
}