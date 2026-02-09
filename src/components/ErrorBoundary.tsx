import type { ReactNode } from 'react';
import { Component } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    message: string;
}

export default class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    state: ErrorBoundaryState = { hasError: false, message: '' };

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, message: error.message };
    }

    componentDidCatch(error: Error) {
        console.error(error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h1>Oops! Something went wrong.</h1>
                    <p>We are sorry, but an unexpected error has occurred.</p>
                    <p>
                        <i>{this.state.message}</i>
                    </p>
                </div>
            );
        }

        return this.props.children;
    }
}
