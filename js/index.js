var hisTxt = [];
var curTxt = [];

function buttonClick(val) {
  switch (val) {
    case 'AC':
      curTxt = [];
      hisTxt = [];
      $('#inputTxt').text('0');
      $('#hisTxt').text('0');
      break;
    case 'CE':
      curTxt = [];
      $('#inputTxt').text('0');
      break;
    case '=':
      var t = calculation(curTxt).toString();
      $('#inputTxt').text(t);
      curTxt = [];
      hisTxt = t.split('');
      $('#hisTxt').text(hisTxt.join(''));
      break;
    default:
      if (curTxt.length === 0) {
        if (val === '+' || val === '-' || val === '*' || val === "/") {
          curTxt = hisTxt;
        }
      }
      curTxt.push(val);
      $('#inputTxt').text(curTxt.join(''));
  }
}

function calculation(arr) {
  var val = 0;
  var numStr = [[]];
  var operator = [];

  for (var i = 0, n = arr.length; i < n; i++) {
    if (arr[i] === '+' || arr[i] === '-' || arr[i] === '*' || arr[i] === '/') {
      operator.push(arr[i]);
      numStr.push([]);
    } else {
      numStr[numStr.length - 1].push(arr[i]);
    }
  }

  numStr[0].length === 0? val = 0: val = parseFloat(numStr[0].join(''));

  for (var j = 0, m = operator.length; j < m; j++) {
    val = compute(val, operator[j], parseFloat(numStr[j + 1].join('')));
  }

  return val;
}

function compute(val1, op, val2) {
  switch (op) {
    case '+':
      return val1 + val2;
    case '-':
      return val1 - val2;
    case '*':
      return val1 * val2;
    case '/':
      return val1 / val2;
    default:
      return 0;
  }
  return 0;
}