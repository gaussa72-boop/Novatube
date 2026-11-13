import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
const APP_URL = process.env.EXPO_PUBLIC_APP_URL;
export default function App() {
 return <SafeAreaView style={s.root}><StatusBar barStyle="light-content" backgroundColor="#090b12"/>
 {APP_URL ? <WebView source={{uri:APP_URL}} style={s.web} javaScriptEnabled domStorageEnabled allowsBackForwardNavigationGestures /> :
 <View style={s.center}><Text style={s.brand}>ASTRALIS · NOVATUBE</Text><Text style={s.title}>Creator Studio</Text><Text style={s.copy}>Die NovaTube-App ist vorbereitet. Nach dem Render-Deployment wird die Weboberfläche hier geladen.</Text></View>}
 </SafeAreaView>;
}
const s=StyleSheet.create({root:{flex:1,backgroundColor:"#090b12"},web:{flex:1,backgroundColor:"#090b12"},center:{flex:1,justifyContent:"center",padding:28},brand:{color:"#a99cff",letterSpacing:3,fontSize:12,marginBottom:20},title:{color:"#f4f7ff",fontSize:30,fontWeight:"700",marginBottom:14},copy:{color:"#a6b2c9",fontSize:16,lineHeight:24}});
