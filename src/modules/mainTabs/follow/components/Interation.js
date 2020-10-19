import React, {Component, useState} from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import Toast from 'react-native-root-toast';
import { useRoute, useNavigation } from '@react-navigation/native';

const commonStyles = require("../../../../common/style/index").default
const styles = require("../style/styles").default

export default function Interation (props){
    const [isLiked, setLiked] = useState(false);
    const navagation = useNavigation()
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
                        style={commonStyles.fullView}
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
            <TouchableOpacity 
                style={styles.commentContainer}
                onPress={()=>{
                    // QuickToast.show(props.ownerName)
                    navigation.navigate("Comment", {_profile: props})
                }}
            >
                <Text style={styles.txtLikeCount}>
                    Comment: 210
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const _likedImg = require("../../../../../res/image/HomeScreen/like_128_blue.png")
const _unlikedImg = require("../../../../../res/image/HomeScreen/unlike_128_grey.png")