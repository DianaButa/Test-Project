export class TestDTO {
    public id: string;
    public firstName: string;
    public lastName: string;
    public adress: string;
    public productList: string;
  
    constructor(formValue: ITestFormValue) {
      this.id = "";
      this.firstName = formValue.firstName;
      this.lastName = formValue.lastName;
      this.adress = formValue.adress;
      this.productList= formValue.productList;
    }
  }
  
  export interface ITestFormValue {
    firstName: string;
    lastName: string;
    id: string;
    adress: string;
    productList: string;
  }
  