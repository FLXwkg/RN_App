// import { View } from 'react-native'
// import styles from '../styles/ResultStyle'
import { Button, Layout } from '@ui-kitten/components'
import { sanitizeClarifaiResponse } from '../utils/Strings'

function ResultScreen ({ route, navigation }) {
  const { res } = route.params

  const data = sanitizeClarifaiResponse(res)

  console.log(JSON.stringify(data, null, 2))
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <List
        style={styles.container}
        data={concepts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ResultItem item={item} />
        )}
        ListHeaderComponent={() => (
          <View style={styles.listItem}>
            <Text style={{ fontWeight: 'bold' }}>Concept</Text>
            <Text style={{ fontWeight: 'bold' }}>Précision</Text>
          </View>
        )}
      /> */}
      <Button onPress={() => navigation.goBack()}>Retour</Button>
      {/* <Text>{JSON.stringify(result, null, 2)}</Text> */}
    </Layout>
  )
}

export default ResultScreen
