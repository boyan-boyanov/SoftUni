function loadRepos() {
   let result = document.getElementById('res')

   let url = 'https://api.github.com/users/testnakov/repos'

   let request = new XMLHttpRequest();
   request.addEventListener('readystatechange', resolv);

   function resolv() {
      if (request.readyState === 4 && request.status === 200) {
         result.textContent = request.responseText
      }
   }
   request.open("GET", url);
   request.send();
}