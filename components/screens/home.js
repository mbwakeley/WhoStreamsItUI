import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import NewShowForm from "./NewShowForm";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllShows,
  removeShow,
  addNewShow,
  editShow
} from "../../store/shows/actions";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllShows());
  }, [dispatch]);

  const shows = useSelector(state => state.shows.all);
  // console.log("shows", shows);

  // This is to add a show
  const addShow = show => {
    // console.log(show, "add show");
    dispatch(addNewShow(show));
    setModalOpen(false);
  };

  //This is how to add a show on the client side.
  // const addShow = show => {
  //   console.log(show, "addshow");
  //   show.id = Math.random().toString();
  //   setShows(currentShow => {
  //     return [show, ...currentShow];
  //   });
  //   setModalOpen(false);
  // };

  //This is to edit shows on the client side
  // const editOneShow = updatedShow => {
  //   console.log(updatedShow, "updatedShow");
  //   setShows(currentShow => {
  //     return [updatedShow, ...currentShow];
  //   });
  // };

  //This is to edit a show on server side
  // const editOneShow = (updatedShow, id) => {
  //   console.log(updatedShow, "updatedshow home conponent");
  //   dispatch(editShow(updatedShow, id));
  // };

  //This is to delete show on the server side
  const handleDelete = id => {
    dispatch(removeShow(id));
  };

  //This is to delete a show
  // This is on client side only
  // const handleDelete = id => {
  //   setShows(prevShows => {
  //     return prevShows.filter(show => show.id != id);
  //   });
  // };

  // const [shows, setShows] = useState([
  //   {
  //     id: 1,
  //     title: "My Hero Academia",
  //     image:
  //       "https://ib1.hulu.com/user/v3/artwork/36e318dc-3daf-47fb-8219-9e3cb5cd28f2?base_image_bucket_name=image_manager&base_image=fdc7e972-fd46-4a23-bf7c-f1f9ab83053d&size=400x600&format=jpeg",
  //     genre: "Anime|Action|Adventure",
  //     description:
  //       "Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially challenging for a kid with no superpowers. That’s right, in a world where eighty percent of the population has some kind of super-powered “quirk,” Izuku was unlucky enough to be born completely normal. But that’s not enough to stop him from enrolling in one of the world’s most prestigious hero academies.",
  //     platform: "crunchyroll|Hulu|YouTubeTV|Sling TV",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 2,
  //     title: "Superstore",
  //     image:
  //       "https://tvguide1.cbsistatic.com/mediabin/showcards/tvshows/800000-900000/800949-superstore.png",
  //     genre: "Family|Sitcom|Comedy",
  //     description:
  //       "Revolving around a group of employees at a big-box store, it examines love, friendship and the beauty of everyday moments.",
  //     platform: "Hulu|YouTube TV|Sling|NBC|Sling",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 3,
  //     title: "Game of Thrones",
  //     image:
  //       "https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
  //     genre: "Action|Drama|Adventure",
  //     description:
  //       "Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.",
  //     platform: "HBO Now|Hulu|Amazon Prime|YouTube",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 4,
  //     title: "Friends",
  //     image:
  //       "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpg",
  //     genre: "Comedy|Romance",
  //     description:
  //       "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
  //     platform: "Hulu|YouTube TV|fubo TV|Amazon Prime",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 5,
  //     title: "Russian Doll",
  //     image:
  //       "https://www.gstatic.com/tv/thumb/tvbanners/16356645/p16356645_b_v8_ab.jpg",
  //     genre: "Mystery ",
  //     description:
  //       "The series follows Nadia Vulvokov (Lyonne), a game developer who repeatedly dies and relives the same night in an ongoing time loop and tries to solve it, leading to her finding Alan Zaveri in the same situation (portrayed by Charlie Barnett). It also stars Greta Lee, Yul Vazquez, and Elizabeth Ashley.",
  //     platform: "Netflix",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 6,
  //     title: "Stranger Things",
  //     image:
  //       "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg",
  //     genre: "Sci-Fi|Horror",
  //     description:
  //       "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  //     platform: "Netflix",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 7,
  //     title: "The Witcher",
  //     image:
  //       "https://www.gstatic.com/tv/thumb/tvbanners/17580215/p17580215_b_v8_ac.jpg ",
  //     genre: "Drama",
  //     description:
  //       "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  //     platform: "Netflix",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 8,
  //     title: "The Boys",
  //     image:
  //       "https://www.gstatic.com/tv/thumb/tvbanners/16826253/p16826253_b_v8_ac.jpg",
  //     genre: "Drama",
  //     description:
  //       "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  //     platform: "Amazon Prime Video",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 9,
  //     title: "Doctor Who",
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/tr/thumb/0/0d/Doctor_Who_11._sezon.png/220px-Doctor_Who_11._sezon.png",
  //     genre: "Drama",
  //     description:
  //       "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  //     platform: "YouTube TV|Philo|fuboTV|",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 10,
  //     title: "Watchmen",
  //     image:
  //       "https://www.gstatic.com/tv/thumb/tvbanners/17308019/p17308019_b_v8_ac.jpg",
  //     genre: "Sci-fi",
  //     description:
  //       "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  //     platform: "HBO|Hulu|Amazon Prime Video|YouTube",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 11,
  //     title: "The Mandalorian",
  //     image:
  //       "https://www.gstatic.com/tv/thumb/tvbanners/17612208/p17612208_b_v8_aa.jpg",
  //     genre: "Action",
  //     description:
  //       "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  //     platform: "Disney+",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 12,
  //     title: "The Expanse",
  //     image:
  //       "https://www.gstatic.com/tv/thumb/tvbanners/17179505/p17179505_b_v8_ad.jpg",
  //     genre: "Drama",
  //     description:
  //       "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  //     platform: "Amazon Prime Video",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 13,
  //     title: "Jack Ryan ",
  //     image:
  //       "https://www.gstatic.com/tv/thumb/tvbanners/17351835/p17351835_b_v8_ac.jpg",
  //     genre: "Action",
  //     description:
  //       "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  //     platform: "Amazon Prime",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 14,
  //     title: "Brooklyn Nine-Nine",
  //     image:
  //       "https://www.gstatic.com/tv/thumb/tvbanners/17602950/p17602950_b_v8_ab.jpg",
  //     genre: "Comedy",
  //     description:
  //       "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  //     platform: "NBC|Hulu|YouTube TV|Sling TV|fuboTV",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 15,
  //     title: "The Good Place",
  //     image:
  //       "https://www.gstatic.com/tv/thumb/tvbanners/17156086/p17156086_b_v8_ab.jpg",
  //     genre: "SitCome|Comedy",
  //     description:
  //       "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  //     platform: "NBC|Hulu|YouTube TV|Sling TV|fuboTV",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 16,
  //     title: "Kimetsu no Yaiba",
  //     image:
  //       "https://animefable.com/wp-content/uploads/2019/09/Kimetsu-no-Yaiba-Tanjiro-has-a-hidden-power.jpg",
  //     genre: "Anime|Action|Adventure",
  //     description:
  //       "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  //     platform: "Cruchyroll|Hulu",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 17,
  //     title: "Dr. Stone",
  //     image: "https://cdn.myanimelist.net/images/anime/1613/102576l.jpg",
  //     genre: "Anime",
  //     description:
  //       "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  //     platform: "Crunchyroll",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 18,
  //     title: "Black Clover",
  //     image:
  //       "https://www.animefillerlist.com/sites/default/files/styles/anime_poster/public/black_clover_5.jpg?itok=bysAuZyI",
  //     genre: "Anime|Action|Adventure",
  //     description:
  //       "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  //     platform: "Cruchyroll|Hulu",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 19,
  //     title: "Hunter × Hunter",
  //     image:
  //       "https://cdn11.bigcommerce.com/s-l71eudan7b/images/stencil/1280x1280/products/427/861/BB820HunterHunterGrouponmap__20406.1557962200.jpg?c=2&imbypass=on",
  //     genre: "Anime|Action|Adventure",
  //     description:
  //       "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  //     platform: "Cruchyroll|Hulu",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 20,
  //     title: "Attack on Titan",
  //     image: "https://images-na.ssl-images-amazon.com/images/I/91M9VaZWxOL.jpg",
  //     genre: "Anime",
  //     description:
  //       "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  //     platform: "Cruchyroll",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 21,
  //     title: "Fire Force",
  //     image:
  //       "https://ib.hulu.com/user/v3/artwork/5973d358-1997-47d0-942d-e85b455ed9db?base_image_bucket_name=image_manager&base_image=e7777ba6-7f66-41fd-9d54-8f7bd846cbf3&size=400x600&format=jpeg",
  //     genre: "Anime",
  //     description:
  //       "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  //     platform: "Cruchyroll|Hulu",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 22,
  //     title: "Sherlock",
  //     image:
  //       "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
  //     genre: "Comedy",
  //     description:
  //       "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  //     platform: "Netflix",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 23,
  //     title: "Chilling Adventures of Sabrina",
  //     image:
  //       "https://www.gstatic.com/tv/thumb/tvbanners/17710206/p17710206_b_v8_aa.jpg",
  //     genre: "Drama|Horror",
  //     description:
  //       "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  //     platform: "Netflix",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 24,
  //     title: "Lost in Space",
  //     image:
  //       "https://www.gstatic.com/tv/thumb/tvbanners/17467742/p17467742_b_v8_aa.jpg",
  //     genre: "Sci-fi",
  //     description:
  //       "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  //     platform: "Netflix",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 25,
  //     title: "The Handmaid's Tale",
  //     image:
  //       "https://www.gstatic.com/tv/thumb/tvbanners/16580107/p16580107_b_v8_aa.jpg",
  //     genre: "Sci-fi|Drama",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
  //     platform: "Hulu",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 26,
  //     title: "Saturday Night Live",
  //     image:
  //       "https://www.gstatic.com/tv/thumb/tvbanners/17312881/p17312881_b_v8_aa.jpg",
  //     genre: "Comedy",
  //     description:
  //       "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  //     platform: "Hulu|NBC|YouTube|Sling TV|fubo TV",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 27,
  //     title: "GLOW (TV series)",
  //     image:
  //       "https://www.gstatic.com/tv/thumb/tvbanners/17003042/p17003042_b_v8_aa.jpg",
  //     genre: "Drama|Comedy|",
  //     description:
  //       "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  //     platform: "Hulu",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 28,
  //     title: "One Punch Man",
  //     image:
  //       "https://m.media-amazon.com/images/M/MV5BMzQxMzE5NzM2NV5BMl5BanBnXkFtZTgwMDQ4NTUyNzE@._V1_.jpg",
  //     genre: "Anime",
  //     description:
  //       "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  //     platform: "Crunchyroll",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 29,
  //     title: "Naruto",
  //     image:
  //       "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpg",
  //     genre: "Anime",
  //     description:
  //       "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  //     platform: "Crunchyroll|Netflix|Hulu",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   },
  //   {
  //     id: 30,
  //     title: "Unbreakable Kimmy Schmidt",
  //     image:
  //       "https://m.media-amazon.com/images/M/MV5BMTgyNTQyNjUwN15BMl5BanBnXkFtZTgwNjMwNjUzNzM@._V1_.jpg",
  //     genre: "Comedy",
  //     description:
  //       "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  //     platform: "Netflix",
  //     created_at: "2020-02-08T19:50:50.683Z",
  //     updated_at: "2020-02-08T19:50:50.683Z"
  //   }
  // ]);

  return (
    <ImageBackground
      source={require("../assets/greyBackground.jpg")}
      style={styles.background}
    >
      <View style={globalStyles.container}>
        <Modal visible={modalOpen} animationType="slide">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <MaterialIcons
                name="close"
                size={24}
                style={{ ...styles.modalToggle, ...styles.modalClose }}
                onPress={() => setModalOpen(false)} //This is to close the modal my setting the usestate to false
              />
              <NewShowForm addShow={addShow} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        {/* The onpress to true is open the modal  */}
        <MaterialIcons
          name="add"
          size={24}
          style={styles.modalToggle}
          onPress={() => setModalOpen(true)}
        />
        <FlatList
          data={shows}
          numColumns={3}
          keyExtractor={item => item.image}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ShowDetails", {
                  item,
                  handleDelete
                })
              }
            >
              <Image
                style={styles.image}
                source={{ uri: item.image }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
    color: "white"
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
    color: "black",
    borderWidth: 1,
    borderColor: "black"
  },
  modalContent: {
    flex: 1
  },
  image: {
    height: 110,
    width: 110,
    margin: 5
  },
  background: {
    width: "100%",
    height: "100%"
  }
});
