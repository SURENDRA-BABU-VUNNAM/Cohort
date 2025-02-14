// primitives

// strings, numbers, boolean, null, undefined, symbol

    // Numbers
    let num = 120
    
    // console.log(typeof num)

    let anotherNum = new Number(150)
    console.log(typeof anotherNum)

    // Boolean
    let bool = true
    console.log(typeof bool)

    let anotherBool = new Boolean(false)
    console.log(typeof anotherBool)
    
    // null and undefined

    let firstname = undefined /*a variable just placed with no datatype*/
    let lastname = null /*absence of data*/

    // string
    let string = "hello"
    let myString = "hola"

    let greet =  `hello ${string}`
    console.log(greet) /*string interpolation*/

    let demo = `this is multipication ${5*5}`

    // symbol (gaurenties uniqueness)

    let sm1 = Symbol()
    let sm2 = Symbol()

    console.log(sm1 == sm2)


