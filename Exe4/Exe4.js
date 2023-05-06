const btn = document.querySelector('.j-btn-request');

btn.addEventListener('click', () => {
   const input1 = document.getElementById('input_1').value;
   const input2 = document.getElementById('input_2').value;

   let per = document.getElementById('j-result');
   per.textContent = '';
   if (!(input1 >= 100 && input1 <= 300 && input2 >= 100 && input2 <= 300)) {
      per.textContent = 'одно из чисел вне диапазона от 100 до 300';
      return;
   }
   fetch(`https://picsum.photos/${input1}/${input2}`)
      .then((response) => {
         document.getElementById('result').src = response.url;
      });

});