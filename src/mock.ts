
export const mockKeyGen = (round: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(`keygen round ${round}`)
        }, 1500)
    })
}