const formModals = () => {
    
    const forms = document.querySelectorAll("form");
    
    console.log(forms);
   

   
    // function req(e) {
    //     e.preventDefault();
    //     let formData = new FormData(formMain);
    //     const request = new XMLHttpRequest();
    //     request.open("POST", "./assets/server.php");
    //     request.send(formData);

    //     request.addEventListener('load', function() {
    //         if (request.status == 200) {
    //             console.log (request.response);
    //         }
    //     }
    // }
   
        // forms

        for (let i = 0; i < 9; i++) {

            forms[i].addEventListener("submit", (e) => {
                e.preventDefault();
             
                let formData = new FormData(forms[i]);
                const request = new XMLHttpRequest();
                request.open("POST", "./assets/server.php");
                request.send(formData);
            
                request.addEventListener('load', function() {
                    if (request.status == 200) {
                        console.log (request.response);
                    }
                })
                // console.log("11111");
                // console.log(i);

            })
        }

};

export default formModals;