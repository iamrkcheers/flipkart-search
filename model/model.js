app.factory("flipkartfactory",function(){
    var obj={
        show:function(){
            var abc=[
                {img:'../images/iphone.png',name:"iPhone 6Plus",price:60000,colour:"white"},
                {img:'../images/motog.png',name:"Moto G",price:20000,colour:"black"},
                {img:'../images/nexus6.png',name:"Nexus 6",price:50000,colour:"black"},
                {img:'../images/oneplusone.png',name:"OnePlus One",price:20000,colour:"black"},
                {img:'../images/galaxy.png',name:"Samsung Galaxy S6 Edge",price:50000,colour:"black"}
            ];
            return abc;
        }
    };
    return obj;
})