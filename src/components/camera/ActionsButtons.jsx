import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../../styles/CameraStyle'
import { Spinner, useTheme } from '@ui-kitten/components'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { CameraType } from 'react-native-camera-kit'
import { View } from 'react-native'

function ActionsButtons ({
  handleTakePicture,
  setCameraType,
  cameraType,
  setTorchEnabled,
  torchEnabled,
  isLoading
}) {
  const theme = useTheme()
  return (
    <View style={styles.actionButtons}>
      <TouchableOpacity
        onPress={() => setTorchEnabled(!torchEnabled)}
        style={{
          ...styles.button,
          padding: 15,
          backgroundColor:
          cameraType === CameraType.Front
            ? theme['color-basic-transparent-500']
            : torchEnabled
              ? theme['color-primary-default']
              : theme['background-basic-color-1']
        }}
        disabled={isLoading || cameraType === CameraType.Front}
      >
        <Icon
          name={torchEnabled ? 'flashlight-off' : 'flashlight'}
          size={20}
          color={torchEnabled ? 'white' : 'black'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTakePicture} style={styles.button} disabled={isLoading}>
        {
          isLoading
            ? <Spinner size='large' />
            : <Icon name='camera' size={30} color='black' />
        }
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setCameraType(cameraType === CameraType.Back ? CameraType.Front : CameraType.Back)}
        style={{ ...styles.button, padding: 15 }}
        disabled={isLoading}
      >
        <Icon
          name={cameraType === CameraType.Back ? 'camera-front-variant' : 'camera-rear-variant'}
          size={20}
          color='black'
        />
      </TouchableOpacity>
    </View>
  )
}

export default ActionsButtons
