const btn = document.querySelector('.j-btn-request');
const resultNode = document.querySelector('.j-result');

btn.addEventListener('click', () => {
   const input1 = document.getElementById('input_1').value;
   const input2 = document.getElementById('input_2').value;

   let per = document.getElementById('j-result');
   per.textContent = '';
   if (!(input1 >= 1 && input1 <= 10)) {
      per.textContent = 'Номер страницы вне диапазона от 1 до 10';
      return;
   }
   else if (!(input2 >= 1 && input1 <= 10)) {
      per.textContent = 'Лимит вне диапазона от 1 до 10';
      return;
   }
   else if (!(input1 >= 1 && input1 <= 10 && input2 >= 1 && input2 <= 10)) {
      per.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
      return;
   } else {
      fetch(`https://picsum.photos/v2/list?page=${inputFisrt}&limit=${inputSecond}`)
         .then((response) => {
            return response.json()
         })
         .then(data => {
            let resultBlock = "";
            data.forEach((item) => {
               let img = `<div class="card"> <img class="card-image" src="${item.download_url}" alt=""> <p>${item.author}</p> </div>`;
               resultBlock += img;
            })
            per.innerHTML = resultBlock
         })
   }
});