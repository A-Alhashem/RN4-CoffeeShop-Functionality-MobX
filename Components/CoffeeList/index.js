import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Button, Text, Icon } from "native-base";

// Store
import CoffeeStore from "../../store/coffeeStore";

// React Navigation
import { withNavigation } from "react-navigation";

// Component
import CoffeeItem from "./CoffeeItem";
import NewButtons from "../../Components/NewButtons";

class CoffeeList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Coffee List",
    headerLeft: null,
    headerRight: <NewButtons />
  });
  render() {
    const coffeeshops = CoffeeStore.coffeeshops;
    let ListItems;
    if (coffeeshops) {
      ListItems = coffeeshops.map(coffeeShop => (
        <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
      ));
    }
    return (
      <Content>
        <List>{ListItems}</List>
      </Content>
    );
  }
}

export default withNavigation(observer(CoffeeList));
