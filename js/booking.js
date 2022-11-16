let bookingWrapper = document.querySelector(".booking");
let bookingCardwrapper = document.querySelector(".booking-card-wrapper");
let bookingCloseCard = document.querySelector("#booking-card__close");
let bookingCancelCard = document.querySelector("#booking-close_btn");
let btnPrevious = document.querySelector("#btn_previous");
let btnNext = document.querySelector("#btn_next");
let bookingSchedule = document.querySelector("#booking-form");
let bookingDay = bookingSchedule.querySelectorAll(".booking__day");
let bookingTimes = bookingSchedule.querySelectorAll(".booking__times");
let countBookingDay = bookingDay.length;
let lastOpenBookingDay = countBookingDay;
let firstOpenBookingDay = 0;
let bookingCard = document.querySelector(".booking-card");
let btnBooked = bookingCard.querySelector("#booking-submit_btn");
let inputConfidece = bookingCard.querySelector("#booking-card__confidence");
let inputName = bookingCard.querySelector("#name");
let inputEmail = bookingCard.querySelector("#email");
let inputPhone = bookingCard.querySelector("#phone");
let tariffsSelect = bookingCard.querySelector('#players')
let areaComment = bookingCard.querySelector("#comment");
let inputSale = bookingCard.querySelector("#booking-card__input-sale");
let slotInput = document.querySelector('[name="id_quest"]');
let dateQuest = document.querySelector('[name="date_quest"]');
let timeQuest = document.querySelector('[name="time_quest"]');
let priceQuest = document.querySelector('[name="price_quest"]');
let tariffsCookie = JSON.stringify({"1":[{"2 человека - 80 руб.":80},{"3 человека - 110 руб.":110},{"4 человека - 120 руб.":120},{"5 человек - 125 руб.":125}],"2":[{"2 человека - 160 руб.":160},{"3 человека - 160 руб.":160},{"4 человека - 160 руб.":160}]});
// let tariffsCookie = JSON.stringify(tariffJSON);
let tariffs = JSON.parse(tariffsCookie);


// чтение данных из cookie
function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


// присваиваем data-id
function writeDataId (){
  bookingDay.forEach((el, i)=>{
    el.setAttribute('data-id',i+1)
  })

  bookingTimes.forEach((el, i)=>{
    el.setAttribute('data-id',i+1)
  })
}

writeDataId ()

function createOption(select, tafiffName,summ) {
  let option = document.createElement('option')
  option.innerText = tafiffName
  option.value = summ
  select.append(option)
}

function clearBookingForm (){
  costGame.innerHTML='---'
  inputName.value=''
  inputEmail.value=''
  inputPhone.value=''
  tariffsSelect.innerHTML = ''
  areaComment.value=''
  inputConfidece.checked = false
  inputSale.checked = false
}

// РАБОТА С ФОРМОЙ БРОНИРОВАНИЯ
bookingWrapper.addEventListener("click", (e) => {

  let el = e.target.closest(".booking__times-item");
  // открытие формы бронирования
  if (el && !el.className.includes("booked") && !el.className.includes("closed")) {
    bookingCardwrapper.classList.toggle("booking-active");
    html.style.overflow = "hidden";
    clearBookingForm ()
    // заполнене формы бронирования
    let gameDate = bookingCardwrapper.querySelector('#game-date')

    //запонение даты и времени игры в карточке бронирования
    let dateValue = el.getAttribute('data-time')
    dateValue ? gameDate.innerText = dateValue : gameDate.innerText = 'Дата игры не установлена'

    // заполнение скрытых input
    let slotId = el.getAttribute('data-quest')
    slotInput.value = slotId;
    let dateQuestAttr = el.getAttribute('quest-date')
    dateQuest.value = dateQuestAttr;
    let timeQuestAttr = el.getAttribute('quest-time')
    timeQuest.value = timeQuestAttr;

    //заполнение количества игроков и тарифов
    let currentTariffId = el.getAttribute('data-tariff_id')
    createOption(tariffsSelect, 'Не выбрано', '')


    for (let tariff of Object.keys(tariffs)) {
      if (tariff === currentTariffId){
        tariffs[tariff].forEach((el)=>{
          for(let tariffOption of Object.keys(el)) {
            createOption(tariffsSelect, tariffOption, el[tariffOption])
          }
        })
      }
    }

  } else {
    html.style.overflow = "auto";
  }
});

