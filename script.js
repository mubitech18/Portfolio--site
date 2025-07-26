
function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  alert(`Thanks, ${name}! Your message has been received.`);
}
