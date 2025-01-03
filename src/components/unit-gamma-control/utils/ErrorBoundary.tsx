import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Błąd app w ErrorBoundary:", error);
    console.error("Szczegóły app błędu:", errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ my: 5, p: 2, color: "red", border: "1px solid red", maxWidth: 1400, }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <ErrorOutlineIcon color="error" sx={{ fontSize: 80 }} />
            <Typography variant="h5">
              Wystąpił błąd podczas ładowania mikrofrontendu...
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              {this.state.error?.message}
            </Typography>

            <Button variant="contained" color="warning" onClick={this.handleRetry} sx={{ mt: 2 }}>
              Spróbuj ponownie.
            </Button>
          </Box>

        </Box>

      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
