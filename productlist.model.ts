export class ProductLisDTO {
    public nrCrt: string;
    public name: string;
    public price: string;
    public description: string;
    public category: string;
    public ingredients: string;
    public companyName: string;
    public companyAdress: string;

    constructor(formValue: IProductListFormValue) {
        this.nrCrt = formValue.nrCrt;
        this.name = formValue.name;
        this.price = formValue.price;
        this.description = formValue.description;
        this.category = formValue.category;
        this.ingredients = formValue.ingredients;
        this.companyName = formValue.companyName;
        this.companyAdress = formValue.companyAdress;
    }
}

export interface IProductListFormValue {
    name: string;
    price: string;
    description: string;
    category: string;
    ingredients: string;
    companyName: string;
    companyAdress: string;
    nrCrt: string;
}

// Ensure product object includes nrCrt property
const product: IProductListFormValue = {
    nrCrt: '1',
    name: 'Product Name',
    price: '10.00',
    description: 'Product Description',
    category: 'Product Category',
    ingredients: 'Product Ingredients',
    companyName: 'Company Name',
    companyAdress: 'Company Address'
};
