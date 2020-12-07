import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import UI from './config/ui.config'
import Reg from './config/reg.config';
console.log(Reg);
import {
    validate
} from './helpers/validate'
import {
    showInputError
} from './views/form'
import {
    removeInputError
} from './views/form'
import {
    login
} from './services/auth.service';
import {
    notify
} from './views/notifications'
import {
    getNews
} from './services/news.service'
import {
    showTabs
} from './views/tab'
const {
    form,
    inputEmail,
    inputPassword
} = UI;
const {
    regForm,
    regEmail,
    regPassword,
    regNickname,
    regFirstName,
    regLastName,
    regPhone,
    regGender,
    regCountry,
    regCity,
    regDate

} = Reg
const inputs = [inputEmail, inputPassword];

// Events
form.addEventListener('submit', e => {
    e.preventDefault();
    onSubmit();
});
regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(
        JSON.stringify({
            regEmail,
            regPassword,
            regNickname,
            regFirstName,
            regLastName,
            regPhone,
            regGender,
            regCountry,
            regCity
        })
    );

    let regRadio;
    regGender.forEach(item => {
        if (item.checked) {
            regRadio = item.value;
        }
    });
    console.log(regRadio);
})
showTabs()
inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)))


// Handlers
async function onSubmit() {
    const isValidForm = inputs.every((el) => {
        const isValidInput = validate(el);
        if (!isValidInput) {
            showInputError(el)
        }
        return isValidInput;
    })

    if (!isValidForm) return;

    try {
        await login(inputEmail.value, inputPassword.value)
        await getNews();
        form.reset();
        notify({
            msg: 'Login success',
            className: 'alert-success'
        })

    } catch (err) {
        notify({
            msg: 'Login fail',
            className: 'alert-danger'
        })
    }
}