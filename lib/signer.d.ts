declare interface SignerInstance {
    signature(): string
    interceptor(): Function
}
declare const Signer: {
    new(key: string, nonceLength?: number): SignerInstance
}
export default Signer
