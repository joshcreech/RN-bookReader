import React, { Component } from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  BackHandler,
  SafeAreaView,
  StatusBar,
  TextInput,
  Platform,
  Keyboard,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableHighlight
} from 'react-native';
//=== side bar ===
import ScalingDrawer from 'react-native-scaling-drawer';
import SideBar from '../../components/SideBar';
import {firstData,descData} from './data';
import LinearGradient from 'react-native-linear-gradient';
//=== star ====
import {
  AirbnbRating,
} from 'react-native-elements';
//=== style ==
import styles from './styles';
import colors from '../../utils/colors';

class BookmarkScreen extends  Component{
  constructor(props){
    super(props)
    this.state={
      firstData: firstData,
      name: 'Big Magic',
      rating: 3,
      subTitle: "This is subtitle of this book",
      authorName: "Mr. Vikas anand Sath",
      review: 100,
      language: 'English',
      category: 'Mystry',
      format: 'e-book',
      imageUrl: require('../../assets/placeHolder/bookmagic.svg')
    }
  }

  render() {
    let {
      name,
      rating,
      authorName,
      review,
      language,
      format,
      imageUrl,
      firstData
    } = this.state
    return (
      // === side bar ===
      <ScalingDrawer 
        tapToClose={true}
        minimizeFactor={0.5}
        swipeOffset={10}
        scalingFactor={0.8}
        ref={ref => this._drawer = ref}
        content={<SideBar navigation={this.props.navigation}/>}
      >
        <ScrollView style={styles.screenContainer} bounces={false}>
          <View style={styles.screenContainer}>
            <StatusBar 
              backgroundColor={colors.circleColor} 
              barStyle="light-content"
              translucent={false}
            />
              {/* === header === */}
            <ImageBackground 
              style={styles.headerContainer2} 
              source={require('../../assets/icons/main-bg.svg')}>
              <SafeAreaView />
              <View
                style={styles.headerContainer} >
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.menuIcon}
                  onPress={()=>{this._drawer.open()}}
                >
                  <Image
                    style={styles.imageStyle}
                    source={require('../../assets/icons/toggle.svg')}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.headerText}>
                    My BookMarks
                  </Text>
                </View>
                
