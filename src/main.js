
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');//aqui eu chamo o atributo no html dos acorddions

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(evento) {
            const abaAlvo = evento.currentTarget.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);

            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotãoAtivo();
            evento.target.classList.add('shows__tabs__button--is-active');
        });
    }

    for (let i = 0; i < questions.length; i++){//acordions
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
});

function abreOuFechaResposta (elemento){//acordons
    const classe ='faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;


    elementoPai.classList.toggle(classe)
}





function removeBotãoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}


function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
