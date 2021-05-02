const funcs = []

for (let i = 0; i < 10; i++){
  funcs.push(function() {
    console.log(i)
  })
}

// Let consegue lembrar do valor de i naquele momento
funcs[2]()
funcs[8]()