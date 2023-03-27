const valores = (idade, ensMedio, ensSuperior) => {

    if(idade >= 18 === true){
        console.log("A pessoa é maior de idade")

    }else{
        console.log("A pessoa é menor de idade")

    }

    if(ensMedio === true){
        console.log("A pessoa terminou o ensino médio")
    }else{
        console.log("A pessoa não terminou o ensino médio")
    }

    if(ensSuperior === true){
        console.log("A pessoa está cursando faculdade")
    }else{
        console.log("A pessoa não está cursando faculdade")
    }

}
valores(21, true, false)