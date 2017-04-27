import {StyleSheet, PixelRatio} from 'react-native';

module.exports = StyleSheet.create ({

/* home/Dashboardcomp css*/

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'skyblue',
    backgroundColor:'transparent',
  },

  button : {
    borderWidth: 1,
    borderColor: 'transparent'
  },

  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },

/*dashboard css*/

  dashboardContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },
  dashText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },

/*dashboard components css*/

  dashCompContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },
  dashCompText: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'skyblue',
    fontWeight: 'bold',
  },
  compText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
  compButton : {
    borderWidth: 1,
    borderColor: 'transparent'
  },

/*login css*/  

  loginContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },
  loginText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'grey',
  },
  loginform : {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop : 50,
  },
  loginInput: {
    margin: 15,
    height: 40,
    width: 250,
    borderColor: 'royalblue',
    borderWidth: 1,
    color: 'black',
  },
  loginSubmit: {
    backgroundColor: 'royalblue',
    padding: 10,
    marginRight: 80,
    marginLeft: 80,
  },

/*signUp css*/

  signUpContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },
  signUpText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'grey',
  },
  signUpform : {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop : 50,
  },
  signUpInput: {
    margin: 15,
    height: 40,
    width: 250,
    borderColor: 'royalblue',
    borderWidth: 1,
    color:'black'
  },
  signUpSubmit: {
    backgroundColor: 'royalblue',
    padding: 10,
    marginRight: 80,
    marginLeft: 80,
  },

/*profile css*/

  profileContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },
  profileForm: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  profileIntext : {
    marginTop : 20
  },
  profileSubmit: {
    backgroundColor: 'silver',
    padding: 10,
    marginTop : 30,
    marginRight: 80,
    marginLeft: 80,
  },
  close : {
    padding: 10,
    marginTop : 30,
    marginRight: 80,
    marginLeft: 80,
    borderRadius: 5,
  },
  profileModal: {
    justifyContent: 'flex-start',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bfff'
  },

  editProfileContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    paddingTop:20,
    marginTop: 20,
  },
  editProfileInput: {
    margin: 15,
    height: 40,
    width: 250,
    borderColor: 'grey',
    borderWidth: 1,
    color: 'black',
  },
  editProfileText : {
    marginTop : 20
  },
  editProfileSubmit: {
    backgroundColor: 'silver',
    padding: 10,
    marginTop : 30,
    marginRight: 80,
    marginLeft: 80,
  },

/*UserList css*/  

  userListContainer: {
	  paddingTop: 20,
	  marginTop: 20,
    height: 500,	
	},
	listText: {
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
	userCard: {
	  backgroundColor: 'burlywood',
	  width: (800 / 2) - 50,
	  height: 100,
	  marginLeft: 10,
	  marginTop: 10,
  	marginBottom: 2
	},
	bigblue: {
    color: 'blue',
  },
  red: {
    color: 'green',
  },
   listOUserContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },

/*camera css*/
   
  cameraContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: '#FFF',
    marginBottom: 15,
  },
  cancel: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 17,
  },

/*geolocation css*/

  geoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    paddingTop:30,
    marginTop: 30,
  },

/*listview css*/

	listContainer: {
	  paddingTop:20,
	  marginTop: 20,
    height: 500,
	},
	listItem: {
	  fontSize: 20,
	  fontWeight: 'bold',
	  color : 'darkolivegreen',
	},
	img : {
		height : 200,
		width : 250
	},

/*mapview css*/

  listContainer: {
	  paddingTop:50
	},
	map: {
	  height : 400,
	  marginTop : 80 ,	
	  position: 'absolute',
    top: 0,
    left: 0, 
    flex : 1
	},

/*image css*/

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  },

/*netInfo css*/

  netContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    paddingTop:30,
    marginTop: 30,
  }
}); 

