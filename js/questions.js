let questionForm = document.querySelector('.feedback')
let btnQuestions = document.querySelector('.feedback__submit')
let feedbackHeader = document.querySelector('#feedback__header')
let feedbackUserName = document.querySelector('.feedback__user-name')
let feedbackUserPhone= document.querySelector('.feedback__user-phone')
let feedbackUserMessage= document.querySelector('.feedback__text')
let feedbackInputs = questionForm.querySelectorAll('input')

function setDisabled (inputs, textarea, button) {
    inputs.forEach(input => {
        input.disabled = true
    });
    textarea.disabled = true
    button.style = 'display:none;'
}


btnQuestions.addEventListener('click',()=>{  
    if (feedbackUserName.value && feedbackUserPhone.value) {
    var datastring = $(".feedback").serialize();
    $.ajax({
      type: "POST",
      url: 'postaction',
      data: datastring,
      dataType: "json",
      success: function(data) {
        if (data.success) {
                questionResponse ('Ваше сообщение принято. Спасибо за обратную связь!')
                feedbackHeader.style = 'color:green;'
         } else {
            questionResponse ('Ошибка отправки сообщения. Просьба сообщить нам об этом на электронную почту')
                feedbackHeader.style = 'color:red;'
        }
      },
      error: function(data) {
        console.log('error handling here');
      }
    })
    };
  })


  function questionResponse (message){ 
    feedbackHeader.innerText = message
    setDisabled (feedbackInputs, feedbackUserMessage, btnQuestions)
}

