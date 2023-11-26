const Input = document.getElementById('inpText')
const DefaultText = document.getElementById('default')
const DebounceText = document.getElementById('debounce')
const ThrottleText = document.getElementById('throttle')

const updateDebounceText = debounce(text => {
    DebounceText.innerText = text
})

const updateThrottleText = throttle(text => {
    ThrottleText.innerText = text
})

Input.addEventListener("input", (e)=>{
    DefaultText.innerText = e.target.value
    updateDebounceText(e.target.value)
    updateThrottleText(e.target.value)
})

function debounce(cb, delay = 1000){
    let timeout;

    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            cb(...args)
        }, delay)
    }
}

function throttle(cb, delay = 1000){
    let shouldWait = false

    return (...args) => {
        if(shouldWait) return

        cb(...args)
        shouldWait = true

        setTimeout(()=>{
            shouldWait = false
        }, delay)

    }
}