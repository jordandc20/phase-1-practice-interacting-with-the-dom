document.addEventListener('DOMContentLoaded', () => {
    timer();
    comment();
})
function timer() {

    const timerDisp = document.querySelector('#counter')
    const likeDisp = document.querySelector('ul.likes')

    const less = document.querySelector('#minus')
    less.addEventListener('click', decreaseTime)

    const more = document.querySelector('#plus')
    more.addEventListener('click', increaseTime)

    const pause = document.querySelector('#pause')
    pause.addEventListener('click', pauseTime)

    const like = document.querySelector('#heart')
    like.addEventListener('click', likeEvent)

    let i = 0;

     

    let init = setInterval(() => {
        increaseTime()
    }, 1000)

    function increaseTime() {
        i++
        timerDisp.textContent = i
    }

    function decreaseTime() {
        i--
        timerDisp.textContent = i
    }

    function likeEvent() {

        let li = document.createElement('li')
        let liCnt = document.createElement('span')
        const currLikes = likeDisp.querySelector(`li[data-num="${i}"`)

        if (currLikes === null) {

            li.dataset.num = i
            liCnt.innerText = 1
            li.append(`${i} has been liked `, liCnt, ' time')
            likeDisp.appendChild(li)
        } else {

            liCnt.innerText = parseInt(currLikes.querySelector('span').innerText) + 1
            currLikes.innerText = ''
            currLikes.append(`${i} has been liked `, liCnt, ' times')
        }
    }

    function pauseTime() {
        if (pause.textContent === ' pause ') {
            pause.textContent = ' resume '
            clearInterval(init)
            less.disabled = true
            more.disabled = true
            like.disabled = true

        } else {
            pause.textContent = ' pause '
            less.disabled = false
            more.disabled = false
            like.disabled = false
        
            

             init = setInterval(() => {
                increaseTime()
            }, 1000)

        }
    }

}

function comment() {
    const form = document.querySelector('#comment-form')
    form.addEventListener('submit', handleSubmit)

    function handleSubmit(e) {
        e.preventDefault()
        const commDiv = document.querySelector('#list')

        const p = document.createElement('p')
        p.innerText = e.target.querySelector('#comment-input').value
        commDiv.appendChild(p)

        form.reset()
    }


}