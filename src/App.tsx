import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "redux/store";
import AppRouter from "router/AppRouter";
import historyObj from "router/history";
import theme from "theme";

const persistor = persistStore(store);

const history = syncHistoryWithStore(historyObj, store);

function App(): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
              <AppRouter />
            </Router>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
