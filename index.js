import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link, Redirect, router } from 'expo-router'
import home from './home'

const index = () => {
    return (
    //   <Redirect href="/home" />
      <View style={styles.container}>
          
          <Text>index</Text>
          <Link href='/home' > go to Home</Link>
          {/* <Link href='/profile' > go to profile</Link> */}
          <Pressable onPress={() => router.replace("/profile")}>
              <Text>go to profile</Text>
          </Pressable>

    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container:{},
})