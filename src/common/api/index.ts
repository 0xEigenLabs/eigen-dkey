import request from "../utils/request";

export const keyGen = (data) => {
    return request({
        url: '/tss/keygen',
        method: 'post',
        data
    })
}

export const sign = (data) => {
    return request({
        url: '/tss/sign',
        method: 'post',
        data
    })
}

export const getAddress = (userId: number, shardName?: string) => {
    if (!shardName) {
        return request({
            url: `/tss?user_id=${userId}`
        })
    } else {
        return request({
            url: `/tss?user_id=${userId}&name=${shardName}`
        })
    }

}