
.f_text{
    padding-top: 35px;
    padding-left: 15%;
    padding-right: 5%;
}

.zip-search__input-container {
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    min-width: 200px;
}


setInterval(() => {

    $('.stickyFooter')[0].children[0].children[1].style.display = 'none';
    $('.stickyFooter')[0].children[0].children[2].style.display = 'none';

    if($('.zipSearch').length==2){
    var cloned_zip = $('.zipSearch')[1].cloneNode('true');   
    cloned_zip.classList.add('footer_zip');

    var new_footer = document.createElement('div')
    new_footer.innerHTML = "<p class ='f_text' 'u-text-large'>Find Plans and Rates in Your Area </p>"
    new_footer.appendChild(cloned_zip)
    $('.stickyFooter')[0].children[0].appendChild(new_footer)
    

    $('.stickyFooter').find('.js-zip-search-submit').on("click", function() {
        //copy zip to main text field
        copy_zipcode = $('.stickyFooter').find('.zip-search__form')[0].children[0].children[0].value
        $('.zipSearch').find('.zip-search__form')[1].children[0].children[0].value = copy_zipcode
        //main button
        $('.zipSearch').find('.zip-search__form')[1].children[1].click()
    });
}
}, 200);