interface KeymapOptions {
    name?: string;
    call?: (key: string, context?: any) => any;
}

export default class Keymap {
    constructor(keys: { [key: string]: any }, options?: KeymapOptions);
}
