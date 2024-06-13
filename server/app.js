

new Promise((res,rej)=>{
    setTimeout(()=>{
        let a=true;
        if(a){
            res('ok')
        }else{
            rej('not ok')
        }
    })
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})