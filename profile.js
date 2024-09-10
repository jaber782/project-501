import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const profile = () => {
  return (
    <View>
          <Text>profile</Text>
          <Link href='/home'>go to home</Link>
          <Link href='/'>go to index</Link>
          
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})