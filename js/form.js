$(document).ready(function() {
// Прелоадр

$(window).on('load', function () {
    $('#preloader-active').delay(450).fadeOut('slow');
    $('body').delay(450).css({
      'overflow': 'visible'
    });
  });


//Валидация формы
    $('.header__call-order').on('click', () => {
        $('#modal').addClass('active');
        $('body').addClass('active');
    })
    
    const closeModal = () => {
        $('body').removeClass('active');
        $('#modal').removeClass('active');
    }

    $('#modal__overlay').on('click', () => {
        closeModal();
    })

    $('#modal__close').on('click', () => {
        closeModal();
    })



    $('[data-submit]').on('click', function(e) {
        e.preventDefault();
        $(this).parent('form').submit();
    })

    $.validator.addMethod("regex", function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        }, "Проверьте введенные данные."
    );

    function valEl(el) {
        el.validate({
            rules: {
                tel: {
                    required: true,
                    digits : true,
                    minlength: 10,
                    maxlength: 11,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                },
                name: {
                    required: true,
                    regex : "[A-Za-zА-Яа-я]{1,32}" 
                },
                email: {
                    required: true,
                    email: true
                },
                country: {
                    required: true
                },
                city: {
                    required: true
                },
                street: {
                    required: true
                },
                'number-house': {
                    required: true
                }
            },
            messages: {
                tel: {
                    required: 'Поле обязательное для заполнения',
                    regex: 'Телефон может содержать символы + - ()',
                    minlength: 'Введите не менее 10 символов.',
                    maxlength: 'Введите не более символов.',
                    digits: 'Введите только цифры',
                },
                name: {
                    required: 'Поле обязательное для заполнения',
                    regex: 'Введите только прописные символы',
                },
                email: {
                    required: 'Поле обязательное для заполнения',
                    email: 'Неверный формат E-mail'
                },
                country: {
                    required: 'Поле обязательное для заполнения',
                },
                city: {
                    required: 'Поле обязательное для заполнения',
                },
                street: {
                    required: 'Поле обязательное для заполнения',
                },
                'number-house': {
                    required: 'Поле обязательное для заполнения',
                }

            },
            submitHandler: function(form) {
                let $form = $(form);
                let $formId = $(form).attr('id');
                switch ($formId) {
                    case 'form-modal':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                $form.trigger('reset');
                                $('#modal__wrapper-form').css('display', 'none');
                                $('#message-for-user').css('display', 'block');
                                $('.button-close-messange').on('click', function(e) {
                                    e.preventDefault();
                                    $('#modal').css('display', 'none');
                                    closeModal();
                                })
                            });
                        break;
                    case 'form__cart':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                window.location.href = 'checkout.html'
                                
                            });
                        break;
                    case 'checkout__form':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                $form.trigger('reset');
                                window.location.href = 'checkout.html'
                                
                            });
                        break;
                    case 'form-modal-contacts':
                            $.ajax({
                                    type: 'POST',
                                    url: $form.attr('action'),
                                    data: $form.serialize(),
                                })
                                .done(function() {
                                    console.log('Success');
                                })
                                .fail(function() {
                                    console.log('Fail');
                                })
                                .always(function() {
                                    console.log('Always');
                                    $form.trigger('reset');
                                    $('.contacts__form-answer').addClass('active');
                                });
                                setTimeout(function () {
                                    $('.contacts__form-answer').removeClass('active');
                                }, 2000);
                            break;
                }
                return false;
            } 
        })
    }
    $('.js-form').each(function() {
        valEl($(this));
    });
})

const btnOpenModal = document.querySelector('.header__call-order');
const overlayModal = document.getElementById('modal__overlay');
const modalClose = document.getElementById('modal__close');

const body = document.querySelector('body');
const modal = document.getElementById('modal');

btnOpenModal.addEventListener('click', () => {
    modal.classList.add('active');
    body.classList.add('active');
})

function closeModal () {
    body.classList.remove('active');
    modal.classList.remove('active');
}

overlayModal.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);

