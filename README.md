### react-native-carousel-text
A React Native module for vertical scroll text Ads 垂直滚动的文字组件（滚动广告）


![img](https://github.com/OrangeFlavoredColdCoffee/react-native-carousel-text/blob/master/img/demo.gif/img/demo.gif)

####Setup Install the package:

npm install react-native-carousel-text


#### Usage example
import ScrollVertical from '../components/ScrollVertical';

data source (数据结构)
``` 
     let array = [{ content: '' }];
       if (news && news.length > 0) {
         array = [];
         for (const item of news) {
           array.push({ content: item.name });
         }
       }
```

usage
```
                <ScrollVertical
                  onChange={((index) => {
                    this.index = index;
                  })}
                  enableAnimation
                  data={array}
                  delay={2000}
                  duration={500}
                  scrollHeight={45}
                  scrollStyle={{ alignItems: 'flex-start', marginLeft: 15 }}
                  textStyle={{ color: '#333', fontSize: 14 }}
                />

```
