import React from "react";
import { TextInput, View, Text } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/FlatButton";

const showSchema = yup.object({
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

export default function NewShowForm({ addShow }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", genre: "", description: "", platform: "" }}
        validationSchema={showSchema}
        onSubmit={values => {
          addShow(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Show Title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />
            {/* lets the user know their title needs more text */}
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Show Genre"
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
              placeholder="Show Description"
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
            <FlatButton text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
