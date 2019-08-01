document.getElementById('input_bank').oninput = function () {
  setTimeout(function() {
    replace(document.getElementById('input_bank').value);
  }, 1300);
};

document.getElementById('input_bank').onfocus = function () {
  console.log('Focus');
};

document.getElementById('input_bank').onblur = function () {
  console.log('Blur');
};

// document.getElementById('input').onclick = function () {
//   setTimeout(function() {
//     replace();
//   }, 1300);
// };

function replace(value) {
  var el1 = document.getElementById('list');

  var el2 =
    '<div id="list">'+
      '<input data-not-rererender="true" id="input_bank" type="text"/>'+
      '<p id=2>2</p>'+
      '<p id=3>3</p>'+
      '<p id=4>4</p>'+
      '<p id=1>1</p>'+
      '<p id=9>'+value+'</p>'+
    '</div>';

  morphdom(el1, el2, {
    getNodeKey: function(node) {
      if (node.type === 'text') {
        // console.log(node, node.id);
      }
      return node.id;
    },
    onBeforeElUpdated: function(fromEl, toEl) {
      // вариант 1, проверять аттрибут чтобы заново не перендерить input, button и т.д.
      // if (fromEl.getAttribute('data-not-rererender') === 'true') {
      //   console.log(fromEl.isEqualNode(toEl));
      //   return false;
      // }
      // if (fromEl.type === 'text' && toEl.type === 'text') {
      //   console.log('onBeforeElChildrenUpdated=', fromEl, toEl);
      //   return false;
      // }
      // вариант 2, if equal node
      return !fromEl.isEqualNode(toEl);
    },
  });

  console.log('REPLACE');
}
