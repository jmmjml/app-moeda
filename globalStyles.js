import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BFD7EA",
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItens: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  title: {
    fontFamily: "OpenSans",
    fontWeight: "bold",
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 35,
    color: '#fff',
  },
  texto: {
    textAlign: 'justify',
    fontSize: 15,
    color: '#fff',
  },
  imagem: {
    width: '25%',
    height: '19%',
    justifyContent: 'center',
    alignItens: 'center',
    alignSelf: 'center',
    paddingTop: 50,
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 70,
    borderColor: '#fff',
    borderStyle:"solid",
    borderWidth: 2,
    borderRadius: 9,
  },
});
