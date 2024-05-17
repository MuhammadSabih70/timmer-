var bold =document.getElementById('BOLD')
var underline =document.getElementById('underline')
var italic=document.getElementById('italic')
var text =document.getElementById("text")
var Sans_serif =document.getElementById("dropdown")
console.log("Sans_serif")
bold.addEventListener("click",function(){
    console.log("bold")
    text.style.fontWeight = 'bold'
})
underline.addEventListener("click",function(){
    console.log("bold")
    text.style.textDecoration="underline"
})
italic.addEventListener("click",function(){
    console.log("bold")
    text.style.fontStyle = "italic"
})
Sans_serif.addEventListener("click",function(){
    console.log("bold")
   text.style.fontFamily="Sans serif"
})
bold.addEventListener("click",function(){
    console.log("bold")
    text.style.bold
})
var fontSelector = document.getElementById('font-selector');
var selectedFont = document.getElementById('selected-font');

fontSelector.addEventListener('change', function() {
    var selectedOption = fontSelector.options[fontSelector.selectedIndex];
    var selectedFontFamily = selectedOption.value;

    selectedFont.style.fontFamily = selectedFontFamily;
    selectedFont.textContent = "Selected Font: " + selectedFontFamily;
});