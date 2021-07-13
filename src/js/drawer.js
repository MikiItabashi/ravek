jQuery('.drawer-icon').on('click', function(e) {
    e.preventDefault();
    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');
    jQuery('.drawer__background').toggleClass('is-active');

    return false;
})

jQuery('.drawer-content__item').on('click', function(e) {
    jQuery('.drawer-icon').trigger('click');
})