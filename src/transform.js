groupAdultsByAgeRange = (argument) => {

    const res = {}

    const secondary = argument.filter(element => element.age >= 18)

    if(secondary.length === 0){

        return res

    } else {

        const tertiary = secondary.reduce((object, current_value) => {

            if(current_value.age <= 20){object.a = object.a.concat(current_value)}

            if(current_value.age > 20 && current_value.age <= 30){object.b = object.b.concat(current_value)}

            if(current_value.age > 30 && current_value.age <= 40){object.c = object.c.concat(current_value)}

            if(current_value.age > 40 && current_value.age <= 50){object.d = object.d.concat(current_value)}

            if(current_value.age > 50){object.e = object.e.concat(current_value)}

            return object

        }, {
            a: [], b: [], c: [], d: [], e: []
        } )

        // a = '20 and younger'
        // b = '21-30'
        // c = '31-40'
        // d = '41-50'
        // e = '51 and older'

    if(tertiary.a.length === 0){
        delete tertiary.a
    }
    if(tertiary.b.length === 0){
        delete tertiary.b
    }
    if(tertiary.c.length === 0){
        delete tertiary.c
    }
    if(tertiary.d.length === 0){
        delete tertiary.d
    }
    if(tertiary.e.length === 0){
        delete tertiary.e
    }
    
    return tertiary

    }
}

module.exports = {groupAdultsByAgeRange}