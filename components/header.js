import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions, Image, TouchableOpacity,Alert } from 'react-native';
import Search from '../Assets/icons/search.png'
import Dots from '../Assets/icons/dots.png'
import Camera from '../Assets/icons/camera.png';
import Body from './body';
import Status from './status';
import Calls from './calls';
import { Container, Header, Tab, Tabs, TabHeading, Icon,Toast} from 'native-base';
import { Button, Paragraph, Dialog, Portal,Provider } from 'react-native-paper';


class AlertView extends Component {
  state = {
    visible: true,
  };

  showDialog = () => this.setState({ 
    visible: true
   });

  hideDialog = () => this.setState({
     visible: false 
    });

  render() {
    return (
      <Provider>
      <View>
      <Portal>
      <Dialog
         visible={this.state.visible}
         onDismiss={this._hideDialog}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <Paragraph>There is no camera in emulator</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
        </Dialog.Actions>
      </Dialog>
    </Portal>
    </View>
    </Provider>
      );
    }
  }
  
export default class TopHeader extends Component {
  render() {
    return (
      <Container>
      <View style={style.container}>
        <View style={style.insideViewOne}>
        <Text style={style.whatsappText}>WhatsApp</Text>
        <TouchableOpacity>
        <Image style={style.searchImage} source={Search} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={style.menuDots} source={Dots} />
        </TouchableOpacity>
        </View>
      </View>
      
      <Tabs page={1} >
      <Tab tabStyle={{width:10}} heading={ <TabHeading style={{backgroundColor: "#075E55",}}><Icon name="camera"/></TabHeading>}>
          <AlertView />
        </Tab>
        <Tab heading={ <TabHeading style={{backgroundColor: "#075E55",}}><Text style={{fontWeight:"bold"}}>CHATS</Text></TabHeading>}>
          <Body />
        </Tab>
        <Tab heading={ <TabHeading style={{backgroundColor: "#075E55",}}><Text style={{fontWeight:"bold"}}>STATUS</Text></TabHeading>}>
          <Status />
        </Tab>
        <Tab heading={ <TabHeading style={{backgroundColor: "#075E55",}}><Text style={{fontWeight:"bold"}}>CALLS</Text></TabHeading>}>
          <Calls />
        </Tab>
      </Tabs>

    </Container>
    );
  }
}


const style = StyleSheet.create({
    container:{
        width:Dimensions.get('window').width,
        backgroundColor: '#075E55',
        flex:0.15
    },
    insideViewOne:{
        width:Dimensions.get('window').width,
        flex:0.5,
        flexDirection: 'row',
        width:"100%"
    },
    whatsappText:{
        fontFamily:"Roboto",
        fontSize:Dimensions.get('window').height * 0.04,
        fontWeight:"bold",
        color:"white",
        marginLeft:Dimensions.get('window').width * 0.04,
        marginTop:Dimensions.get('window').height * 0.02,
        height:"100%"
    },
    searchImage:{
        marginLeft:Dimensions.get('window').width * 0.5,
        marginTop:Dimensions.get('window').height * 0.025,
        width:Dimensions.get('window').width * 0.05,
        height:Dimensions.get('window').height * 0.04,
  },
  menuDots:{
    marginTop:Dimensions.get('window').height * 0.025,
    width:Dimensions.get('window').width * 0.05,
    height:Dimensions.get('window').height * 0.04,
    marginLeft:Dimensions.get('window').width * 0.03,
},
cameraImage:{
    width:Dimensions.get('window').width * 0.05,
    height:Dimensions.get('window').height * 0.04,
    marginTop:Dimensions.get('window').height * 0.02,
    marginLeft:Dimensions.get('window').width * 0.02,
},
chatsText:{
    fontFamily:"Roboto",
    fontSize:Dimensions.get('window').height * 0.025,
    fontWeight:"bold",
    color:"#cccccc",
    marginTop:Dimensions.get('window').height * 0.023,
    marginLeft:Dimensions.get('window').width * 0.1,
},
chatsStatus:{
    fontFamily:"Roboto",
    fontSize:Dimensions.get('window').height * 0.025,
    fontWeight:"bold",
    color:"#cccccc",
    marginTop:Dimensions.get('window').height * 0.023,
    marginLeft:Dimensions.get('window').width * 0.15,
}
})

