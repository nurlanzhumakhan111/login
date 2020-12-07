import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import UI from './config/ui.config'
import Reg from './config/reg.config';
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
    reg
} from './services/reg.service';
import {
    notify
} from './views/notifications'
import {
    getNews
} from './services/news.service'
import {
    showTabs
} from './views/tab'
import User from './config/reg.user';
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
const regInputs = [regForm, regEmail, regPassword, regNickname, regFirstName, regLastName, regPhone, regGender, regCountry, regCity, regDate]
// Events
form.addEventListener('submit', e => {
    e.preventDefault();
    onSubmit();
});
regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    onReg();
})
showTabs()
inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)))
// regInputs.forEach(item => item.addEventListener('focus', () => {
//     if(typeof(item) !== 'object') return
//     removeInputError(item)
// }))


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

async function onReg() {
    // const isValidForm = regInputs.every(el => {
    //     const isValidInput = validate(el);
    //     if (!isValidInput) {
    //         showInputError(el)
    //     }
    //     return isValidInput;
    // })
    // if (!isValidForm) return;
    let regRadio;
    regGender.forEach(item => {
        if (item.checked) {
            regRadio = item.value;
        }
    });
    let [year, month, day] = regDate.value.split('-');
    const user = new User(
        regEmail.value,
        regPassword.value,
        regNickname.value,
        regFirstName.value,
        regLastName.value,
        regPhone.value,
        regRadio,
        regCity.value,
        regCountry.value,
        day,
        month,
        year
    )
    try {
        await reg(user);
        notify({
            msg: 'Registration success',
            className: 'alert-success'
        })
        form.reset();
    } catch (err) {
        console.log(err);
        notify({
            msg: 'Registration fail',
            className: 'alert-danger'
        })
    }
    console.log(user);
}