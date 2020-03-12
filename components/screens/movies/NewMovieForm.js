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
import { globalStyles } from "../../styles/global.js";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../../shared/FlatButton";
import UploadButton from "../../shared/UploadButton";
import * as ImagePicker from "expo-image-picker";

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

export default function NewMovieForm({ addMovie }) {
  const [image, setImage] = useState(null);
  console.log(addMovie, "addMovie");

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
      <ScrollView>
        <Formik
          initialValues={{
            title: "",
            genre: "",
            description: "",
            platform: "",
            image: "http://dummyimage.com/50x50.jpg/5fa2dd/ffffff"
          }}
          validationSchema={movieSchema}
          onSubmit={values => {
            addMovie(values);
          }}
        >
          {props => (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Movie Title"
                onChangeText={props.handleChange("title")}
                value={props.values.title}
              />
              {/* lets the user know their title needs more text */}
              <Text style={globalStyles.errorText}>
                {props.touched.title && props.errors.title}
              </Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Movie Genre"
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
                placeholder="Movie Description"
                onChangeText={props.handleChange("description")}
                value={props.values.description}
              />
              {/* lets the user know their description needs more text */}
              <Text style={globalStyles.errorText}>
                {props.touched.description && props.errors.description}
              </Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Streaming platform"
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
                  value={props.values.image}
                />
              )}
              <FlatButton text="submit" onPress={props.handleSubmit} />
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}
