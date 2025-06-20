document.getElementById("generateBtn").addEventListener("click", function () {
  const key = generateKey(20);
  const keyBox = document.getElementById("keyBox");
  keyBox.textContent = key;
  keyBox.classList.remove("hidden");
});

function generateKey(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}