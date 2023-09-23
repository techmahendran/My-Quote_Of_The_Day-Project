const quoteText = document.querySelector('.quote');
const quote_btn = document.querySelector('.quote_btn');
const author_name = document.querySelector('.author');
// btns
const speak = document.querySelector('.speak');
const copy_text = document.querySelector('.copy_text');
const twit_note = document.querySelector(".twit_note");

quote_btn.addEventListener('click', randamQuote)
speak.addEventListener('click', speakText)
copy_text.addEventListener('click', copyText)
twit_note.addEventListener("click", twitNote);

// randamQuote run on api
async function randamQuote() {
   quote_btn.innerHTML = 'Loading...'
   quote_btn.classList.add('loading')
   const res = await fetch('https://api.quotable.io/random');
   const result_1 = await res.json();
   quoteText.innerHTML = result_1.content;
   author_name.innerHTML = result_1.author;
   quote_btn.innerHTML = 'New Quote'
   quote_btn.classList.remove('loading')
}

function speakText() {
    // speak the quote text
    let sentence = new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${author_name.innerHTML}`)
    speechSynthesis.speak(sentence)
}

function copyText() {
    // copy the quote text
    navigator.clipboard.writeText(quoteText.innerHTML)
}

// opening twitter new tab for quoteText
function twitNote() {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`;
  window.open(tweetUrl, "_blank");
}
