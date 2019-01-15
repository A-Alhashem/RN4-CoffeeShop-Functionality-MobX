import { decorate, observable } from "mobx";

class CartStore {
  constructor() {
    this.items = [];
  }

  addItemtoCart(order) {
    let item = this.items.find(item => {
      return item.drink === order.drink && item.option === order.option;
    });
    if (item) {
      item.quantity += order.quantity;
    } else {
      this.items.push(order);
    }
  }

  removeItemFromCart(order) {
    this.items = this.items.filter(filterOrder => {
      filterOrder !== order;
    });
  }

  checkOutCart() {
    this.items = [];
  }
}

decorate(CartStore, {
  items: observable
});

let cartStore = new CartStore();
cartStore.addItemtoCart();
cartStore.removeItemFromCart();
cartStore.checkOutCart();

export default cartStore;
