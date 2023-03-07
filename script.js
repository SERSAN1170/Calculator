const screen = document.querySelector('.calc__screen'),
      calcBtn = Array.from(document.querySelectorAll('.symbols'))

      calcBtn.map((btn)=>{
        btn.addEventListener('click',function (e) {
            let ans = e.target.innerHTML
            if (ans === 'AC') screen.innerHTML = ''
            else if (ans === 'CE') screen.innerHTML = screen.innerHTML.slice(0,-1)
            else if (ans === '+/-') screen.innerHTML = parseFloat(screen.innerHTML) * -1
            else if (ans === '=') screen.innerHTML = eval(screen.innerHTML)
            else screen.innerHTML.length >= 18
                ? screen.innerHTML = screen.innerHTML
                :screen.innerHTML += ans
        })
      })