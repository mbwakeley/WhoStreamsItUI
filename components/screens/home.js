import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import NewShowForm from "./NewShowForm";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [shows, setShows] = useState([
    {
      id: 1,
      title: "My Hero Academia",
      image: "http://google.com/search?tbm=isch&q=My+Hero+Academia",
      genre: "Anime|Action|Adventure",
      description:
        "Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially challenging for a kid with no superpowers. That’s right, in a world where eighty percent of the population has some kind of super-powered “quirk,” Izuku was unlucky enough to be born completely normal. But that’s not enough to stop him from enrolling in one of the world’s most prestigious hero academies.",
      platform: "crunchyroll|Hulu|YouTubeTV|Sling TV",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 2,
      title: "Superstore",
      image:
        "https://tvguide1.cbsistatic.com/mediabin/showcards/tvshows/800000-900000/800949-superstore.png",
      genre: "Family|Sitcom|Comedy",
      description:
        "Revolving around a group of employees at a big-box store, it examines love, friendship and the beauty of everyday moments.",
      platform: "Hulu|YouTube TV|Sling|NBC|Sling",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 3,
      title: "Game of Thrones",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      genre: "Action|Drama|Adventure",
      description:
        "Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.",
      platform: "HBO Now|Hulu|Amazon Prime|YouTube",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 4,
      title: "Friends",
      image: "http://dummyimage.com/250x172.jpg/5fa2dd/ffffff",
      genre: "Comedy|Romance",
      description:
        "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
      platform: "Hulu|YouTube TV|fubo TV|Amazon Prime",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 5,
      title: "Russian Doll",
      image:
        "https://www.gstatic.com/tv/thumb/tvbanners/16356645/p16356645_b_v8_ab.jpg",
      genre: "Mystery ",
      description:
        "The series follows Nadia Vulvokov (Lyonne), a game developer who repeatedly dies and relives the same night in an ongoing time loop and tries to solve it, leading to her finding Alan Zaveri in the same situation (portrayed by Charlie Barnett). It also stars Greta Lee, Yul Vazquez, and Elizabeth Ashley.",
      platform: "Netflix",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 6,
      title: "Stranger Things",
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg",
      genre: "Sci-Fi|Horror",
      description:
        "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      platform: "Netflix",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 7,
      title: "The Witcher",
      image:
        "https://www.gstatic.com/tv/thumb/tvbanners/17580215/p17580215_b_v8_ac.jpg ",
      genre: "Drama",
      description:
        "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      platform: "Netflix",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 8,
      title: "The Boys",
      image:
        "https://www.gstatic.com/tv/thumb/tvbanners/16826253/p16826253_b_v8_ac.jpg",
      genre: "Drama",
      description:
        "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      platform: "Amazon Prime Video",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 10,
      title: "Watchmen",
      image:
        "https://www.gstatic.com/tv/thumb/tvbanners/17308019/p17308019_b_v8_ac.jpg",
      genre: "Sci-fi",
      description:
        "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      platform: "HBO|Hulu|Amazon Prime Video|YouTube",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 11,
      title: "The Mandalorian",
      image:
        "https://www.gstatic.com/tv/thumb/tvbanners/17612208/p17612208_b_v8_aa.jpg",
      genre: "Action",
      description:
        "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      platform: "Disney+",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 12,
      title: "The Expanse",
      image:
        "https://www.gstatic.com/tv/thumb/tvbanners/17179505/p17179505_b_v8_ad.jpg",
      genre: "Drama",
      description:
        "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
      platform: "Amazon Prime Video",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 13,
      title: "Jack Ryan ",
      image:
        "https://www.gstatic.com/tv/thumb/tvbanners/17351835/p17351835_b_v8_ac.jpg",
      genre: "Action",
      description:
        "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      platform: "Amazon Prime",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 14,
      title: "Brooklyn Nine-Nine",
      image:
        "https://www.gstatic.com/tv/thumb/tvbanners/17602950/p17602950_b_v8_ab.jpg",
      genre: "Comedy",
      description:
        "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      platform: "NBC|Hulu|YouTube TV|Sling TV|fuboTV",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 15,
      title: "The Good Place",
      image:
        "https://www.gstatic.com/tv/thumb/tvbanners/17156086/p17156086_b_v8_ab.jpg",
      genre: "SitCome|Comedy",
      description:
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      platform: "NBC|Hulu|YouTube TV|Sling TV|fuboTV",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 16,
      title: "Kimetsu no Yaiba",
      image:
        "https://animefable.com/wp-content/uploads/2019/09/Kimetsu-no-Yaiba-Tanjiro-has-a-hidden-power.jpg",
      genre: "Anime|Action|Adventure",
      description:
        "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      platform: "Cruchyroll|Hulu",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 17,
      title: "Dr. Stone",
      image: "https://cdn.myanimelist.net/images/anime/1613/102576l.jpg",
      genre: "Anime",
      description:
        "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      platform: "Crunchyroll",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 18,
      title: "Black Clover",
      image:
        "https://www.animefillerlist.com/sites/default/files/styles/anime_poster/public/black_clover_5.jpg?itok=bysAuZyI",
      genre: "Anime|Action|Adventure",
      description:
        "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      platform: "Cruchyroll|Hulu",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 19,
      title: "Hunter × Hunter",
      image:
        "https://cdn11.bigcommerce.com/s-l71eudan7b/images/stencil/1280x1280/products/427/861/BB820HunterHunterGrouponmap__20406.1557962200.jpg?c=2&imbypass=on",
      genre: "Anime|Action|Adventure",
      description:
        "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      platform: "Cruchyroll|Hulu",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 20,
      title: "Attack on Titan",
      image: "https://images-na.ssl-images-amazon.com/images/I/91M9VaZWxOL.jpg",
      genre: "Anime",
      description:
        "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
      platform: "Cruchyroll",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 21,
      title: "Fire Force",
      image:
        "https://ib.hulu.com/user/v3/artwork/5973d358-1997-47d0-942d-e85b455ed9db?base_image_bucket_name=image_manager&base_image=e7777ba6-7f66-41fd-9d54-8f7bd846cbf3&size=400x600&format=jpeg",
      genre: "Anime",
      description:
        "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      platform: "Cruchyroll|Hulu",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 22,
      title: "Sherlock",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
      genre: "Comedy",
      description:
        "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
      platform: "Netflix",
      approved: false,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 23,
      title: "Chilling Adventures of Sabrina",
      image:
        "https://www.gstatic.com/tv/thumb/tvbanners/17710206/p17710206_b_v8_aa.jpg",
      genre: "Drama|Horror",
      description:
        "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      platform: "Netflix",
      approved: false,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 24,
      title: "Lost in Space",
      image:
        "https://www.gstatic.com/tv/thumb/tvbanners/17467742/p17467742_b_v8_aa.jpg",
      genre: "Sci-fi",
      description:
        "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      platform: "Netflix",
      approved: false,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 25,
      title: "The Handmaid's Tale",
      image:
        "https://www.gstatic.com/tv/thumb/tvbanners/16580107/p16580107_b_v8_aa.jpg",
      genre: "Sci-fi|Drama",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      platform: "Hulu",
      approved: false,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 26,
      title: "Saturday Night Live",
      image:
        "https://www.gstatic.com/tv/thumb/tvbanners/17312881/p17312881_b_v8_aa.jpg",
      genre: "Comedy",
      description:
        "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      platform: "Hulu|NBC|YouTube|Sling TV|fubo TV",
      approved: false,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 27,
      title: "GLOW (TV series)",
      image:
        "https://www.gstatic.com/tv/thumb/tvbanners/17003042/p17003042_b_v8_aa.jpg",
      genre: "Drama|Comedy|",
      description:
        "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      platform: "Hulu",
      approved: false,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 28,
      title: "One Punch Man",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzQxMzE5NzM2NV5BMl5BanBnXkFtZTgwMDQ4NTUyNzE@._V1_.jpg",
      genre: "Anime",
      description:
        "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      platform: "Crunchyroll",
      approved: true,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 29,
      title: "Naruto",
      image:
        "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpg",
      genre: "Anime",
      description:
        "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      platform: "Crunchyroll|Netflix|Hulu",
      approved: false,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    },
    {
      id: 30,
      title: "Unbreakable Kimmy Schmidt",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTgyNTQyNjUwN15BMl5BanBnXkFtZTgwNjMwNjUzNzM@._V1_.jpg",
      genre: "Comedy",
      description:
        "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      platform: "Netflix",
      approved: false,
      created_at: "2020-02-03T01:12:37.601Z",
      updated_at: "2020-02-03T01:12:37.601Z"
    }
  ]);

  const addShow = show => {
    show.key = Math.random().toString();
    setShows(currentShow => {
      return [Show, ...currentShow];
    });
    setModalOpen(false);
  };

  return (
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
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ShowDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderRightWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center"
  },
  modalClose: { marginTop: 20, marginBottom: 0 },
  modalContent: {
    flex: 1
  }
});
