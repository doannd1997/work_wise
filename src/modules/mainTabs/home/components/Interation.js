import React, {Component, useState} from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import Toast from 'react-native-root-toast';
import { useRoute, useNavigation } from '@react-navigation/native';

const commonStyles = require("../../../../common/style/index").default
const styles = require("../style/styles").default

export default function Interation (props){
    const [isLiked, setLiked] = useState(false);
    const navigation = useNavigation()
    return (
        <View style={styles.interationContainer}
        >
            <TouchableOpacity style={styles.likeContainer}
                onPress={
                    ()=>{
                        setLiked(!isLiked)
                    }
                }
            >
                <View 
                    style={styles.btnLike}
                >
                    <Image 
                        style={[commonStyles.fullView, styles.imgLike]}
                        source={isLiked ? _likedImg : _unlikedImg}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.likeCountContainer}>
                    <Text style={styles.txtLikeCount}>
                        Like 120K
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commentContainer}
                onPress={
                    ()=>{
                        navigation.navigate("Comment", {_profile: props})
                    }
                }
            >
                <View 
                    style={styles.btnLike}
                >
                    <Image 
                        style={[commonStyles.fullView, styles.imgLike]}
                        source={_commentImg}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.likeCountContainer}>
                    <Text style={styles.txtLikeCount}>
                        Comment
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const _likedImg = require("../../../../../res/image/HomeScreen/heart_128_231_83_72.png")
const _unlikedImg = require("../../../../../res/image/HomeScreen/heart_128_180_180_180.png")
const _commentImg = require("../../../../../res/image/HomeScreen/message_128_180_180_180.png")