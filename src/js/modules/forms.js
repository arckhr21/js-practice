import checkNumInputs from './checkNumInputs';

const formModals = (state) => {
    
    const forms = document.querySelectorAll("form"),
          inputs = document.querySelectorAll("input"),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    //Обеспечение ввода только цифр
   
    checkNumInputs('input[name = "user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся.',
        failure: 'Что-то пошло не так...'
    };

    const postData = async(url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === "end"){
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            } 

            postData('assets/server.php', formData)
            .then(res => {
                console.log(res),
                statusMessage.textContent = message.success;
            })
            .catch(() => statusMessage.textContent = message.failure)
            .finally(() => {
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                }, 5000);
            })
        })
    })
    
    // forms XHR

//         for (let i = 0; i < forms.length; i++) {

//             forms[i].addEventListener("submit", (e) => {
//                 e.preventDefault();
             
//                 let formData = new FormData(forms[i]);
//                 const request = new XMLHttpRequest();
//                 request.open("POST", "./assets/server.php");
//                 request.send(formData);
            
//                 request.addEventListener('load', function() {
//                     if (request.status == 200) {
//                         console.log (request.response);
//                     }
//                 })
               
//             })
//         }

};

export default formModals;