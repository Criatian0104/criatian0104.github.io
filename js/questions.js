(Function)
    
const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)
     titleQuestions.forEach(question =>{
        let height = 0;
        let answer =questions.nextElementSibling;
        let addPdding =questions.parent.Element;

        addPadding.classlist.toggle('questions__padding--add')

        question.children[0].classlist.toggle('questions__arrow--rotate');

        if(answer.clienteHeight === 0 ){
            height= answer.scrollHeight;
            }


            answer.style.height = ${height}px;
            });
         

