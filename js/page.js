let form = document.querySelector('form');
const defaultValue = 'no submission';

form.addEventListener('submit', handleSubmit);
form.addEventListener('reset', handleReset);

function handleReset(event) {
  let oldThanks = document.querySelector('#thanks');
  if (oldThanks != null) {
    form.removeChild(oldThanks);
  }
}

function handleSubmit(event) {
  const username = form.elements.name;
  const usernameValue =
    username.value.length > 0 ? username.value : defaultValue;

  const email = form.elements.email;
  const emailValue = email.value.length > 0 ? email.value : defaultValue;

  const message = form.elements.message;
  const messageValue = message.value.length > 0 ? message.value : defaultValue;

  if (
    usernameValue === defaultValue ||
    emailValue === defaultValue ||
    messageValue === defaultValue
  ) {
    console.warn('You must fill all fields to submit this form');
    event.preventDefault();
  } else {
    console.group('================ Form Submission ==================');
    console.log('Name: ' + usernameValue);
    console.log('Email: ' + emailValue);
    console.log('Message: ' + messageValue);
    console.groupEnd();

    let oldThanks = document.querySelector('#thanks');
    if (oldThanks != null) {
      return;
    }
    let thanks = document.createElement('aside');
    thanks.textContent = 'Thank You For Reaching Out!';
    thanks.id = 'thanks';
    thanks.style.paddingTop = '15px';
    thanks.style.paddingBottom = '0px';
    thanks.style.fontWeight = 'bold';
    thanks.className = 'brand';
    form.append(thanks);
  }

  event.preventDefault();
}
