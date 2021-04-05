import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ImageUploadScreen = () => {
  const [photo, setphoto] = React.useState(null);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {photo && (
        <Image source={{uri: photo.uri}} style={{width: 300, height: 300}} />
      )}
      <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
    </View>
  );
};
export default ImageUploadScreen;
