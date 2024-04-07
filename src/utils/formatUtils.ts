export const formatNum = (num: string | number) => {
    if(+num < 10 && +num >=0) {
        return `0${num}`
    }
    return num
}

export const formatPrice = (price: string | number | null) => 
    `${price}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
