import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#406372',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 48,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#333333',
    fontSize: 20,
  },
  workoutPlansContainer: {
    flex: 1,
    backgroundColor: '#333333',
    padding: 20,
  },
  workoutPlanButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  workoutPlanButtonText: {
    color: '#333333',
    fontSize: 18,
  },
  dayContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dayTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 10,
  },
  tableContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  tableTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginVertical: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  tableHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  tableInput: {
    height: 30,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 5,
    padding: 5,
    width: 70,
    textAlign: 'center',
  },
  doneButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#333333',
    fontSize: 18,
  },
});

export default styles;
