const input = document.querySelectorAll("[contenteditable='true']")[1];

function dispatch(input, message) {
  var evt = new InputEvent('input', {
    bubbles: true,
  });
  input.innerHTML = message;
  input.dispatchEvent(evt);
  document.querySelector('span[data-icon="send"]').click();
}

function kirimperKata(text) {
  text.split(' ').map((word) => dispatch(input, word));
}

function BoomSend(message, count) {
  let i = 0;
  while (i < count) {
    dispatch(input, message);
    i++;
  }
}

// contoh kirimperKata
// let text = 'aku sayang kamu'

// kirimperKata(text); // akan dikirim per kata

// contoh BoomSend
// BoomSend('i love you', 100) // kalimat ' i love you ' akan di kirim sebanyak 100 kali