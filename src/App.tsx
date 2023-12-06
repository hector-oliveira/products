import { StatusBar } from 'expo-status-bar';
import { useFontsLoaded } from '@hooks/useFontsLoaded';
import { ThemeProvider } from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthRoutes } from '@routes/auth.routes';
import { theme } from '@themes/theme';

export default function App() {
  const { fontError, fontsLoaded, onLayoutRootView } = useFontsLoaded();
  if (!fontsLoaded && !fontError) return null;

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar style="light" backgroundColor={theme.colors.background} />
        <AuthRoutes />
      </SafeAreaView>
    </ThemeProvider>
  );
}
