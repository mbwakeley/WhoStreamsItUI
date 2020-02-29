import React from "react";
import { TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../../shared/FlatButton";
import { useSelector } from "react-redux";

const showSchema = yup.object({
  content: yup
    .string()
    .required()
    .min(4)
});

export default function NewShowUpdateForm({ addShowUpdate, item }) {
  const id = item.id;
  const currentUser = useSelector(state => state.users.loggedInUser);
  console.log(currentUser, item.id, "add show details");

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          show_id: id,
          user_id: currentUser.id,
          content: ""
        }}
        validationSchema={showSchema}
        onSubmit={values => {
          addShowUpdate(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Submit update request"
              onChangeText={props.handleChange("content")}
              value={props.values.content}
            />
            {/* lets the user know their content needs more text */}
            <Text style={globalStyles.errorText}>
              {props.touched.content && props.errors.content}
            </Text>
            <FlatButton text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
