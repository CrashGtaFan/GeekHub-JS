// Task 1
function countElevent() {
  console.log('Count elements =', arguments.length);
}
// Task 2
function countStringElement() {
  var count_element = 0;
  for (var i=0; i < arguments.length; i++) {
    if (typeof arguments[i] === "string") {
      count_element++;
    }
  }
  return console.log(count_element);
}
// Task 3
function sumElement() {
  var summa_string = 0;
  for (var i=0; i < arguments.length; i++) {
    summa_string += arguments[i];
  }
  return console.log(summa_string);
}
// Task 4
$(document).ready(function(){
  jQuery('#input_test').on('keyup', function (e) {
    if (e.target.value === 'JavaScript') {
      jQuery('#input_check').prop('checked', true);
    }
    else {
      jQuery('#input_check').prop('checked', false);
    }
  });

  jQuery('form').on('submit', function (event) {
    var errors = [];
    var numbers = jQuery('[name="numbers"]').val();
    if (!valid(numbers, '0123456789')) {
      errors.push('Invalid numbers');
    }
    
    var letters = jQuery('[name="letters"]').val();
    if (!valid(letters, 'abcd')) {
      errors.push('Invalid letters');
    }
    
    if (!jQuery('[name="agreement"]').prop('checked')) {
      errors.push('Agreement is unchecked');
    }
    
    var types = jQuery('[name="type"]');
    var type = types.filter(function (i, type) {
      return type.checked;
    });
    if (type.length === 0) {
      errors.push('Type is unchecked');
    }
    
    if (errors.length > 0) {
      event.preventDefault();
      alert(errors.join("\n"));
    }
  });
  
  function valid(string, symbols) {
    if (string.length === 0) {
      return false;
    }
    
    for (var i = 0; i < string.length; i++) {
      if (symbols.indexOf(string.charAt(i)) === -1) {
        return false;
      }
    }
    
    return true;
  }
});
// Task 5
function logResult(getResult) {
  console.log(getResult(sum));
}
function sum(number) {
  return number + number;
}
function multiply(wrapper) {
  return wrapper(3) * wrapper(3);
}
