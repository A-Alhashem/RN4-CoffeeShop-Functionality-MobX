import React, { Component } from "react";

import { observer } from "mobx-react";

import { withNavigation } from "react-navigation";

// NativeBase Components
import { Text, Button, Icon } from "native-base";

// Component
import CartStore from "../store/cartStore";

class NewButtons extends Component {
  render() {
    return (
      <Button
        light
        transparent
        onPress={() => this.props.navigation.navigate("CoffeeCart")}
      >
        <Text>
          {CartStore.totalQuantity}
          <Icon
            type="FontAwesome"
            name="coffee"
            style={{ color: "white", fontSize: 15 }}
          />
        </Text>
      </Button>
    );
  }
}

export default withNavigation(observer(NewButtons));
