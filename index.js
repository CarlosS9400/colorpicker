
const darkModeArea = document.getElementById("container")
const colorInput = document.getElementById("color")
const SliderOutput = document.getElementById("sliderValue")
const sliderInput = document.getElementById("numColor")
const modeInput = document.getElementById("mode")
const numColorInput = document.getElementById("numColor")
const colorSchemeBtn = document.getElementById("colorScheme-btn") 
const darkModeBtn = document.getElementById("darkMode-btn")
const colorOutput = document.getElementById("colorOutput")
const title = document.getElementById("title")
const subTitle = document.getElementById("subTitle")

let darkMode = false
let baseUrl = "https://www.thecolorapi.com/scheme"
  
  colorSchemeBtn.addEventListener("click", function(){
    darkModeBtn.disabled = false;
    const hexValues = document.querySelectorAll('.hex-value');
    
    if (darkMode === true) {

        darkModeArea.classList.remove("dark")
        darkModeBtn.innerText = "Dark Mode"
        
        SliderOutput.classList.remove("invert")
        title.classList.remove("invert")
        subTitle.classList.remove("invert")

        for (const hexValue of hexValues) {
            hexValue.classList.remove('invert');
        }
    }
    
    let hexString = colorInput.value
    hexString = hexString.substring(1)
  
  
    fetch(`${baseUrl}?hex=${hexString}&mode=${modeInput.value}&count=${numColorInput.value}`)
    .then(resp => resp.json())
    .then(data => {
        
          let HTML = ""
          
          for (let color of data.colors) {
            
            HTML += `
            
            <div id="eachColorOutput">
                <section id="${color.hex.value}" style="background-color: ${color.hex.value}">&nbsp</section>
                <div class="hex-value" id="${color.hex.value}">${color.hex.value}</div>
            </div>
            `
           
          }
         
          
          colorOutput.innerHTML=HTML
          
         })
            

           

  })
  
 
  darkModeBtn.addEventListener("click", function(){

    const hexValues = document.querySelectorAll('.hex-value');

    darkModeArea.classList.add("dark")
    
    if (darkMode === false) {
        darkModeArea.classList.add("dark")
        darkModeBtn.innerText = "Light Mode"
        
        
        SliderOutput.classList.add("invert")
        title.classList.add("invert")
        subTitle.classList.add("invert")

        for (const hexValue of hexValues) {
            hexValue.classList.add('invert');
        }
       
        
        
        darkMode = true
        
    } else if (darkMode === true) {
        darkModeArea.classList.remove("dark")
        darkModeBtn.innerText = "Dark Mode"
        
        SliderOutput.classList.remove("invert")
        title.classList.remove("invert")
        subTitle.classList.remove("invert")

        for (const hexValue of hexValues) {
            hexValue.classList.remove('invert');
        }
        

        
        
        
        darkMode = false
    }
  
})

sliderInput.addEventListener("input", function(){
    document.getElementById("sliderValue").innerText=sliderInput.value
})


colorOutput.addEventListener("click", function(e){
   
   let copyText = e.target.id
   if(copyText.includes("#")){

    navigator.clipboard.writeText(copyText)
    alert(`Hex copied: ${copyText}`)
   }
  
})