### react-native-carousel-text
A React Native module for vertical scroll text Ads 垂直滚动的文字组件（滚动广告）


http://img.blog.csdn.net/20180308114144824?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvVGFvb0xlZQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast

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
