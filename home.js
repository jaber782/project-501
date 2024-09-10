import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const home = () => {
  return (
    <View>
          <Text>home</Text>
          <Link href="/">go to index</Link>
          <Link href='/profile'>go to profile</Link>
    </View>
  )
}

export default home

const styles = StyleSheet.create({});