bookingCloseCard.addEventListener("click", () => {
  html.style.overflow = "auto";
  bookingCardwrapper.classList.remove("booking-active");

});

bookingCancelCard.addEventListener("click", () => {
  html.style.overflow = "auto";
  bookingCardwrapper.classList.remove("booking-active");
});


// заполнение (изменение) стоимости игры в шапке формы бронирования
let costGame = document.querySelector("#cost-game");
let modeSelect = document.querySelector(".mode-select");

modeSelect.addEventListener("change", () => {
  costGame.innerText = modeSelect.value;
  priceQuest.value = modeSelect.options[modeSelect.selectedIndex].innerText;
});

// РАБОТА С ОТОБРАЖЕНИЕМ РАСПИСАНИЯ
if (bookingDay.length > 7) {
  for (let i = 7; i < bookingDay.length; i++) {
    bookingDisplayNone(i);
  }
  lastOpenBookingDay = 6;
}

btnNext.addEventListener("click", () => {
  if (bookingDay.length > 7 && lastOpenBookingDay !== countBookingDay - 1) {
    for (let i = 0; i <= lastOpenBookingDay; i++) {
      bookingDisplayNone(i);
    }

    let startOpen = lastOpenBookingDay + 1;
    let endOpen = lastOpenBookingDay + 8;

    for (let i = startOpen; i < endOpen; i++) {
      if (i < countBookingDay) {
        firstOpenBookingDay++;
        lastOpenBookingDay++;
        bookingDisplayFlex(i);
      }
    }
  }
});

btnPrevious.addEventListener("click", () => {
  if (lastOpenBookingDay >= 7) {
    for (let i = firstOpenBookingDay; i <= lastOpenBookingDay; i++) {
      bookingDisplayNone(i);
    }

    let startOpen = firstOpenBookingDay - 7;
    let endOpen = lastOpenBookingDay - 7;

    console.log(startOpen);
    console.log(endOpen);
    if (startOpen >= 0) {
      for (let i = startOpen; i <= endOpen; i++) {
        firstOpenBookingDay--;
        lastOpenBookingDay--;
        bookingDisplayFlex(i);
      }
    }

    if (startOpen < 0) {
      firstOpenBookingDay = 0;
      lastOpenBookingDay = 6;

      for (let i = 0; i <= 6; i++) {
        bookingDisplayFlex(i);
      }
    }
  }
});

function bookingDisplayNone(i) {
  bookingDay[i].style.display = "none";
  bookingTimes[i].style.display = "none";
}

function bookingDisplayFlex(i) {
  bookingDay[i].style.display = "flex";
  bookingTimes[i].style.display = "flex";
}

//ЗАБРОНИРОВАТЬ
inputConfidece.addEventListener("input", () => {
  activateBtnSubmit();
});

inputPhone.addEventListener("input", () => {
  activateBtnSubmit();
});

tariffsSelect.addEventListener("input", () => {
  activateBtnSubmit();
});

function activateBtnSubmit() {  
  if (inputConfidece.checked && inputPhone.value && tariffsSelect.value) {
    btnBooked.classList.remove("submit_btn");
    btnBooked.classList.add("submit_btn-active");
    btnBooked.disabled = false;
  } else {
    btnBooked.classList.add("submit_btn");
    btnBooked.classList.remove("submit_btn-active");
    btnBooked.disabled = true;
  }
}

function bookedResponse (message){
  let dataForBooking = bookingCard.querySelector('#data_for_booking')
  dataForBooking.innerHTML = ''
  let p = document.createElement('p')
  p.innerText = message
  dataForBooking.append(p)
  bookingCloseCard.addEventListener("click", () => {
    location.reload();
  });
}

btnBooked.addEventListener('click',(event)=>{
  let questId = bookingCard.querySelector('#quest_id');
  var bookUrl = "api/my/quests/"+questId.value+"/order";
  var datastring = $("#data_for_booking").serialize();
  $.ajax({
    type: "POST",
    url: bookUrl,
    data: datastring,
    dataType: "json",
    success: function(data) {
      if (data.success) {
        bookedResponse ('Ваша заявка принята. С Вами свяжется администратор для подтверждения бронирования. Спасибо!')
      } else {
        bookedResponse ('Упс. Ваше время уже забронировали. Пожалуйста, выберите другое время.')
      }
    },
    error: function(data) {
      console.log('error handling here');
    }
  });
})


