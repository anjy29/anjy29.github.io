// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';
showHideBtn.setAttribute('aria-expanded', 'false');

showHideBtn.addEventListener('click', toggleComments);

showHideBtn.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleComments();
  }
});
  function toggleComments() {
  let showHideText = showHideBtn.textContent;

  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    showHideBtn.setAttribute('aria-expanded', 'true');
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
     showHideBtn.setAttribute('aria-expanded', 'false');
    commentWrapper.style.display = 'none';
  }
}

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  submitComment();
});

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}
