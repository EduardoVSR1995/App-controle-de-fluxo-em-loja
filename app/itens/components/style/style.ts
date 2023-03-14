import { StyleSheet } from 'react-native'; 

export class allStyle{

  style(){
   return StyleSheet.create({
    fontHeader: {
      fontFamily: 'TiltNeon-Regular' ,
      fontSize:35,
    },
    fonts: {
      fontFamily: 'TiltNeon-Regular' ,
      fontSize: 20,
    },
    image: {
      height:20,
      width: 20,
    },
    activit: {
      flexDirection:'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      height: '100%' ,
    },
    input: {
      marginTop: 10 ,
      borderRadius:20,
      height: 80,
      color: 'black',
      borderColor: 'gray',
      borderWidth: 1,
    },
    header: {
      height: 100,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  });
}
}