import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import * as FirebaseRecaptcha from 'expo-firebase-recaptcha';
import { initializeApp, getApp } from 'firebase/app';
import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';

// Add your Firebase >=9.x.x config here
// https://firebase.google.com/docs/web/setup
const firebaseConfig = {
  
apiKey: "AIzaSyAheQgyYLt3_yfrHqN-zcuLRdpXv1xcg8k",
  authDomain: "goldeneyeapi.firebaseapp.com",
  projectId: "goldeneyeapi",
  storageBucket: "goldeneyeapi.appspot.com",
  messagingSenderId: "160982244675",
  appId: "1:160982244675:web:e223cd999bc975d99f23f6"

};

try {
  if (firebaseConfig.apiKey) {
    initializeApp(firebaseConfig);
  }
} catch (err) {
  // ignore app already initialized error on snack
}

// Firebase references
const app = getApp();
const auth = getAuth(app);

export default function PhoneAuthScreen({navigation}) {
  const recaptchaVerifier = React.useRef(null);
  const verificationCodeTextInput = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [verificationId, setVerificationId] = React.useState('');
  const [verifyError, setVerifyError] = React.useState();
  const [verifyInProgress, setVerifyInProgress] = React.useState(false);
  const [verificationCode, setVerificationCode] = React.useState('');
  const [confirmError, setConfirmError] = React.useState();
  const [confirmInProgress, setConfirmInProgress] = React.useState(false);
  const isConfigValid = !!firebaseConfig.apiKey;

  return (
    <View style={styles.container}>
       <View style={styles.cont}>
      <View style={styles.content}>
        <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
        <Text style={styles.title}>otp verification</Text>
  
        <Text style={styles.text}>Enter phone number</Text>
        <TextInput
          style={styles.textInput}
          autoFocus={isConfigValid}
          autoCompleteType="tel"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          placeholder="+91 9999999999"
          editable={!verificationId}
          onChangeText={setPhoneNumber}
        />
        <Button
          title={`${verificationId ? 'Resend' : 'Send'} Verification Code`}
          disabled={!phoneNumber}
          color="#841584"
          onPress={async () => {
            const phoneProvider = new PhoneAuthProvider(auth);
            try {
              setVerifyError(undefined);
              setVerifyInProgress(true);
              setVerificationId('');
              const verificationId = await phoneProvider.verifyPhoneNumber(
                phoneNumber,
                recaptchaVerifier.current
              );
              setVerifyInProgress(false);
              setVerificationId(verificationId);
              verificationCodeTextInput.current?.focus();
            } catch (err) {
              setVerifyError(err);
              setVerifyInProgress(false);
            }
          }}
        />
        {verifyError && <Text style={styles.error}>{`Error: ${verifyError.message}`}</Text>}
        {verifyInProgress && <ActivityIndicator style={styles.loader} />}
        {verificationId ? (
          <Text style={styles.success}>A verification code has been sent to your phone</Text>
        ) : undefined}
        <Text style={styles.text}>Enter verification code</Text>
        <TextInput
          ref={verificationCodeTextInput}
          style={styles.textInput}
          // editable={!!verificationId}
          placeholder="123456"
          onChangeText={setVerificationCode}
        />
        <Button
          title="Confirm Verification Code"
          disabled={!verificationCode}
       
          color="#841584"
          onPress={async () => {
            try {
              setConfirmError(undefined);
              setConfirmInProgress(true);
              const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
              const authResult = await signInWithCredential(auth, credential);
              setConfirmInProgress(false);
              setVerificationId('');
              setVerificationCode('');
              verificationCodeTextInput.current?.clear();
              navigation.navigate('GOLDEN')
            } catch (err) {
              setConfirmError(err);
              setConfirmInProgress(false);
            }
          }}
        />
        {confirmError && <Text style={styles.error}>{`Error: ${confirmError.message}`}</Text>}
        {confirmInProgress && <ActivityIndicator style={styles.loader} />}
      </View>
      {!isConfigValid && (
        <View style={styles.overlay} pointerEvents="none">
          <Text style={styles.overlayText}>
            To get started, set a valid firebaseConfig in App.js.
          </Text>
        </View>
      )}
    </View>
     </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  cont:{
    padding:40,
    width:'80%',
    height:400,
    backgroundColor:'#ddd',
    borderRadius:25,
    
      },
  content: {
    marginTop: 10,
  },
  title:{
    fontSize:25,
    color:'#066AC8',
    fontWeight:'900',
    textAlign:'center',
    textTransform:'uppercase',
  
    
  },

  text: {
    marginTop: 30,
    marginBottom: 4,
    fontSize:16,
  },
  textInput: {
    marginBottom: 8,
    fontSize: 17,
    fontWeight: 'bold',
    backgroundColor:'#9994',
    borderRadius:5,
    height:40,
    paddingLeft:10,
  },
  error: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'red',
  },
  success: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#066AC8',
  },
  loader: {
    marginTop: 10,
    color: '#066AC8',

  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#FFFFFFC0',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  overlayText: {
    fontWeight: 'bold',
  },
  btnn:{
  color:'red',
  backgroundColor:'blue'
 }
});
