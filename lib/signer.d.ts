declare interface Signer {
    new(key : string, nonceLength ?: number) : Signer
    signature() : string
    interceptor() : Function
}

export default Signer
