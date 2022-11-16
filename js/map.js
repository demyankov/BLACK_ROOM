let mapQuestsBtnWrapper = document.querySelector('#map__quests-btn-collection')
let mapQuestsBtnCollection= document.querySelectorAll('.map__quests-btn')
let mapCollection = document.querySelectorAll('.map-item')

mapQuestsBtnCollection[0].classList.add('map-btn-active')

mapQuestsBtnWrapper.addEventListener('click',  (e)=> {
    element = e.target
    btnId = element.getAttribute('data-btn-map-id')

    if (element.tagName === 'LI'){
        mapQuestsBtnCollection.forEach((btn)=>{
           btn.classList.remove('map-btn-active')
        })

        element.classList.add('map-btn-active')
        
        mapCollection.forEach((el)=>{   
            el.getAttribute('data-map-id') === btnId 
            ? el.classList.add('map-active')
            : el.classList.remove('map-active')
        })
    }
})