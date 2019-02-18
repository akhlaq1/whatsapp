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

export default class Body extends Component {
  render() {
    return (
          <ScrollView style={{flex:0.85}} horizontal={true} pagingEnabled={true}>
        
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

                  <Text style={{marginLeft:"20%"}}>
                    7:18 PM
                  </Text>
                  
                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>Good bye</Text>
                
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

                  <Text style={{marginLeft:"20%"}}>
                    2:18 PM
                  </Text>
                  
                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>ok Sir </Text>
                
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

                  <Text style={{marginLeft:"20%"}}>
                    8:08 AM
                  </Text>
                  
                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black',
                  }}>ok Sir</Text>
                
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

                  <Text style={{marginLeft:"20%"}}>
                    7:24 PM
                  </Text>
                  
                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>ok bro</Text>
                
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

                  <Text style={{marginLeft:"20%"}}>
                    4:18 PM
                  </Text>
                  
                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>han kal kardunga sara</Text>
                
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

                  <Text style={{marginLeft:"20%"}}>
                    5:01 PM
                  </Text>
                  
                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>ok kal milte hain</Text>
                
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

                  <Text style={{marginLeft:"20%"}}>
                    6:03 PM
                  </Text>
                  
                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>ok thnx</Text>
                
                </View>

              </View>

              <View style={{
                flexDirection:'row',
                width:"100%",
              }}>
                <Image source={Mohsin} style={{
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
                  }}>Mohsin</Text>

                  <Text style={{marginLeft:"20%"}}>
                    9:11 AM
                  </Text>
                  
                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>Dekhta hun</Text>
                
                </View>

              </View>

              <View style={{
                flexDirection:'row',
                width:"100%",
              }}>
                <Image source={Wajahat} style={{
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
                  }}>Wajahat Ali</Text>

                  <Text style={{marginLeft:"20%"}}>
                    3:08 PM
                  </Text>
                  
                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>ok bro uni may milte hain</Text>
                
                </View>

              </View>

              <View style={{
                flexDirection:'row',
                width:"100%",
              }}>
                <Image source={Munib} style={{
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
                  }}>Munib Alam</Text>

                  <Text style={{marginLeft:"20%"}}>
                    5:38 PM
                  </Text>
                  
                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>Acha theek hai</Text>
                
                </View>

              </View>

              <View style={{
                flexDirection:'row',
                width:"100%",
              }}>
                <Image source={Omer} style={{
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
                  }}>Omer Alvi</Text>

                  <Text style={{marginLeft:"20%"}}>
                    7:58 PM
                  </Text>
                  
                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>Nice post bro</Text>
                
                </View>

              </View>

              <View style={{
                flexDirection:'row',
                width:"100%",
              }}>
                <Image source={Basit} style={{
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
                  }}>Basit Ali</Text>

                  <Text style={{marginLeft:"20%"}}>
                    3:28 PM
                  </Text>
                  
                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>sed reacts onli</Text>
                
                </View>

              </View>

              <View style={{
                flexDirection:'row',
                width:"100%",
              }}>
                <Image source={Daim} style={{
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
                  }}>Daim Ali Shah</Text>

                  <Text style={{marginLeft:"20%"}}>
                    7:18 PM
                  </Text>
                  
                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>Ali haider</Text>
                
                </View>

              </View>

        </ScrollView>


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
                  margin:15,
                  borderWidth:2,
                  borderColor:"#32CD32"
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
                  
                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>Today, 7:30 PM</Text>
                
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
                  margin:15,
                  borderWidth:2,
                  borderColor:"#32CD32"
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

                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>Today 3:04 PM </Text>
                
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
                  margin:15,
                  borderWidth:2,
                  borderColor:"#32CD32"
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
                
                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black',
                  }}>Today 6:20 PM</Text>
                
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
                  margin:15,
                  borderWidth:2,
                  borderColor:"#32CD32"
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
                
                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>Today, 4:43 PM</Text>
                
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
                  margin:15,
                  borderWidth:2,
                  borderColor:"#32CD32"
                }}/>
                <View style={{flexDirection:'column', width:"73%",marginTop: 15, height:60,  borderBottomWidth: 2, borderBottomColor: '#EBEBEB',}}>
                  <View style={{flexDirection:'row',}}>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontWeight:'bold',
                    fontSize:20,
                    paddingLeft: 10,
                    color:'black',
                    width:"60%",
                  }}>Bilal nadeem</Text>
                
                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>Today, 3:17 PM</Text>
                
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
                  margin:15,
                  borderWidth:2,
                  borderColor:"#32CD32"
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

                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>Today, 4:01 PM</Text>
                
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
                  margin:15,
                  borderWidth:2,
                  borderColor:"#32CD32"
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

                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>Today, 12;14 PM</Text>
                
                </View>

              </View>

              <View style={{
                flexDirection:'row',
                width:"100%",
              }}>
                <Image source={Mohsin} style={{
                  width:50,
                  height:50,
                  borderRadius:50,
                  margin:15,
                  borderWidth:2,
                  borderColor:"#32CD32"
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
                  }}>Mohsin</Text>

                  </View>
                  <Text style={{
                    fontFamily:"Roboto",
                    fontSize:15,
                    paddingTop:5,
                    paddingLeft: 10,
                    color:'black'
                  }}>Today, 12:09 PM</Text>
                
                </View>

              </View>
              
        </ScrollView>

        <ScrollView style={{
            width:Dimensions.get('window').width,
            height:Dimensions.get('window').height
        }}>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        <Text>Ali</Text>
        </ScrollView>
          </ScrollView>
    );
  }
}
