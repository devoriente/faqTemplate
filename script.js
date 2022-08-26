//Je sélectionne et stocke TOUTES les questions
const questions = document.querySelectorAll('.question');
console.log(questions);

//Je soumets chaque élement du tableau à la même action
questions.forEach((item)=>{
    console.log('item');
    /*Chaque élément du tableau est représenté par item
    Maintenant chaque élément du tableau (item) est soumis à une action au clic*/
    item.addEventListener('click', function(){
        console.log('item cliqué');

    //Je sélectionne et stocke la DIV suivante de l'item cliqué
    const next = item.nextElementSibling;
    console.log(next);
    //Je rend visible ou invisible la réponse
    next.classList.toggle('visible');
    //Je cible et stocke l'icône de item
    icone = item.lastElementChild;
    console.log(icone);
    icone.classList.toggle('fa-chevron-up');
    });
});
