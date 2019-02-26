groupAdultsByAgeRange = (argument) => {

    const res = {}

    const secondary = argument.filter(element => element.age >= 18)

    if(secondary.length === 0){

        return res

    } else {

        // const a = '20 and younger'
        // const b = '21-30'
        // const c = '31-40'
        // const d = '41-50'
        // const e = '51 and older'

        const tertiary = secondary.reduce((object, current_value) => {

            if(current_value.age <= 20){object.a = object.a.concat(current_value)}

            if(current_value.age > 20 && current_value.age <= 30){object.b = object.b.concat(current_value)}

            if(current_value.age > 30 && current_value.age <= 40){object.c = object.c.concat(current_value)}

            if(current_value.age > 40 && current_value.age <= 50){object.d = object.d.concat(current_value)}

            if(current_value.age > 50){object.e = object.e.concat(current_value)}

            return object

        }, {
            a: [], b: [], c: [], d: [], e: [],
        } )

    // let ct = ['20 and younger', '21-30', '31-40', '41-50', '51 and older'];
    let ct = ['a', 'b', 'c', 'd', 'e'];

    ct.map(property => {
        if(tertiary[property].length === 0){
            delete tertiary[property]
        }
    })

    return tertiary

    }
}

module.exports = {groupAdultsByAgeRange}