import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";
import { globalStyles } from "../../styles/global";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../shared/card";
import { SearchBar } from "react-native-elements";
import { fetchAllUsers, removeUser } from "../../../store/users/actions";

export default function UserList({ navigation }) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  //hooks to pull all the users from the state
  const users = useSelector(state => state.users.all);

  //hooks too pull logged in user from the state
  const currentUser = useSelector(state => state.users.loggedInUser);
  // console.log(currentUser, "current user");

  //Deleting a user on the client side.
  // const handleDelete = id => {
  //   setUsers(prevShows => {
  //     return prevShows.filter(user => user.id != id);
  //   });
  // };

  //Deleting user on server side.
  const handleDelete = id => {
    dispatch(removeUser(id));
  };

  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     username: "Darvidicus",
  //     email: "Darvidicus@overwatch.com",
  //     password: "Junkrat123",
  //     rank: "admin",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 2,
  //     username: "uyuille1",
  //     email: "ktassell1@scribd.com",
  //     password: "V3kjgWxXDg",
  //     rank: "admin",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 3,
  //     username: "cfessler2",
  //     email: "lroyan2@google.com",
  //     password: "cYRckoavoX",
  //     rank: "admin",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 4,
  //     username: "eaish3",
  //     email: "acancott3@wix.com",
  //     password: "DlA4kuVC",
  //     rank: "admin",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 5,
  //     username: "ghawksworth4",
  //     email: "ajermin4@mac.com",
  //     password: "ALhNC7JgJB6y",
  //     rank: "admin",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 6,
  //     username: "agemlbett5",
  //     email: "ttopp5@tuttocitta.it",
  //     password: "JjuRWkHANh0b",
  //     rank: "user",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 7,
  //     username: "hcabral6",
  //     email: "sscarlet6@wix.com",
  //     password: "rU5sCsPN",
  //     rank: "user",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 8,
  //     username: "umarcos7",
  //     email: "bmenier7@tinypic.com",
  //     password: "XS80fFl1lhgH",
  //     rank: "user",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 9,
  //     username: "abalaison8",
  //     email: "mmatzeitis8@stanford.edu",
  //     password: "stzUQFwy",
  //     rank: "user",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 10,
  //     username: "nmarton9",
  //     email: "fbaggally9@google.co.uk",
  //     password: "E0r8GFKEz",
  //     rank: "user",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 11,
  //     username: "spigdena",
  //     email: "gtirreya@yolasite.com",
  //     password: "07zltDf1",
  //     rank: "user",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 12,
  //     username: "wpaikb",
  //     email: "alemmonb@acquirethisname.com",
  //     password: "7p07sKDIgAb",
  //     rank: "user",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 13,
  //     username: "lraglesc",
  //     email: "dhellicarc@meetup.com",
  //     password: "7SHMePUp",
  //     rank: "user",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 14,
  //     username: "snewissd",
  //     email: "medwardsond@cdc.gov",
  //     password: "KuqZOPbxw",
  //     rank: "user",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 15,
  //     username: "vsalamane",
  //     email: "jfilyashine@bloglines.com",
  //     password: "ZDZVzz4VH2",
  //     rank: "user",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 16,
  //     username: "bdodgef",
  //     email: "bgorvinf@a8.net",
  //     password: "faWP8fNRl",
  //     rank: "user",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 17,
  //     username: "sedgesong",
  //     email: "pwitterickg@histats.com",
  //     password: "DacK1FDpG",
  //     rank: "user",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 18,
  //     username: "adeshonh",
  //     email: "fphettish@photobucket.com",
  //     password: "F12yc5ueOLO",
  //     rank: "user",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 19,
  //     username: "jtoffuli",
  //     email: "dbolzeni@elegantthemes.com",
  //     password: "odrjblHTqV",
  //     rank: "user",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   },
  //   {
  //     id: 20,
  //     username: "cclementj",
  //     email: "ikeenerj@php.net",
  //     password: "TbRQbMym5",
  //     rank: "user",
  //     created_at: "2020-02-15T19:46:34.090Z",
  //     updated_at: "2020-02-15T19:46:34.090Z"
  //   }
  // ]);

  //This is for the search bar.
  const updateSearch = search => {
    setSearch(search);
    console.log(search, "search");
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ImageBackground
      source={require("../../assets/greyBackground.jpg")}
      style={styles.background}
    >
      <View style={globalStyles.container}>
        {/* The onpress to true is open the modal  */}
        {currentUser.rank === "admin" ? (
          <View>
            <SearchBar
              lightTheme
              icon={{ type: "font-awesome", name: "search" }}
              onChangeText={updateSearch}
              value={search}
              placeholder="Search for users..."
              style={styles.searchBar}
            />
            <FlatList
              style={{ marginTop: 20 }}
              data={filteredUsers}
              keyExtractor={item => item.username}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("UserDetails", { item, handleDelete })
                  }
                >
                  <Card>
                    <Text style={styles.username}>{item.username}</Text>
                  </Card>
                </TouchableOpacity>
              )}
            />
          </View>
        ) : (
          <View>
            <Card>
              <Text style={styles.username}>
                Username: {currentUser.username}
              </Text>
              <Text style={styles.email}>Email: {currentUser.email}</Text>
              {/* <View style={styles.border} /> */}
            </Card>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  username: {
    fontSize: 30,
    color: "#333"
  },
  email: {
    fontSize: 15,
    color: "#333"
  },
  image: {
    height: 315,
    width: 315,
    margin: 5
  },
  border: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  buttonView: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  background: {
    width: "100%",
    height: "100%"
  },
  searchBar: {
    color: "white"
  }
});
