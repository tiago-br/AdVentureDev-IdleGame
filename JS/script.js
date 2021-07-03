window.onload = ()=> {
    var img = new Image()
    img.src ='/IMAGENS/winscreen.png'
   
    let game = new Game;
    document.getElementById("bts-clicker").onclick = ()=>{
        game.clickButton()
    }
    document.getElementById("button-click-1").onclick = ()=>{
        game.buyADD()
    }
    document.getElementById("button-click-2").onclick = ()=>{
        game.buyHTML5()
    }
    document.getElementById("button-click-3").onclick = ()=>{
        game.buyComputador()
    }
    document.getElementById("button-click-4").onclick = ()=>{
        game.buyCSS()
    }
    document.getElementById("button-click-5").onclick = ()=>{
        game.buyPython()
    }
    document.getElementById("button-click-6").onclick = ()=>{
        game.buySteam()
    }
    document.getElementById("button-click-7").onclick = ()=>{
        game.buyBootstrap()
    }
    document.getElementById("button-click-8").onclick = ()=>{
        game.buyJavaScript()
    }
    document.getElementById("button-click-9").onclick = ()=>{
        game.buyServidor()
    }
    document.getElementById("button-click-10").onclick = ()=>{
        game.buyReact()
    }
    document.getElementById("button-click-11").onclick = ()=>{
        game.buyPHP()
    }
    document.getElementById("button-click-12").onclick = ()=>{
        game.buyWinGame()
        if(game.win){
            game.totalMoney = 0
            game.totalCCperClick = 0
            game.totalCCperS = 0
            game.updateTotalMoney()
            let canvas = document.getElementById("cvs")
            let ctx = canvas.getContext("2d")
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.drawImage(img,20,35,260,80)
        }
    }
    document.getElementById("btn-start").onclick = ()=>{
        game.resetButton()
    }
    document.getElementById("btn-music").onclick = ()=>{
        game.playMusic()
    }
}                 

