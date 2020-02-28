import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../../shared/FlatButton";

const userSchema = yup.object({
  username: yup
    .string()
    .required()
    .min(4),
  email: yup
    .string()
    .required()
    .min(4),
  password: yup
    .string()
    .required()
    .min(4)
});

export default function EditUserForm({ editOneUser, item }) {
  const id = item.id;
  //   const currentUser = useSelector(state => state.users.loggedInUser);
  console.log(editOneUser, item.id, "editOneUser");

  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          username: item.username,
          email: item.email,
          password: item.password,
          rank: item.rank
        }}
        validationSchema={userSchema}
        onSubmit={values => {
          editOneUser(values, id);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder={item.username}
              onChangeText={props.handleChange("username")}
              value={props.values.username}
            />
            {/* lets the user know their username needs more text */}
            <Text style={globalStyles.errorText}>
              {props.touched.username && props.errors.username}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder={item.email}
              onChangeText={props.handleChange("email")}
              value={props.values.email}
            />
            {/* lets the user know their email needs more text */}
            <Text style={globalStyles.errorText}>
              {props.touched.email && props.errors.email}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder={item.password}
              onChangeText={props.handleChange("password")}
              value={props.values.password}
            />
            {/* lets the user know their password needs more text */}
            <Text style={globalStyles.errorText}>
              {props.touched.password && props.errors.password}
            </Text>
            <FlatButton text="Save" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
