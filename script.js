
const pullDownButton = document.getElementById("lists")
console.log("リスト")

window.addEventListener("load",function(){
    const pullDownButton = document.getElementById("lists")
})
    pullDownButton.addEventListener('mouseover',function(){
        console.log("戻る")
    })
    pullDownButton.addEventListener('mouseout',function(){
        console.log("外れる")
    })
    pullDownButton.addEventListener('click',function(){
        console.log("クリック")
    })