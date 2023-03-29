AFRAME .registerComponent("coin",{
    init:function(){
        for(var i=1;i<=20;i++){
            
         var id=  `coin${i}`
         const posX = Math.random() * 100 + -50;
         const posY = Math.random() * 5 + 5;
         const posZ = Math.random() * 60 + -40;
         const position = { x: posX, y: posY, z: posZ };
         this.coinMain(id,position)
        }
    },
    coinMain:function(id,position){
        var coinEl=document.querySelector("#teasureCoins")
        var coinEntity=document.createElement("a-entity")
        fishEntity.setAttribute("id", id)
        fishEntity.setAttribute("position",position)
        fishEntity.setAttribute("scale", { x: 0.3, y: 0.3, z: 0.3 });
        fishEntity.setAttribute("gltf-model","./assets/treasure/model.gltf")
        fishEntity.setAttribute("animation-mixer",{});
        fishEntity.setAttribute("animation", {property:"position", to:"100 10 -20", loop:"true", dur:20000})
        coinEl.appendChild(coinEntity)
    }

    
})

