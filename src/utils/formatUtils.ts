export const formatNum = (num: string | number) => {
    if(+num < 10 && +num >=0) {
        return `0${num}`
    }
    return num
}