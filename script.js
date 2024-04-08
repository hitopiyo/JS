
function pullDown(){
}

const pullDownButton = document.getElementById("lists")
const pullDownParents = document.getElementById("pull-down")
const pullDownChild = document.querySelectorAll(".pull-down-list")
const currentList = document.getElementById("current-list")


window.addEventListener("load",function(){

    pullDownButton.addEventListener('mouseover',function(){
        this.setAttribute('style',"background-color:blue;")
        console.log("乗ったら青色");
    })
    pullDownButton.addEventListener('mouseout',function(){
        pullDownButton.removeAttribute('style',"background-color:red;")
        console.log("外れたら赤色");
    })
    pullDownButton.addEventListener('click',function(){ 
        if(pullDownParents.getAttribute("style")=="display:block;"){
            pullDownParents.removeAttribute('style',"display:block;")
            console.log("非表示");
        }else{
            pullDownParents.setAttribute('style',"display:block;")
            console.log("表示");
        }
        pullDownChild.forEach(function(list){
            list.addEventListener('click',function(){
                const value = list.innerHTML;
                currentList.innerHTML = value;
            })
        })
    })
})

window.addEventListener('load',pullDown)