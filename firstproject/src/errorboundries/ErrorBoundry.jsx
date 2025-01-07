import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    state = { hasError: false };

    // This method updates the state when an error occurs
    static getDerivedStateFromError() {
        return { hasError: true };
    }

 

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong 😂</h1>; // Fallback UI
        }
        return this.props.children; // Render child components if no error
    }
}
