import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions, Image, TouchableOpacity } from 'react-native';
import Search from '../Assets/icons/search.png'
import Dots from '../Assets/icons/dots.png'
import Camera from '../Assets/icons/camera.png'

export default class Header extends Component {
  render() {
    return (
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

        <View style={style.insideViewOne}>
        <TouchableOpacity>
        <Image style={style.cameraImage} source={Camera}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={style.chatsText}>CHATS</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={style.chatsStatus}>STATUS</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={style.chatsStatus}>CALLS</Text>
        </TouchableOpacity>
        </View>
      </View>
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