// Code your solution here
const findMatching = (drivers, string) => {
    return drivers.filter( find_name => {
        return (find_name.toLowerCase() === string.toLowerCase())
    })
}

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(find_name => {
        if (string.charAt(0) === find_name.charAt(0)){
            return find_name
        }
    })
}


const matchName = (drivers, string) => {
    return drivers.filter(find_name => {
        if (find_name.name === string){
            return find_name
        }
    })
}