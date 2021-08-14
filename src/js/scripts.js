/* eslint-disable no-invalid-this */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const products = document.querySelector('.products');
const submit = document.querySelector('.btn__submit');
const deleteBtn = document.querySelectorAll('.delete');
const input = document.querySelector('.ad-form__input');

// добавление карточки товара
function addProduct() {
    submit.onclick = function() {
        const name = document.querySelector('.ad-form__input--name');
        const description = document.querySelector('.ad-form__input--description');
        const link = document.querySelector('.ad-form__input--link');
        const price = document.querySelector('.ad-form__input--price');

        const balloonTemplate = document.querySelector('#product').content.querySelector('#product-content');
        const productlement = balloonTemplate.cloneNode(true);

        productlement.querySelector('.product__img').src = link.value;
        productlement.querySelector('.product__heading').textContent = name.value;
        productlement.querySelector('.product__description').textContent = description.value;
        productlement.querySelector('.product__price-value').textContent = price.value;

        products.append(productlement);

        name.value = '';
        description.value = '';
        link.value = '';
        price.value = '';
    };
}

addProduct();

// удаление карточки товара
function delNode(el) {
    el.parentNode.remove();
}

// select
const select = function() {
    const selectHeader = document.querySelectorAll('.select__header');
    const selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach((item) => {
        item.addEventListener('click', selectToggle);
    });

    selectItem.forEach((item) => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        // eslint-disable-next-line no-invalid-this
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        const text = this.innerHTML;
        const select = this.closest('.select');
        const currentText = select.querySelector('.select__current');
        currentText.innerHTML = text;
        select.classList.remove('is-active');
    }
};
select();
