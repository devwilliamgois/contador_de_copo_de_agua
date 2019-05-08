import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground,TouchableOpacity,Image, Animated} from 'react-native';



export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {consumido:0, status:'ruim', pct:'0%','tamanho':-10,'mostra':false}

    this.addCopo = this.addCopo.bind(this);
    this.atualizar = this.atualizar.bind(this);
    this.atualizar = this.atualizar.bind(this);
    this.mudar_De_dia = this.mudar_De_dia.bind(this);
    
  }

  mudar_De_dia(){
    let s = this.state;
    s.tamanho = -10;
    s.consumido = 0;
    s.mostra = false;
    this.setState(s);
    this.atualizar();
  }
  

  addCopo(){
    let s = this.state;
    s.consumido +=200;
    if(s.consumido >= 2000){

    }else{
      s.tamanho += (-50);
    }
    
    this.setState(s);
    this.atualizar();
  }
  
  atualizar(){
    let s = this.state;
    
    s.pct = ((s.consumido/2000)*100).toFixed(0);
    if(s.pct == 100){
      s.status = 'Bom';
      s.mostra = true;
      s.tamanho += (-70);
    }else{
      if(s.pct > 100){
        s.status = 'Otimo';
      }else{
        s.status = 'Ruim';
      }
      
    }
    s.pct += '%';
    this.setState(s);
  }

  render() {
    const altera_style = {
      flex:-1,
      height:800,
      width:null,
      zIndex:2,
      resizeMode: 'cover',
      marginTop:this.state.tamanho
    };

    return (
      <View style={style.body}>
      <View style={style.Interna}>
        <View style={style.infoArea}>
            <View style={style.area}>
                <Text style={style.areaTitulo}>Meta</Text>
                <Text style={style.areaDado}>2000ml</Text>
            </View>
            <View style={style.area}>
                <Text style={style.areaTitulo}>Consumido</Text>
                <Text style={style.areaDado}>{this.state.consumido}ml</Text>
            </View>
            <View style={style.area}>
                <Text style={style.areaTitulo}>Status</Text>
                <Text style={style.areaDado}>{this.state.status}</Text>
            </View>
      </View>

      <View style={style.pctArea}>
        <Text  style={style.pctText}>{this.state.pct}</Text>
      </View>
      <View style={style.btnArea}>
        <TouchableOpacity style={style.btn} onPress={this.addCopo}>
            <Text>Beber 200ml</Text>
        </TouchableOpacity>
      </View>
      { this.state.mostra && 
  

      <View style={[style.btnArea2]}>
        <TouchableOpacity style={[style.btn2]} onPress={this.mudar_De_dia}>
            <Text>Mudar de Dia</Text>
        </TouchableOpacity>
      </View>
    }

      </View>
     
      <Animated.Image  source={require('./images/waterbg.png')} style={altera_style} />

      </View>
    );
  }
}


const style = StyleSheet.create({
  image:{
    zIndex:2
  },
  Interna:{
    backgroundColor:'transparent',
    zIndex:5,
    marginTop:0
  },
  body:{
    flex:1,
    paddingTop:20,
    backgroundColor:'transparent'
  },
  bgimage:{
    
  },
  infoArea:{
    flex:1,
    flexDirection:'row',
    marginTop:50,
    backgroundColor:'transparent'
  },
  area:{
    flex:1,
    alignItems:'center'
  },
  areaTitulo:{
    color:'#45b2fc'
  },
  areaDado:{
    fontSize:20,
    color:'#2b4274',
    fontWeight:'bold'
  },
  pctArea:{
    marginTop:200,
    alignItems:'center'
  },
  pctText:{
    fontSize:70,
    color:'#ffffff',
    backgroundColor:'transparent',
  },
  btnArea:{
      marginTop:30,
      alignItems:'center'
  },
  btnArea2:{
    marginTop:30,
    alignItems:'center',
},
  btn:{
    color:'#000000',
    backgroundColor:'#ffffff',
    padding:10,
    borderRadius:10,
    elevation: 8
  },
  btn2:{
    color:'#ffffff',
    backgroundColor:'green',
    padding:10,
    borderRadius:10,
    elevation: 8
  }
})