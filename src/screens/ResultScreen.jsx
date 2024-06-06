import { KeyboardAvoidingView, ScrollView } from 'react-native'
import styles from '../styles/ResultStyle'
import { Button, Input } from '@ui-kitten/components'
import { sanitizeClarifaiResponse } from '../utils/Strings'
import InputTags from '../components/InputTags'
import { useState } from 'react'

function ResultScreen ({ route, navigation }) {
  const { res } = route.params
  const data = sanitizeClarifaiResponse(res)
  const [formData, setFormData] = useState({
    title: data.title,
    description: data.description,
    tags: data.tags
  })

  const handleAddTag = (tag) => {
    setFormData({ ...formData, tags: [...formData.tags, tag] })
  }

  const handleRemoveTag = (tag) => {
    setFormData({ ...formData, tags: formData.tags.filter((t) => t !== tag) })
  }

  const handleReset = () => {
    setFormData({
      title: data.title,
      description: data.description,
      tags: data.tags
    })
  }

  console.log(JSON.stringify(data, null, 2))
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1, padding: 10, gap: 10 }}>
        <Input
          name='title'
          label='Titre du produit'
          style={styles.titleInput}
          size='large'
          placeholder='Titre du produit'
          value={formData.title}
          onChangeText={(text) => setFormData({ ...formData, description: text })}
        />
        <Input
          style={styles.descriptionInput}
          label='Description du produit'
          size='large'
          multiline
          numberOfLines={10}
          placeholder='Description du produit'
          value={formData.description}
          onChangeText={(text) => setFormData({ ...formData, description: text })}
        />
        <InputTags
          tags={formData.tags}
          onRemoveTag={handleRemoveTag}
          onAddTag={handleAddTag}
        />
        <Button onPress={() => {}}>Valider</Button>
        <Button onPress={handleReset}>Réinitialiser</Button>
        <Button status='danger' onPress={() => navigation.goBack()}>Retour</Button>
        {/* <Text>{JSON.stringify(result, null, 2)}</Text> */}
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default ResultScreen