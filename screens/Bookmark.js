import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Title, Card } from "react-native-paper";
import { useSelector } from "react-redux";

export default function Bookmark() {
  const BOOK_MARK_LIST = useSelector((state) => state.BOOK_MARK_LIST);
  // const dispatch = useDispatch()
  const deleteBookmark = (book) => {
    alert(JSON.stringify(book));
  };
  return (
    <>
      <SafeAreaView styles={styles.container} backgroundColor="#382a38">
        <ScrollView>
          <Title style={{ color: "#f5f5f5", marginLeft: 140, paddingTop: 8 }}>
            {" "}
            BookMark{" "}
          </Title>

          <Card style={styles.card}>
            <Text style={styles.para}>List Of Books</Text>
          </Card>

          <View style={styles.lineStyle} />

          <Text style={styles.textMain}>
            Total Number Of books in Bookmark : {BOOK_MARK_LIST.length}
          </Text>

          <View style={styles.lineStyle} />
          <Card style={styles.cardMain}>
            {BOOK_MARK_LIST.map((book, index) => (
              <View key={index} style={styles.textCont}>
                {/* <Text style={styles.text}>Book Id : {book.bookId}</Text> */}
                <Text style={styles.textBook}>Book : {book.bookName}</Text>
                <Text style={styles.text}>Author :{book.bookAuthor}</Text>
                <Text style={styles.text}>Language :{book.bookLanguage}</Text>
                <Text style={styles.text}>Rating :{book.bookRating}</Text>

                <TouchableOpacity
                  style={styles.commandButton}
                  onPress={() => deleteBookmark(book)}
                >
                  <Text style={styles.panelButtonTitle}>Book Added</Text>
                </TouchableOpacity>
              </View>
            ))}
          </Card>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5b6467",
    color: "white",
    marginBottom: 100,
  },
  lineStyle: {
    borderWidth: 0.5,

    borderColor: "white",
    margin: 10,
  },
  line: {
    borderWidth: 0.5,

    borderColor: "white",
    margin: 20,
  },
  textMain: {
    color: "white",
    fontSize: 18,
    marginLeft: 25,
  },
  text: {
    fontSize: 18,
    padding: 5,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  textBook: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  textCont: {
    textAlign: "center",
    alignItems: "center",
    textAlignVertical: "center",
  },
  commandButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    width: "40%",

    justifyContent: "center",
    alignItems: "center",
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  para: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
  },
  card: {
    width: "60%",
    marginLeft: 80,
  },
  cardMain: {
    backgroundColor: "grey",
    width: "80%",
    marginLeft: 40,
    padding: 10,
    marginBottom: 500,
  },
});
