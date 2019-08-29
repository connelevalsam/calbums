import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F0',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
        color: 'skyblue',
    },
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
        marginHorizontal: 5,
        marginTop: 10,
    },
    content: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    },
    contentHeader: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 8,
    },
    thumbnailStyle: {
      width: 70,
      height:70
    },
    thumbnailConatainer: {
      flex: 1, 
      backgroundColor: '#F8F8F0',
      justifyContent: 'center',
      alignItems: 'center'
    },
    imageStyle: {
      flex: 1,
      width: null,
      height: 300,
    },
    buttonContainer: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#007aff',
      marginHorizontal: 5,
    },
    button: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10,
    },

    // AppIntro
    introContainer: {
      flex: 1,
      paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    introImage: {
      flex: 1,
      width: '100%',
      height: '100%',
    //   resizeMode: 'stretch',
    },
    introTitle: {
      fontSize: 26,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
    },
    introText: {
      color: '#fff',
      fontSize: 20,
      alignSelf: 'center',
    },
  });

export default styles;
