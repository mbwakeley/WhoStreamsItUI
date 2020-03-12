import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  Image,
  ScrollView
} from "react-native";
import { globalStyles } from "../../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import * as ImagePicker from "expo-image-picker";
import UploadButton from "../../shared/UploadButton.js";
import FlatButton from "../../shared/FlatButton";

const movieSchema = yup.object({
  title: yup
    .string()
    .required()
    .min(4),
  genre: yup
    .string()
    .required()
    .min(4),
  description: yup
    .string()
    .required()
    .min(8),
  platform: yup
    .string()
    .required()
    .min(4)
});

export default function EditMovieForm({ editOneMovie, item }) {
  const [image, setImage] = useState(null);
  const id = item.id;
  // console.log(editOneMovie, item.id, "editOneMovie");

  selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: item.title,
          genre: item.genre,
          description: item.description,
          platform: item.platform,
          image: item.image
        }}
        validationSchema={movieSchema}
        onSubmit={values => {
          editOneMovie(values, id);
          console.log("values", values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder={item.title}
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />
            {/* lets the user know their title needs more text */}
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder={item.genre}
              onChangeText={props.handleChange("genre")}
              value={props.values.genre}
            />
            {/* lets the user know their genre needs more text */}
            <Text style={globalStyles.errorText}>
              {props.touched.genre && props.errors.genre}
            </Text>

            <TextInput
              style={globalStyles.input}
              multiline
              minHeight={80}
              placeholder={item.description}
              onChangeText={props.handleChange("description")}
              value={props.values.description}
            />
            {/* lets the user know their description needs more text */}
            <Text style={globalStyles.errorText}>
              {props.touched.description && props.errors.description}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder={item.platform}
              onChangeText={props.handleChange("platform")}
              value={props.values.platform}
            />
            {/* lets the user know their platform needs more text */}
            <Text style={globalStyles.errorText}>
              {props.touched.platform && props.errors.platform}
            </Text>
            <UploadButton text="Upload Photo" onPress={() => selectImage()} />
            {image && (
              <Image
                source={{ uri: image }}
                style={{
                  alignSelf: "center",
                  width: 200,
                  height: 200,
                  marginBottom: 10
                }}
                value={"http://dummyimage.com/50x50.jpg/5fa2dd/ffffff"}
              />
            )}
            <FlatButton text="Save" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
