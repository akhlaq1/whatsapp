import React, { Component } from 'react';
import { View, Text,ScrollView,Dimensions, Image } from 'react-native';
import Ali from '../Assets/images/ali.jpg';
import Apptron from '../Assets/images/apptron.jpg';
import Bilal from '../Assets/images/bilal.jpg';
import Faizan from '../Assets/images/faizan.jpg';
import Hammad from '../Assets/images/hammad.jpg';
import Mohsin from '../Assets/images/mohsin.jpg';
import Ubaid from '../Assets/images/ubaid.jpg';
import Wajahat from '../Assets/images/wajahat.jpg';
import Sir from '../Assets/images/sir_shahnawaz.jpg';
import Munib from '../Assets/images/munib.jpg';
import Basit from '../Assets/images/basit.jpg';
import Daim from '../Assets/images/daim.jpg';
import Omer from '../Assets/images/omer.jpg';
import Sameer from '../Assets/images/sameer.jpg';
import Up from '../Assets/icons/up.png';
import Down from '../Assets/icons/down.png';
import Phone from '../Assets/icons/phone.png'

export default class Calls extends Component {
  render() {
    return (

<ScrollView style={{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    height:"100%"
}}>

<View style={{
        flexDirection:'row',
        width:"100%",
      }}>
        <Image source={Ali} style={{
          width:50,
          height:50,
          borderRadius:50,
          margin:15
        }}/>
        <View style={{flexDirection:'column', width:"73%",marginTop: 15, height:60,  borderBottomWidth: 2, borderBottomColor: '#EBEBEB',}}>
          <View style={{flexDirection:'row',}}>
          <Text style={{
            fontFamily:"Roboto",
            fontWeight:'bold',
            fontSize:20,
            paddingLeft: 10,
            color:'black',
            width:"60%"
          }}>Ali haider</Text>

          <Image source={Phone} style={{marginLeft:"30%",}}/>
          
          </View>
          <Text style={{
            fontFamily:"Roboto",
            fontSize:15,
            paddingTop:5,
            paddingLeft: 10,
            color:'black'
          }}> <Image source={Up} />Feburary 17, 7:09 PM</Text>
        
        </View>

      </View>

      <View style={{
        flexDirection:'row',
        width:"100%",
      }}>
        <Image source={Sir} style={{
          width:50,
          height:50,
          borderRadius:50,
          margin:15
        }}/>
        <View style={{flexDirection:'column', width:"73%",marginTop: 15, height:60,  borderBottomWidth: 2, borderBottomColor: '#EBEBEB',}}>
          <View style={{flexDirection:'row',}}>
          <Text style={{
            fontFamily:"Roboto",
            fontWeight:'bold',
            fontSize:20,
            paddingLeft: 10,
            color:'black',
            width:"60%"
          }}>Sir Shahnawaz</Text>

          
            <Image source={Phone} style={{marginLeft:"30%",}}/>
          
          </View>
          <Text style={{
            fontFamily:"Roboto",
            fontSize:15,
            paddingTop:5,
            paddingLeft: 10,
            color:'black'
          }}><Image source={Up} />Feburary 18, 3:09 PM</Text>
        
        </View>

      </View>

      <View style={{
        flexDirection:'row',
        width:"100%",
      }}>
        <Image source={Apptron} style={{
          width:50,
          height:50,
          borderRadius:50,
          margin:15
        }}/>

        <View style={{flexDirection:'column', width:"73%",marginTop: 15, height:60,  borderBottomWidth: 2, borderBottomColor: '#EBEBEB',}}>
          <View style={{flexDirection:'row',}}>
          <Text style={{
            fontFamily:"Roboto",
            fontWeight:'bold',
            fontSize:20,
            paddingLeft: 10,
            color:'black',
            width:"60%"
          }}>Apptron</Text>

          <Image source={Phone} style={{marginLeft:"30%",}}/>
          
          </View>
          <Text style={{
            fontFamily:"Roboto",
            fontSize:15,
            paddingTop:5,
            paddingLeft: 10,
            color:'black',
          }}><Image source={Down} />(3) Feburary 16, 9:21 PM</Text>
        
        </View>

      </View>

      <View style={{
        flexDirection:'row',
        width:"100%",
      }}>
        <Image source={Ubaid} style={{
          width:50,
          height:50,
          borderRadius:50,
          margin:15
        }}/>
        <View style={{flexDirection:'column', width:"73%",marginTop: 15, height:60,  borderBottomWidth: 2, borderBottomColor: '#EBEBEB',}}>
          <View style={{flexDirection:'row',}}>
          <Text style={{
            fontFamily:"Roboto",
            fontWeight:'bold',
            fontSize:20,
            paddingLeft: 10,
            color:'black',
            width:"60%"
          }}>Ubaid Sheikh</Text>

          <Image source={Phone} style={{marginLeft:"30%",}}/> 
          
          </View>
          <Text style={{
            fontFamily:"Roboto",
            fontSize:15,
            paddingTop:5,
            paddingLeft: 10,
            color:'black'
          }}><Image source={Up} />Feburary 13, 10:04 PM</Text>
        
        </View>

      </View>

      <View style={{
        flexDirection:'row',
        width:"100%",
      }}>
        <Image source={Bilal} style={{
          width:50,
          height:50,
          borderRadius:50,
          margin:15
        }}/>
        <View style={{flexDirection:'column', width:"73%",marginTop: 15, height:60,  borderBottomWidth: 2, borderBottomColor: '#EBEBEB',}}>
          <View style={{flexDirection:'row',}}>
          <Text style={{
            fontFamily:"Roboto",
            fontWeight:'bold',
            fontSize:20,
            paddingLeft: 10,
            color:'black',
            width:"60%"
          }}>Bilal nadeem</Text>

          <Image source={Phone} style={{marginLeft:"30%",}}/>
          
          </View>
          <Text style={{
            fontFamily:"Roboto",
            fontSize:15,
            paddingTop:5,
            paddingLeft: 10,
            color:'black'
          }}><Image source={Down} />Feburary 7, 1:34 PM</Text>
        
        </View>

      </View>

      <View style={{
        flexDirection:'row',
        width:"100%",
      }}>
        <Image source={Faizan} style={{
          width:50,
          height:50,
          borderRadius:50,
          margin:15
        }}/>
        <View style={{flexDirection:'column', width:"73%",marginTop: 15, height:60,  borderBottomWidth: 2, borderBottomColor: '#EBEBEB',}}>
          <View style={{flexDirection:'row',}}>
          <Text style={{
            fontFamily:"Roboto",
            fontWeight:'bold',
            fontSize:20,
            paddingLeft: 10,
            color:'black',
            width:"60%"
          }}>Faizan Kalhoro</Text>

          <Image source={Phone} style={{marginLeft:"30%",}}/>
          
          </View>
          <Text style={{
            fontFamily:"Roboto",
            fontSize:15,
            paddingTop:5,
            paddingLeft: 10,
            color:'black'
          }}><Image source={Down} />Feburary 7, 1:02 AM</Text>
        
        </View>

      </View>

      
      <View style={{
        flexDirection:'row',
        width:"100%",
      }}>
        <Image source={Hammad} style={{
          width:50,
          height:50,
          borderRadius:50,
          margin:15
        }}/>
        <View style={{flexDirection:'column', width:"73%",marginTop: 15, height:60,  borderBottomWidth: 2, borderBottomColor: '#EBEBEB',}}>
          <View style={{flexDirection:'row',}}>
          <Text style={{
            fontFamily:"Roboto",
            fontWeight:'bold',
            fontSize:20,
            paddingLeft: 10,
            color:'black',
            width:"60%"
          }}>Hammad</Text>

          <Image source={Phone} style={{marginLeft:"30%",}}/>
          
          </View>
          <Text style={{
            fontFamily:"Roboto",
            fontSize:15,
            paddingTop:5,
            paddingLeft: 10,
            color:'black'
          }}><Image source={Down} />Feburary 6, 1:07 PM</Text>
        
        </View>

      </View>

</ScrollView>
);
}
}