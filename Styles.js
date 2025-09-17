import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 10
  },
  telaDeResultado: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 10
  },
  containerNumeral: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
  },
  botaoNumeral: {
    backgroundColor: 'lightgray',
    padding: 20,
    borderRadius: 20,
    marginLeft: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  }

});