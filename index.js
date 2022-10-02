const darkModeArea = document.getElementById("container")
const colorInput = document.getElementById("color")
const mobile = document.getElementById("mobile")
const enjoy = document.getElementById("enjoy")
const SliderOutput = document.getElementById("sliderValue")
const numColorInput = document.getElementById("numColor")
const modeInput = document.getElementById("mode")
const colorSchemeBtn = document.getElementById("colorScheme-btn") 
const darkModeBtn = document.getElementById("darkMode-btn")
const colorOutput = document.getElementById("colorOutput")


let darkMode = false
let baseUrl = "https://www.thecolorapi.com/scheme"
  
  colorSchemeBtn.addEventListener("click", function(){
    
    let hexString = colorInput.value
    hexString = hexString.substring(1)
  
  
    fetch(`${baseUrl}?hex=${hexString}&mode=${modeInput.value}&count=${numColorInput.value}`)
    .then(resp => resp.json())
    .then(data => {
        
          let HTML = ""
          
          for (let color of data.colors) {
            
            HTML += `
            
            <div id="eachColorOutput">
                <div id="color-container" style="background-color: ${color.hex.value}">&nbsp</div>
                <div id="hex-container" style="color: red">${color.hex.value}</div>
            </div>
            `
           
          }
          
          colorOutput.innerHTML=HTML
          
         })

  })
  
  
darkModeBtn.addEventListener("click", function(){
    
    darkModeArea.classList.add("dark")
    
    if (darkMode === false) {
        darkModeArea.classList.add("dark")
        darkModeBtn.innerText = "Light Mode"
        
        SliderOutput.classList.add("invert")
        mobile.classList.add("invert")
        enjoy.classList.add("invert")
        
        darkMode = true
        
    } else if (darkMode === true) {
        darkModeArea.classList.remove("dark")
        darkModeBtn.innerText = "Dark Mode"
        
        SliderOutput.classList.remove("invert")
        mobile.classList.remove("invert")
        enjoy.classList.remove("invert")
        
        darkMode = false
    }
  
})

numColorInput.addEventListener("input", function(){
    SliderOutput.innerText=numColorInput.value
})
