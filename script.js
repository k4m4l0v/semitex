const arrowUpList = document.querySelectorAll('.arrow-up');
const arrowDownList = document.querySelectorAll('.arrow-down');
const text = document.querySelectorAll('.faq__list_item_text');

for (let i = 0; i < arrowDownList.length; i++) {
  arrowDownList[i].addEventListener('click', () => {
    if (!arrowDownList[i].classList.contains('hidden')) {
      arrowDownList[i].classList.add('hidden');
      arrowUpList[i].classList.remove('hidden');
      text[i].classList.remove('hidden');
    }
  })

  arrowUpList[i].addEventListener('click', () => {
    if (!arrowUpList[i].classList.contains('hidden')) {
      arrowUpList[i].classList.add('hidden');
      arrowDownList[i].classList.remove('hidden');
      text[i].classList.add('hidden');
    }
  })
}
