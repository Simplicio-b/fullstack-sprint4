class Filter {
    constructor(id = "", label = "") {
        this._id = id;
        this._label = label;
        Object.freeze(this);
    }

    get id() {
        return this._id
    } 

    get label() {
        return this._label
    } 

}

export default Filter