               <View/>
              </View>
            </ImageBackground>
              {/* === main content === */}
            <View style={styles.mainContainer}>
              {/* === top book Details ==== */}
              <View style={styles.rowContainer}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={()=>this.props.navigation.navigate('BookDetails')} 
                  style={styles.bookImageStyle1}>
                  <Image
                    source={imageUrl}
                    style={styles.imageStyle2}
                  />
                </TouchableOpacity>
                <View style={styles.cloumnStyle}>
                  {/* === book text === */}
                  <View style={styles.bookView}>
                    <Text style={styles.bookName}>
                      {name}
                    </Text>
                  </View>
                  {/* === first row === */}
                  <View style={styles.rowContainer3}>
                     {/* ===  Author  === */}
                    <View style={styles.rowContainer2}>
                      <View>
                        <Text style={styles.subheadingText}>
                          Author:
                        </Text>
                      </View>
                      <TouchableOpacity 
                        activeOpacity={0.8}
                        onPress={()=>{this.props.navigation.navigate('AuthorInfo')}}
                        style={styles.greenView}>
                        <Text style={styles.greenText}>
                          {authorName}
                        </Text>
                      </TouchableOpacity>
                    </View>
                     {/* === share  === */}
                    <TouchableOpacity 
                      //onPress={()=>}
                      activeOpacity={0.8}
                      style={styles.iconStyle}>
                        <Image
                          style={styles.imageStyle}
                          source={require('../../assets/icons/share-circle.svg')}
                        />
                    </TouchableOpacity>
                  </View>
                  {/* === Formate  === */}
                  <View style={{...styles.rowContainer3,marginTop: 10}}>
                    <View style={styles.rowContainer2}>
                      <View>
                        <Text style={styles.subheadingText}>
                          Format:
                        </Text>
                      </View>
                      <View style={styles.rowHelpView}>
                        <Text style={styles.subheadingText}>
                          {format}
                        </Text>
                      </View>
                    </View>
                    {/* === heart  === */}
                    <TouchableOpacity 
                      //onPress={()=>}
                      activeOpacity={0.8}
                      style={styles.iconStyle}>
                        <Image
                          style={styles.imageStyle}
                          source={require('../../assets/icons/heart-circle.svg')}
                        />
                    </TouchableOpacity>
                  </View>
                  {/* === language  === */}
                  <View style={{...styles.rowContainer2,marginTop: 5}}>
                    <View>
                      <Text style={styles.subheadingText}>
                        Language:
                      </Text>
                    </View>
                    <View style={styles.rowHelpView}>
                      <Text style={styles.subheadingText}>
                        {language}
                      </Text>
                    </View>
                  </View>
                  <View style={{...styles.rowContainer2,marginTop: 8,marginBottom: 10}}>
                    <View style={styles.circleStyle}/>
                    <View style={styles.lineStyle}/>
                    <View style={styles.circleStyle}/>
                  </View>
                  {/* === second row === */}
                  <View style={{...styles.rowContainer2}}>
                    <View>
                      {/* === Category  === */}
                      <View style={styles.rowContainer2}>
                        {/* === Rating === */}
                        <View style={styles.ratingView}>
                          <AirbnbRating
                            defaultRating={rating}
                            selectedColor={colors.yellowColor}
                            size={10}
                            fractions={true}
                            isDisabled={true}
                            showRating={false}
                            starStyle={{
                              padding: 0,
                              backgroundColor: 'transparent',
                              margin: 0,
                            }}
                          />
                        </View>
                        <View style={styles.overallRating}>
                          <Text style={styles.subheadingText}>
                            {rating}/5
                          </Text>
                        </View>
                      </View>
                    </View>
                    {/* === Review  === */}
                    <View style={{...styles.rowContainer2,marginLeft: 30}}>
                      <View>
                        <Text style={styles.subheadingText}>
                          Review:
                        </Text>
                      </View>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={()=>this.props.navigation.navigate('Review')} 
                        style={{...styles.greenView,borderBottomWidth: 0}}>
                        <Text style={styles.greenText}>
                          {review}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              {/* ==== description ==== */}
              <View style={styles.headView}>
                <Text style={styles.headText}>
                  Description
                </Text>
              </View>
              {/* === desc ==== */}
              <View>
                <Text style={styles.descText}>
                  {descData}
                  {"\n"} {"\n"}
                  {descData}
                </Text>
              </View>
              {/* === read  === */}
              <TouchableOpacity 
                style={styles.readButton}
                activeOpacity={0.8}
                //onPress={()=>{}}
                >
                <Text style={styles.readText}>
                  READ FOR FREE
                </Text>
              </TouchableOpacity>
              <View style={{...styles.rowContainer2,marginTop: 20,marginBottom: 10}}>
                <View style={styles.circleStyle}/>
                <View style={styles.lineStyle}/>
                <View style={styles.circleStyle}/>
              </View>
              {/* ==== description ==== */}
              <View style={styles.headView}>
                <Text style={styles.headText}>
                  Similar Books
                </Text>
              </View>
              {/* //=== book List === */}
              <View style={styles.listStyle}>
                <FlatList
                  data={firstData}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  extraData={this.state}
                  renderItem={({item,index}) =>{
                    const _that = this;
                  return(
                    <View style={styles.boxContainer}>
                      <View style={styles.boxStyle}>
                        <Image
                          style={styles.imageStyle2}
                          source={item.imageUrl}
                        />
                      </View>
                      <View style={styles.bookTxtView}>
                        <Text numberOfLines={2} style={styles.readingBook}>
                          {item.bookName}
                        </Text>
                      </View>
                    </View>
                  )}}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </ScalingDrawer>
    );
  }
}

//===  make components available outside ===
export default BookmarkScreen;