import { decorate, observable, computed } from "mobx";

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

  get totalQuantity() {
    let totalAmount = 0;
    this.items.forEach(item => (totalAmount += item.quantity));
    return totalAmount;
  }
}

decorate(CartStore, {
  items: observable,
  totalQuantity: computed
});

let cartStore = new CartStore();
cartStore.addItemtoCart();
cartStore.removeItemFromCart();
cartStore.checkOutCart();

export default cartStore;
