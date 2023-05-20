const correactAnswers = ['E','E','E','E'];
const form = document.querySelector('.question-form')
const result =document.querySelector('.result');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const userAnswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
    ];

    let score = 0;
    userAnswers.forEach((answers,index)=>{
        if(answers === correactAnswers[index]){
            score +=25;
        }
    })
    result.classList.remove('d-none')
    result.querySelector('#percentage').textContent = `${score}%`
})