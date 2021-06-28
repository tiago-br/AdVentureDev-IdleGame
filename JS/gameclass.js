class Game{
    constructor(){
        this.totalMoney= 0;
        this.totalCCperS= 0;
        this.totalCCperClick = parseFloat(document.querySelector("#button-click-11 .value").innerHTML);
        this.ADD = 0; 
        this.HTML5 = 0;
        this.intervalSum = setInterval(()=>{
            this.totalMoney += this.totalCCperS/10
            this.updateTotalMoney();
            this.checkCanbuy();
        },100)
        this.computador = 0;
        this.CSS = 0;
        this.python = 0;
        this.steam = 0;
        this.bootstrap = 0;
        this.javascript = 0;
        this.servidor = 0;
        this.react = 0;
        this.php= 0;
        this.win=false;
        
    }
    addToTotalMoney(value){
        this.totalMoney += value;
    }
    addClickToTotalMoney(){
        this.addToTotalMoney(this.totalCCperClick);
    }
    updateTotalMoney(){
        document.getElementById("qtd-tt-cc").innerHTML = this.totalMoney.toFixed()
    }
    updateCCperCliker(){
        document.getElementById("cc-click").innerHTML = this.totalCCperClick
    }
    updateCCperS(){
        document.getElementById("cc-per-s").innerHTML = this.totalCCperS
    }
    clickButton(){
        this.addClickToTotalMoney()
        this.updateTotalMoney()
        this.checkCanbuy()
    }
    
    buyADD(){
        let price = parseFloat(document.querySelector("#button-click-1 .value").innerHTML)
        if(price <= this.totalMoney){
            this.addToTotalMoney(-price)
            this.updateTotalMoney()
            this.totalCCperClick += 2.5
            this.updateCCperCliker()
            price *=1.2
            document.querySelector("#button-click-1 .value").innerHTML = price.toFixed(1)
            this.ADD += 1
            document.querySelector("#button-click-1 .qtd").innerHTML = this.ADD
        }
        else{
            alert("você não tem dinheiro suficiente")
        }
    }
    buyHTML5(){
        let price = parseFloat(document.querySelector("#button-click-2 .value").innerHTML)
        if(price <= this.totalMoney){
            this.addToTotalMoney(-price)
            this.updateTotalMoney()
            this.totalCCperClick += 300
            this.updateCCperCliker()
            price *=1.2
            document.querySelector("#button-click-2 .value").innerHTML = price.toFixed(1)
            this.HTML5 += 1
            document.querySelector("#button-click-2 .qtd").innerHTML = this.HTML5
        }
        else{
            alert("você não tem dinheiro suficiente")
        }
    }
    buyComputador(){
        let price = parseFloat(document.querySelector("#button-click-3 .value").innerHTML)
        if(price <= this.totalMoney){
            this.addToTotalMoney(-price)
            this.updateTotalMoney()
            this.totalCCperS += 13.5
            this.updateCCperS()
            price *=1.2
            document.querySelector("#button-click-3 .value").innerHTML = price.toFixed(1)
            this.computador += 1
            document.querySelector("#button-click-3 .qtd").innerHTML = this.computador
            
            
        }
        else{
            alert("você não tem dinheiro suficiente")
        }
    }
    buyCSS(){
        let price = parseFloat(document.querySelector("#button-click-4 .value").innerHTML)
        if(price <= this.totalMoney){
            this.addToTotalMoney(-price)
            this.updateTotalMoney()
            this.totalCCperClick += 500
            this.updateCCperCliker()
            price *=1.2
            document.querySelector("#button-click-4 .value").innerHTML = price.toFixed(1)
            this.CSS += 1
            document.querySelector("#button-click-4 .qtd").innerHTML = this.CSS
        }
        else{
            alert("você não tem dinheiro suficiente")
        }
    }
    buyPython(){
        let price = parseFloat(document.querySelector("#button-click-5 .value").innerHTML)
        if(price <= this.totalMoney){
            this.addToTotalMoney(-price)
            this.updateTotalMoney()
            this.totalCCperClick += 50000
            this.updateCCperCliker()
            price *=1.2
            document.querySelector("#button-click-5 .value").innerHTML = price.toFixed(1)
            this.python += 1
            document.querySelector("#button-click-5 .qtd").innerHTML = this.python
        }
        else{
            alert("você não tem dinheiro suficiente")
        }
    }
    buySteam(){
        let price = parseFloat(document.querySelector("#button-click-6 .value").innerHTML)
        if(price <= this.totalMoney){
            this.addToTotalMoney(-price)
            this.updateTotalMoney()
            this.totalCCperS += 5000
            this.updateCCperS()
            price *=1.2
            document.querySelector("#button-click-6 .value").innerHTML = price.toFixed(1)
            this.steam += 1
            document.querySelector("#button-click-6 .qtd").innerHTML = this.steam
            
            
        }
        else{
            alert("você não tem dinheiro suficiente")
        }
    }
    buyBootstrap(){
        let price = parseFloat(document.querySelector("#button-click-7 .value").innerHTML)
        if(price <= this.totalMoney){
            this.addToTotalMoney(-price)
            this.updateTotalMoney()
            this.totalCCperClick += 1000000
            this.updateCCperCliker()
            price *=1.2
            document.querySelector("#button-click-7 .value").innerHTML = price.toFixed(1)
            this.bootstrap += 1
            document.querySelector("#button-click-7 .qtd").innerHTML = this.bootstrap
        }
        else{
            alert("você não tem dinheiro suficiente")
        }
    }
    buyJavaScript(){
        let price = parseFloat(document.querySelector("#button-click-8 .value").innerHTML)
        if(price <= this.totalMoney){
            this.addToTotalMoney(-price)
            this.updateTotalMoney()
            this.totalCCperS += 100000
            this.updateCCperS()
            price *=1.2
            document.querySelector("#button-click-8 .value").innerHTML = price.toFixed(1)
            this.javascript += 1
            document.querySelector("#button-click-8 .qtd").innerHTML = this.javascript
            
            
        }
        else{
            alert("você não tem dinheiro suficiente")
        }
    }
    buyServidor(){
        let price = parseFloat(document.querySelector("#button-click-9 .value").innerHTML)
        if(price <= this.totalMoney){
            this.addToTotalMoney(-price)
            this.updateTotalMoney()
            this.totalCCperS += 1000000
            this.updateCCperS()
            price *=1.2
            document.querySelector("#button-click-9 .value").innerHTML = price.toFixed(1)
            this.servidor += 1
            document.querySelector("#button-click-9 .qtd").innerHTML = this.servidor
            
            
        }
        else{
            alert("você não tem dinheiro suficiente")
        }
    }
    buyReact(){
        let price = parseFloat(document.querySelector("#button-click-10 .value").innerHTML)
        if(price <= this.totalMoney){
            this.addToTotalMoney(-price)
            this.updateTotalMoney()
            this.totalCCperS += 1500000000
            this.updateCCperS()
            price *=1.2
            document.querySelector("#button-click-10 .value").innerHTML = price.toFixed(1)
            this.react += 1
            document.querySelector("#button-click-10 .qtd").innerHTML = this.react
            
            
        }
        else{
            alert("você não tem dinheiro suficiente")
        }
    }
    buyPHP(){
        let price = parseFloat(document.querySelector("#button-click-11 .value").innerHTML)
        if(price <= this.totalMoney){
            this.addToTotalMoney(-price)
            this.updateTotalMoney()
            this.totalCCperS += 5000000000000
            this.updateCCperS()
            price *=1.2
            document.querySelector("#button-click-11 .value").innerHTML = price.toFixed(1)
            this.php += 1
            document.querySelector("#button-click-11 .qtd").innerHTML = this.php
            
            
        }
        else{
            alert("você não tem dinheiro suficiente")
        }
    }
    buyWinGame(){
        let price = parseFloat(document.querySelector("#button-click-12 .value").innerHTML)
        if(price <= this.totalMoney){
            this.addToTotalMoney(-price)
            this.win = true;
        }
    }
    resetButton(){
        const canvas =  document.getElementById("cvs")
        const ctx = canvas.getContext("2d")
        ctx.clearRect(0,0,canvas.width,canvas.height);
        this.totalMoney= 0;
        this.totalCCperS= 0;
        this.totalCCperClick = 1;
        this.ADD = 0; 
        this.HTML5 = 0;
        this.intervalSum = setInterval(()=>{
            this.totalMoney += this.totalCCperS/10
            this.updateTotalMoney();
            this.checkCanbuy();
        },100)
        this.computador = 0;
        this.CSS = 0;
        this.python = 0;
        this.steam = 0;
        this.bootstrap = 0;
        this.javascript = 0;
        this.servidor = 0;
        this.react = 0;
        this.php= 0;
        this.win=false;
        this.updateCCperCliker()
        this.updateCCperS()
        document.querySelector("#button-click-1 .qtd").innerHTML = this.ADD
        document.querySelector("#button-click-11 .qtd").innerHTML = this.php
        document.querySelector("#button-click-10 .qtd").innerHTML = this.react
        document.querySelector("#button-click-9 .qtd").innerHTML = this.servidor
        document.querySelector("#button-click-8 .qtd").innerHTML = this.javascript
        document.querySelector("#button-click-7 .qtd").innerHTML = this.bootstrap
        document.querySelector("#button-click-6 .qtd").innerHTML = this.steam
        document.querySelector("#button-click-5 .qtd").innerHTML = this.python
        document.querySelector("#button-click-4 .qtd").innerHTML = this.CSS
        document.querySelector("#button-click-3 .qtd").innerHTML = this.computador
        document.querySelector("#button-click-2 .qtd").innerHTML = this.HTML5
        document.querySelector("#button-click-1 .value").innerHTML = 20
        document.querySelector("#button-click-2 .value").innerHTML = 225
        document.querySelector("#button-click-3 .value").innerHTML = 200
        document.querySelector("#button-click-4 .value").innerHTML = 2500
        document.querySelector("#button-click-5 .value").innerHTML = 225000
        document.querySelector("#button-click-6 .value").innerHTML = 65000
        document.querySelector("#button-click-7 .value").innerHTML = 3000000
        document.querySelector("#button-click-8 .value").innerHTML = 1150000
        document.querySelector("#button-click-9 .value").innerHTML = 9000000
        document.querySelector("#button-click-10 .value").innerHTML = 1200000000
        document.querySelector("#button-click-11 .value").innerHTML = 37500000000

        

    }
    checkCanbuy(){
        if(this.totalMoney>=document.querySelector("#button-click-1 .value").innerHTML){
            document.querySelector("#button-click-1").classList.remove("red")
            document.querySelector("#button-click-1").classList.add("green")
            
        }else{
            document.querySelector("#button-click-1").classList.remove("green")
            document.querySelector("#button-click-1").classList.add("red")
        }
        if(this.totalMoney>=document.querySelector("#button-click-2 .value").innerHTML){
            document.querySelector("#button-click-2").classList.remove("red")
            document.querySelector("#button-click-2").classList.add("green")
            
        }else{
            document.querySelector("#button-click-2").classList.remove("green")
            document.querySelector("#button-click-2").classList.add("red")
        }
        if(this.totalMoney>=document.querySelector("#button-click-3 .value").innerHTML){
            document.querySelector("#button-click-3").classList.remove("red")
            document.querySelector("#button-click-3").classList.add("green")
            
        }else{
            document.querySelector("#button-click-3").classList.remove("green")
            document.querySelector("#button-click-3").classList.add("red")
        }
        if(this.totalMoney>=document.querySelector("#button-click-4 .value").innerHTML){
            document.querySelector("#button-click-4").classList.remove("red")
            document.querySelector("#button-click-4").classList.add("green")
            
        }else{
            document.querySelector("#button-click-4").classList.remove("green")
            document.querySelector("#button-click-4").classList.add("red")
        }
        if(this.totalMoney>=document.querySelector("#button-click-5 .value").innerHTML){
            document.querySelector("#button-click-5").classList.remove("red")
            document.querySelector("#button-click-5").classList.add("green")
            
        }else{
            document.querySelector("#button-click-5").classList.remove("green")
            document.querySelector("#button-click-5").classList.add("red")
        }
        if(this.totalMoney>=document.querySelector("#button-click-6 .value").innerHTML){
            document.querySelector("#button-click-6").classList.remove("red")
            document.querySelector("#button-click-6").classList.add("green")
            
        }else{
            document.querySelector("#button-click-6").classList.remove("green")
            document.querySelector("#button-click-6").classList.add("red")
        }
        if(this.totalMoney>=document.querySelector("#button-click-7 .value").innerHTML){
            document.querySelector("#button-click-7").classList.remove("red")
            document.querySelector("#button-click-7").classList.add("green")
            
        }else{
            document.querySelector("#button-click-7").classList.remove("green")
            document.querySelector("#button-click-7").classList.add("red")
        }
        if(this.totalMoney>=document.querySelector("#button-click-8 .value").innerHTML){
            document.querySelector("#button-click-8").classList.remove("red")
            document.querySelector("#button-click-8").classList.add("green")
            
        }else{
            document.querySelector("#button-click-8").classList.remove("green")
            document.querySelector("#button-click-8").classList.add("red")
        }
        if(this.totalMoney>=document.querySelector("#button-click-9 .value").innerHTML){
            document.querySelector("#button-click-9").classList.remove("red")
            document.querySelector("#button-click-9").classList.add("green")
            
        }else{
            document.querySelector("#button-click-9").classList.remove("green")
            document.querySelector("#button-click-9").classList.add("red")
        }
        if(this.totalMoney>=document.querySelector("#button-click-10 .value").innerHTML){
            document.querySelector("#button-click-10").classList.remove("red")
            document.querySelector("#button-click-10").classList.add("green")
            
        }else{
            document.querySelector("#button-click-10").classList.remove("green")
            document.querySelector("#button-click-10").classList.add("red")
        }
        if(this.totalMoney>=document.querySelector("#button-click-11 .value").innerHTML){
            document.querySelector("#button-click-11").classList.remove("red")
            document.querySelector("#button-click-11").classList.add("green")
            
        }else{
            document.querySelector("#button-click-11").classList.remove("green")
            document.querySelector("#button-click-11").classList.add("red")
        }
        if(this.totalMoney>=document.querySelector("#button-click-12 .value").innerHTML){
            document.querySelector("#button-click-12").classList.remove("red")
            document.querySelector("#button-click-12").classList.add("green")
            
        }else{
            document.querySelector("#button-click-12").classList.remove("green")
            document.querySelector("#button-click-12").classList.add("red")
        }
    }

}

