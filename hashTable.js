class HashTable{
    constructor(){
        this.keyMaps = new Array(11)
    }
    /**
     * 
     * @param {string} key 
     */
    _hash(key) {
        let total = 0
        let WIERD_PRIME = 31
        for (let i = 0; i < Math.min(key.length,100); i++) {
            let value = key[i].charCodeAt(0) - 96;
            total = (total * WIERD_PRIME + value) % 11
        }
        return total
    }
    
    _set(key,value){
        let index = this._hash(key);
        if (this.keyMaps[index] && this.keyMaps[index][0] === key) {
            this.keyMaps[index][1] = value;
            return
        }else{
            while (this.keyMaps[index]) {
                index = (index + 1) % this.keyMaps.length;
            }
        }
    
        this.keyMaps[index]=[key,value]
    }

    _get(key){
        const index = this._hash(key);
        if (!this.keyMaps[index]) {
            return undefined
        }
        return this.keyMaps[index][1]
    }
}

var hashTable = new HashTable()

hashTable._set("cba","123");
hashTable._set("abc","456");
hashTable._set("cba","789");

console.log(hashTable._get("zzzz"));

