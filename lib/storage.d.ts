import { PluginFunction } from 'vue'

declare interface BrowserStorage {
    put(key: string|number, value : any) : void
    get(key: string|number, $default ?: any) : any
    remove(key: string|number) : void
}

declare module 'vue/types/vue' {
    interface Vue {
        $storage: BrowserStorage
    }
}

declare class BrowserStorage {
    static install : PluginFunction<never>
}

export default BrowserStorage
