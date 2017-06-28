import {StyleSheet, PixelRatio} from 'react-native';

module.exports = StyleSheet.create ({

/*index*/  

  indexContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },

/*home*/

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

/*dashboard*/

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

/*dashboard components*/

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

/*login*/  

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
    borderRadius: 10,
  },
  loginSubmit: {
    backgroundColor: 'royalblue',
    padding: 10,
    marginRight: 80,
    marginLeft: 80,
  },

/*signUp*/

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
    color:'black',
    borderRadius: 10,
  },
  signUpSubmit: {
    backgroundColor: 'royalblue',
    padding: 10,
    marginRight: 80,
    marginLeft: 80,
  },

/*profile*/

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
    borderRadius: 10,
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

/*UserList*/  

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
	  height: 80,
	  marginLeft: 10,
	  marginTop: 10,
  	marginBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
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

/*camera*/
   
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

/*geolocation*/

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

/*listview*/

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

/*mapview*/

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

/*image*/

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

/*netInfo*/

  netContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    paddingTop:30,
    marginTop: 30,
  },

/*progress bar*/

  width300 : {
    width : 300
  },

/*slider*/

  slider: {
    height: 10,
    margin: 10,
    width : 25,
  },
  sliderText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
    marginTop : 10
  },

/*pickerDropDown*/

  pickerDropDown : {
    width  : 300,
  },

/*toolbar*/  

  toolbar: {
    backgroundColor: 'black',
    height: 60,
    marginTop : 49,
  },

/*pager*/

  pagerButtons: {
    flexDirection: 'row',
    height: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pagerButton: {
    flex: 1,
    width: 0,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'gray',
  },
  pagerButtonText: {
    color: 'white',
  },
  pagerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  pagerImage: {
    width: 300,
    height: 200,
    padding: 20,
  },
  viewPager: {
    flex: 1,
  },

/*SideMenu*/

  menu: {
    flex: 2,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
    marginTop : 150,
    paddingTop : 150,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuButton: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  menuCaption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  menuWelcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  menuInstructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }

}); 

