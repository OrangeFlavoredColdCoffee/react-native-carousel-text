import React, { Component } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // 必须有背景或border，否则高度不起作用
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  textDefault: {
    fontSize: 16,
    color: '#181818',
  },
});

class ScrollVertical extends Component {

  constructor(props) {
    super(props);
    const translateValue = new Animated.ValueXY({ x: 0, y: 0 });
    translateValue.addListener(({ x, y }) => {
    });
    this.state = {
      translateValue,
      // 滚屏高度
      scrollHeight: this.props.scrollHeight || 32,
      // 滚屏内容
      content: [],
      // Animated.View 滚动到的 y轴坐标
      tempValue: 0,
      // 最大偏移量
      contentOffsetY: 0,
      // 滚动间隔时间
      delay: this.props.delay || 1500,
      // 滚动持续时间
      duration: this.props.duration || 500,
      enableAnimation: true,
    };
  }

  componentWillMount() {
    const content = this.props.data || [];
    if (content.length !== 0) {
      const h = (content.length + 1) * this.state.scrollHeight;
      this.setState({
        content: content.concat(content[0]),
        contentOffsetY: h,
      });
    }
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ enableAnimation: !!nextProps.enableAnimation }, () => {
      this.startAnimation();
    },
    );
  }

  componentWillUnmount() {
    if (this.animation) {
      clearTimeout(this.animation);
    }
    if (this.state.translateValue) {
      this.state.translateValue.removeAllListeners();
    }
  }

  createItem(item, index) {
    return (
      <View
        key={index}
        style={[
          {
            justifyContent: 'center',
            height: this.state.scrollHeight,
          },
          this.props.scrollStyle]}
      >
        <Text style={[styles.textDefault, this.props.textStyle]}>{item.content}</Text>
      </View>
    );
  }

  startAnimation() {
    if (this.state.enableAnimation) {
      if (!this.animation) {
        this.animation = setTimeout(() => {
          this.animation = null;
          this.beginAnim();
        }, this.state.delay);
      }
    }
  }

  beginAnim() {
    this.state.tempValue -= this.state.scrollHeight;
    if (this.props.onChange) {
      const index = Math.abs(this.state.tempValue) / (this.state.scrollHeight);
      this.props.onChange(index < this.state.content.length - 1 ? index : 0);
    }
    Animated.sequence([
      Animated.timing(
        this.state.translateValue,
        {
          isInteraction: false,
          easing: Easing.linear,
          duration: this.state.duration,
          toValue: { x: 0, y: this.state.tempValue },
        },
      ),
    ]).start(() => {
      // 无缝切换
      if (this.state.tempValue - this.state.scrollHeight === -this.state.contentOffsetY) {
        // 快速重置初始状态
        this.state.translateValue.setValue({ x: 0, y: 0 });
        this.state.tempValue = 0;
      }
      this.startAnimation();
    });
  }

  render() {
    return (
      <View
        style={[styles.container, { height: this.state.scrollHeight }, this.props.container]}
      >
        {
          this.state.content.length !== 0
            ? <Animated.View
              style={[
                {
                  flexDirection: 'column',
                  transform: [{ translateY: this.state.translateValue.y }],
                }]}
            >
              {this.state.content.map(this.createItem.bind(this))}
            </Animated.View>
            : null
        }
      </View>
    );
  }
}

ScrollVertical.defaultProps = {
  enableAnimation: true,
};
export default ScrollVertical;
