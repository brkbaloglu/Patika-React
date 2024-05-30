import * as yup from 'yup'

const validations = yup.object().shape({
    email: yup.string().email("Geçerli bir email giriniz.").required("Email zorunlu bir alandır"),
    password: yup.string().min(5, "Parola en az 5 karakter olmalıdır.").required(),
    passwordConfirm: yup.string().oneOf([yup.ref("password")], "Parolalar eşleşmiyor").required()
})

export default validations