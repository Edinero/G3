import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./context";
import { OptionsProvider } from "./context/OptionsContext";
import { AssentsProvider } from "./context/AssentsContext";
import { SalaProvider } from "./context/SalaProvider";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <AuthProvider>
      <OptionsProvider>
        <AssentsProvider>
          <SalaProvider>
              <CartProvider>
                <AppRouter />
              </CartProvider>
          </SalaProvider>
        </AssentsProvider>
      </OptionsProvider>
    </AuthProvider>
  );
}

export default App;
