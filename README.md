### react-native-carousel-text
A React Native module for vertical scroll text Ads 垂直滚动的文字组件（滚动广告）


![img](https://github.com/OrangeFlavoredColdCoffee/react-native-carousel-text/blob/master/img/demo.gif)

#### Setup Install the package:

npm install react-native-carousel-text


#### Usage example
import ScrollVertical from '../components/ScrollVertical';

```
                       <ScrollVertical
                         onChange={((index) => {
                           this.index = index;
                         })}
                         enableAnimation
                         delay={2000}
                         duration={500}
                         scrollHeight={45}
                       >
                         <TouchableOpacity
                           style={[
                             {
                               justifyContent: 'center',
                               height: 45,
                               alignItems: 'flex-start',
                               marginLeft: 15,
                             }]} onPress={() => Alert.alert('11')}
                         >
                           <Text style={{color: '#ff00ff'}}>广告1</Text>
                         </TouchableOpacity>
                         <TouchableOpacity
                           style={[
                             {
                               justifyContent: 'center',
                               height: 45,
                               alignItems: 'flex-start', marginLeft: 15,
                             }]}
                           onPress={() => Alert.alert('11')}
               
                         >
                           <Text>广告2</Text>
                         </TouchableOpacity>
                         <TouchableOpacity
                           style={[
                             {
                               justifyContent: 'center',
                               height: 45,
                               alignItems: 'flex-start', marginLeft: 15,
                             }]} onPress={() => Alert.alert('11')}
                         >
                           <Text>广告3</Text>
                         </TouchableOpacity>
                       </ScrollVertical>


```
