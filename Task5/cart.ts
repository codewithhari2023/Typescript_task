import { product } from "./product";

class cart {
    private carts:product[]=[]
   AddtoCart(item:product){
        this.carts.push(item);
        console.log(`Added product: ${item.getDetails()}`);
   }
   RemoveCart(Id:number){
     this.carts = this.carts.filter(cart => cart.id !== Id);
     console.log(`Removed product: ${Id}`);
   }
   calculateTotal(): number {
        let total = 0;
        for (const item of this.carts) {
            total += item.price; 
        }
        return total;
    }
}
let cart1=new cart();
let cartproduct=new product(101,"iphone",40000);
cart1.AddtoCart(cartproduct)
console.log(cartproduct.getDetails())

// Task 5