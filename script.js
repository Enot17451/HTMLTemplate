function find(){
    let el = document.body.querySelectorAll('*')
    for (let e of el){
        let all=""
        if (e.className!==""){
            all = document.querySelectorAll(`.${e.className}`)
        }
        if (all.length>1){
            window[e.className]=all
        }else {
            window[e.className]=all[0]
        }
    }
}

find()
