import { useState } from "react";
import { Image, View, Text, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./style";

// Icons
import SearchIcon from "../../assets/icons/searchIcon.svg";
import EnvelopeIcon from "../../assets/icons/envelopeIcon.svg";
import CheckIcon from "../../assets/icons/checkIcon.svg";
import LockIcon from "../../assets/icons/lockIcon.svg";
import FacebookIcon from "../../assets/icons/facebookIcon.svg";
import GoogleIcon from "../../assets/icons/googleIcon.svg";
import AppleIcon from "../../assets/icons/appleIcon.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <View style={styles.loginView}>
      <StatusBar style="light" />
      <View style={styles.hdrBlock}>
        <Image
          source={require("../../assets/images/loginWave.png")}
          style={styles.loginWave}
        />
        <View style={styles.actions}>
          <Text style={styles.hdrLabel}>Login</Text>
          <View>
            <SearchIcon height={20} width={20} />
          </View>
        </View>
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.meta}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.metaText}>Let’s login for explore continues</Text>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
          />
        </View>
        {/* Form */}
        <View style={styles.loginForm}>
          {/* Email */}
          <View style={[styles.fieldControl, { marginBottom: 20 }]}>
            <Text style={styles.fieldLabel}>Email</Text>
            <View
              style={[
                styles.fieldRow,
                emailFocused ? styles.fieldControlTransparent : "",
              ]}
            >
              <EnvelopeIcon
                width={16}
                height={12}
                style={styles.fieldLeftIcon}
              />
              <TextInput
                style={styles.fieldInput}
                placeholder="Enter Email"
                value={email}
                onChangeText={setEmail}
                onBlur={() => setEmailFocused(false)}
                onFocus={() => setEmailFocused(true)}
              />
              {email && (
                <View style={styles.checked}>
                  <CheckIcon height={5} width={6} />
                </View>
              )}
            </View>
          </View>

          {/* Password */}
          <View style={[styles.fieldControl, { marginBottom: 45 }]}>
            <Text style={styles.fieldLabel}>Password</Text>
            <View
              style={[
                styles.fieldRow,
                passwordFocused ? styles.fieldControlTransparent : "",
              ]}
            >
              <LockIcon height={16} width={13} style={styles.fieldLeftIcon} />
              <TextInput
                style={styles.fieldInput}
                placeholder="Enter Password"
                onBlur={() => setPasswordFocused(false)}
                onFocus={() => setPasswordFocused(true)}
              />
              <View style={styles.viewPassword}>
                <Text style={styles.viewPasswordText}>View</Text>
              </View>
            </View>
            <View style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>forgot password</Text>
            </View>
          </View>

          {/* Sign in Button */}
          <View style={styles.signInButton}>
            <Text style={styles.signInButtonText}>Sign in</Text>
          </View>
        </View>

        {/* You can Connect with */}
        <View style={styles.connectOthers}>
          <View style={styles.connectHdr}>
            <View style={styles.connectBorder} />
            <Text style={styles.connectText}>You can Connect with</Text>
          </View>

          <View style={styles.connectActions}>
            <View style={styles.socialButton}>
              <FacebookIcon />
            </View>
            <View style={styles.socialButton}>
              <GoogleIcon />
            </View>
            <View style={[styles.socialButton, styles.marginRight0]}>
              <AppleIcon />
            </View>
          </View>
          <View style={styles.noAccountRow}>
            <Text style={styles.noAccountText}>Don’t have an account? </Text>
            <View>
              <Text style={[styles.noAccountText, styles.textColor]}>
                Sign Up here
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Login;
