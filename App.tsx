import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    NativeModules,
    SafeAreaView,
} from 'react-native';

function App(): React.JSX.Element {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNativeModule = async () => {
        try {
            const result =
                await NativeModules.CalendarModule.createCalendarEvent(
                    'testName',
                    'testLocation',
                );
            console.log('Result from native module:', result);
        } catch (error) {
            console.error('Error from native module:', error);
        }
    };

    const handleLogin = () => {
        // Add your login logic here
        const result = NativeModules.CalendarModule.createCalendarEventSync(
            email,
            password,
        );
        console.log({result});
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.title}>Welcome Back</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* Original Native Module Button */}
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleNativeModule}>
                    <Text style={styles.loginButtonText}>
                        Call Native Module
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    loginButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
    },
    loginButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    forgotPassword: {
        color: '#007AFF',
        textAlign: 'center',
        marginTop: 15,
    },
});

export default App;
