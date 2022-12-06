export const keyGenMap: Record<number, string> = {
    1: 'phase 1, construct order polynomial',
    2: 'phase 1, broadcast public key for Pallier\'s cryptosystem',
    3: 'phase 2, calculate the public key and private key',
    4: 'phase 2, use Feldman-VSS protocol to construct a polynomial of degree one',
    5: 'phase 3, prove shared private key through zero-knowledge proof'
}


export const signMap: Record<number, string> = {
    1: 'phase 1, construct order polynomial',
    2: 'phase 2, prove the other node knows the value',
    3: 'phase 3, calculate and compute',
    4: 'phase 4, broadcast and de-committed',
    5: 'phase 5A',
    6: 'phase 5B',
    7: 'phase 5C',
    8: 'phase 5D',
    9: 'phase 5E'
}