const tabs = () => {

    const glazingSlider = document.querySelector('.glazing_slider'),
        glazingBlock = document.querySelectorAll('.glazing_block'),
        glazingContent = document.querySelectorAll('.row.glazing_content'),
        decorationItem = document.querySelectorAll('.decoration_item'),
        decorationContent = document.querySelectorAll('.decoration_content .row');

    function hideGlazingContent(a) {
        for (let i = a; i < glazingContent.length; i++) {
            glazingContent[i].classList.remove('show');
            glazingContent[i].classList.add('hide');
        }
    };

    hideGlazingContent(1);

    function showGlazingContent(b) {
        if (glazingContent[b].classList.contains('hide')) {
            glazingContent[b].classList.remove('hide');
            glazingContent[b].classList.add('show');
        }
    };

    function hideDecorationContent(a) {
        for (let i = a; i < glazingContent.length; i++) {
            decorationContent[i].classList.remove('show');
            decorationContent[i].classList.add('hide');
        }
    };

    function showDecorationContent(b) {
        if (decorationContent[b].classList.contains('hide')) {
            decorationContent[b].classList.remove('hide');
            decorationContent[b].classList.add('show');
        }
    };

    
    glazingSlider.addEventListener('click', function(e){ //получаем массив из 5-ти узлов glazing_block
               
            let target = e.target;

            if (target) {
                e.preventDefault();
               // console.log(e.target);
            }

                for (let i = 0; i < glazingBlock.length; i++) {

                    if ((target == glazingBlock[i].children[0]) || (target == glazingBlock[i].children[1]) ||  (target == glazingBlock[i]))  {
                           
                        hideGlazingContent(0);
                        showGlazingContent(i);

                        //подключение класса active
                        let j,
                            glazingActive = document.querySelectorAll('.glazing_block a');
                            

                        if (i != j) {
                            for(j = 0; j < glazingBlock.length; j++) {
                                glazingActive[j].classList.remove('active');
                            } 
                            glazingActive[i].classList.add('active');
                        }

                    break;
                          
                    }
                       
                } //end for
               
    }); //end Listener

    //табы отделки

    for (let i = 0; i < decorationItem.length; i++) {

        decorationItem[i].addEventListener('click', function(e) {
            let target = e.target;
                        
            if (target) {
                e.preventDefault();
            };

            decorationContent[0].children[0].classList.add('hide');

            //подключение класса after_click
            let j;

            if (i != j) {

                for(j = 0; j < decorationItem.length; j++) {
                    decorationItem[j].children[0].classList.remove('after_click');
                    decorationContent[0].children[j].classList.remove('show');
                } 
                
                decorationItem[i].children[0].classList.add('after_click');
                decorationContent[0].children[i].classList.add('show');
            }

        });

    } //end for
 
}

export default tabs;