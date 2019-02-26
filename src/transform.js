groupAdultsByAgeRange = (argument) => {

    const res = {}

    const secondary = argument.filter(element => element.age >= 18)

    if(secondary.length === 0){

        return res

    } else {

        const tertiary = secondary.reduce((object, currentValue) => {

            if(currentValue.age <= 20){object["20 and younger"].push(currentValue)}

            if(currentValue.age > 20 && currentValue.age <= 30){object['21-30'].push(currentValue)}

            if(currentValue.age > 30 && currentValue.age <= 40){object['31-40'].push(currentValue)}

            if(currentValue.age > 40 && currentValue.age <= 50){object['41-50'].push(currentValue)}

            if(currentValue.age > 50){object['51 and older'].push(currentValue)}

            return object

        }, {
            '20 and younger': [], '21-30': [], '31-40': [], '41-50': [], '51 and older': [],
        } )

    let ct = ['20 and younger', '21-30', '31-40', '41-50', '51 and older'];

    ct.map(property => {
        if(tertiary[property].length === 0){
            delete tertiary[property]
        }
    })

    return tertiary

    }
}

module.exports = {groupAdultsByAgeRange}