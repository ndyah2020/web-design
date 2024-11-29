function Validator(options) {
    const selectorRules = new Map();
    const showError = (errorMessage, inputElement) => {
        const errorElement = inputElement.parentElement.parentElement.querySelector(options.errorSelector);
        errorElement.innerText = errorMessage;
        inputElement.style.border = '1px solid red';
    }

    const clearError = (inputElement) => {
        const errorElement = inputElement.parentElement.parentElement.querySelector(options.errorSelector);
        errorElement.innerText = '';
        inputElement.style.border = 'none';
    }

    const validate = (inputElement, rule) => {
        const rules = selectorRules.get(rule.selector) || [];
        var errorMessage;

        for (var i = 0; i < rules.length; ++i) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }

        if (errorMessage) {
            showError(errorMessage, inputElement);
        } else {
            clearError(inputElement);
        }
        inputElement.addEventListener('input', () => clearError(inputElement));
        return !!errorMessage;
    };
    const formElement = document.querySelector(options.form)
    if (formElement) {

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            var isFormValid = false

            options.rules.forEach((rule) => {
                const inputEmlement = formElement.querySelector(rule.selector)
                var isValid = validate(inputEmlement, rule)

                if (isValid) {
                    isFormValid = true
                }
            })
            if (!isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    const enableInputs = formElement.querySelectorAll('[name]')
                    const ArrayFormValues = Array.from(enableInputs).reduce((object, valuesInput) => {
                        if(valuesInput.type === 'file'){
                            if (valuesInput.files.length > 0) {  
                                object[valuesInput.name] = valuesInput.files[0];
                                console.log(valuesInput.files[0])
                            }
                        }else{
                            object[valuesInput.name] = valuesInput.value
                        }
                        return object;
                    }, {})
                    options.onSubmit(ArrayFormValues)
                } else {
                    options.onSubmit()
                }
            }

        });


        options.rules.forEach((rule) => {
            if (!selectorRules.has(rule.selector)) {
                selectorRules.set(rule.selector, [])
            }
            selectorRules.get(rule.selector).push(rule.test)

            const inputEmlement = formElement.querySelector(rule.selector)

            if (inputEmlement) {
                inputEmlement.addEventListener('blur', () =>
                    validate(inputEmlement, rule)
                )
            }

        })

    }
}

Validator.isRequired = (selector, message) => ({
    selector: selector,
    test: (value) => value.trim() ? undefined : message || "Vui lòng nhập trường này"
})

//Kiểm tra định dạng email
Validator.isEmail = (selector, message) => ({
    selector: selector,
    test: (value) => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(value) ? undefined : message || "Trường này phải là email"
    }
})
//Kiểm tra password phải trên 6 ký tự
Validator.isPassword = (selector, min, message) => ({
    selector: selector,
    test: (value) => value.length >= min ? undefined : message || `Password phải ${min} chữ số trở lên`
})
//Kiểm tra password Comfime phải giống với password
Validator.isComfimer = (selector, getComfirmValue, message) => ({
    selector: selector,
    test: (value) => value === getComfirmValue() ? undefined : message || 'Giá trị nhập vào không trùng khớp'
})

// khôn có ksy tự đặc biệt hay sốg
Validator.noSpecialCharactersOrNumbers = (selector, message) => ({
    selector: selector,
    test: (value) => {
        const regex = /^[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]*$/i;
        return regex.test(value) ? undefined : message || "Trường này không được có ký tự đặc biệt hoặc số";
    }
});
