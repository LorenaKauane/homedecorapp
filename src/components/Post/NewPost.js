import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Picker,
  Keyboard,
} from 'react-native';

import * as theme from '../../util/theme';
import styles from './styles/NewPost.style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {postUpdate, postCreate} from '../../actions';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.validate_Id = this.validate_Id.bind(this);
    this.validate_Id();
  }

  static navigationOptions = ({navigation}) => {
    return {
      header: (
        <View style={[styles.flex, styles.row, styles.header]}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}>
            <FontAwesome
              name="chevron-left"
              color={theme.colors.black}
              size={theme.sizes.font * 1}
            />
          </TouchableOpacity>
        </View>
      ),
      headerTransparent: true,
    };
  };

  validate_Id = () => {
    if (!this.props._id) {
      this.props.postUpdate({
        prop: 'postImage',
        value:
          'https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg',
      });
    }
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.props.postUpdate({
          prop: 'postImage',
          value: response.uri,
        });
      }
    });
  };

  save = () => {
    let bodyFormData = new FormData();

    bodyFormData.append('category', this.props.category);
    bodyFormData.append('title', this.props.title);
    bodyFormData.append('description', this.props.description);
    bodyFormData.append('file', {
      uri: this.props.postImage,
      name: 'photo.png',
      filename: 'imageName.png',
      type: 'image/png',
    });

    //bodyFormData.append('user', 'ID FIX :( ');

    this.props.postCreate(bodyFormData, this.props.navigation);
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{justifyContent: 'space-between'}}>
          <Text style={{fontSize: theme.sizes.font * 1.4, fontWeight: 'bold'}}>
            New Post
          </Text>
        </View>
        <View style={[styles.column, styles.posts]}>
          <View>
            <TouchableOpacity
              style={styles.back}
              onPress={this.handleChoosePhoto}>
              <Image
                style={styles.avatar}
                source={{uri: this.props.postImage}}
              />
            </TouchableOpacity>
          </View>
          <View style={{top: 50}}>
            <Text style={{top: 5}}>Title</Text>
            <TextInput
              style={{height: 40, borderBottomWidth: 1}}
              placeholder="Title"
              autoCorrect={false}
              value={this.props.title}
              onChangeText={title =>
                this.props.postUpdate({prop: 'title', value: title})
              }
            />
          </View>
          <View style={{top: 50}}>
            <Text style={{top: 5}}>Description</Text>
            <TextInput
              value={this.props.description}
              style={{height: 40, borderBottomWidth: 1}}
              placeholder="Description"
              onChangeText={description =>
                this.props.postUpdate({
                  prop: 'description',
                  value: description,
                })
              }
            />
          </View>

          <View style={{top: 50}}>
            <Text style={{top: 5}}>Categories</Text>
            <Picker
              selectedValue={this.props.category}
              style={{height: 50, borderBottomWidth: 1}}
              onValueChange={category =>
                this.props.postUpdate({prop: 'category', value: category})
              }>
              <Picker.Item label="Bedroom" value="Bedroom" />
              <Picker.Item label="Closet" value="Closet" />
              <Picker.Item label="Dining Room" value="Dining Room" />
              <Picker.Item label="Garage" value="Garage" />
            </Picker>
          </View>

          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={this.save}
              style={{top: 100}}>
              <Text style={styles.button}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const mapStateToProps = state => {
  const {_id, category, title, description, postImage, status} = state.posts;
  return {_id, category, title, description, postImage, status};
};

export default connect(
  mapStateToProps,
  {postUpdate, postCreate},
)(NewPost);
