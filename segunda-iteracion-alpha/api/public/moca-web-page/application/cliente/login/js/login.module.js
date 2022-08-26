const userIfAny = async (data = {}, campos = []) => {
    let userData = null;

    try {
        if (data.cedula.toString().trim().length < 9) {
            throw new Error('Cédula inválida');
        } else if (data.password.toString().trim() === '') {
            throw new Error('Contraseña inválida');
        }

        const request = await axios({
            method: 'POST',
            url: '/api/users/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data,
        });

        const result = request.data;
        const status = request.status;
        if (result.length && status === 200) {
            userData = result[0];
        } else {
            userData = null;
        }
    } catch (e) {
        userData = null;
        console.error(e);
    }

    return userData;
};

const storeUser = (data = {}) => {
    localStorage.setItem('user', JSON.stringify(data));
};


const showError = (inputs = []) => {
    const containers = document.querySelectorAll('.mvet-users-error');
    containers.forEach(container => container.innerHTML = '');
    inputs.forEach(input => {
        const error = document.querySelector(`#${input}-error`);
        error.innerText = ` - Los datos de este campo son incorrectos.`;
    });
    Swal.fire({
        title: 'Error',
        text: 'Por favor, revise los datos ingresados.',
        icon: 'error',
        confirmButtonText: 'Ok'
    });
};

const formValidateField = (element, type) => {
    // ? If element is a select, change type to 'select'.
    if (element.tagName.toLowerCase() === 'select') {
        type = element.tagName.toLowerCase();
    }

    switch (type) {
        case 'number':
            return true
                && element.value.trim() !== ''
                && !isNaN(element.value)
                ? parseInt(element.value)
                : false;
        case 'text':
            return true
                && element.value.trim() !== ''
                ? element.value
                : false;
        case 'email':
            return true
                && element.value.trim() !== ''
                && element.value.includes('@')
                ? element.value
                : false;

        case 'select':
            console.log(element);
            console.log(element.value);
            return true
                && element.value.trim() !== ''
                ? element.value
                : false;
        case 'checkbox':
            return true
                && element.checked
                ? true
                : false;
        case 'radio':
            return true
                && element.checked
                ? true
                : false;
        case 'date':
            return true
                && element.value.trim() !== ''
                ? element.value
                : false;
        case 'password':
            return true
                && element.value.trim() !== ''
                ? element.value
                : false;
        default:
            return false;
    }
};

const formReview = async (e) => {
    e.preventDefault();
    const form = document.querySelector('#mvet-users-form');
    const formData = new FormData(form);

    const errors = [];
    const data = Array.from(formData.entries())
        .reduce((memo, [key, value]) => {
            try {
                const element = document.querySelector(`[name="${key}"]`);
                console.table(key, value, element.id);
                const type = element.getAttribute('type');
                const valid = formValidateField(element, type);
                if (!valid) {
                    errors.push(key);
                }
                return {
                    ...memo,
                    [key]: valid,
                };
            } catch (error) {
                console.error(error);
                errors.push(key);
                return memo;
            }
        }, {});


    if (errors.length) {
        showError(errors);
        return;
    }

    const user = await userIfAny(data, ['cedula', 'password']);

    if (!user) {
        Swal.fire({
            title: 'Error',
            text: 'Usuario o contraseña incorrectos.',
            icon: 'error',
            confirmButtonText: 'Ok',
        })
            .then(() => {
                form.reset();
            }).catch(error => console.error(error));
        return;
    }

    Swal.fire({
        title: 'El usuario ha accedido al sistema',
        text: 'Presiona OK para continuar',
        icon: 'success',
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: true,
        showCancelButton: false,
    }).then(() => {
        storeUser(user);
        window.location.href = '/users/view';
    });
};

((e) => {
    console.clear();
    const form = document.querySelector('#mvet-users-form');
    form.addEventListener('submit', formReview);
})();