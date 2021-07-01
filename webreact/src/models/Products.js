class Product {
    constructor(sku = "", image = "", name = "", price = "") {
        this._sku = sku;
        this._image = image;
        this._name = name;
        this._price = price;
        Object.freeze(this);
    }

    get sku() {
        return this._sku
    } 

    get image() {
        return this._image
    } 

    get name() {
        return this._name
    } 

    get price() {
        return this._price
    } 
}

export default Product
